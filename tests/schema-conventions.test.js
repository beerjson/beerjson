/**
 * Enforces the authoring conventions in SCHEMA_STYLE.md.
 *
 * Rules the schemas already satisfy are asserted outright. Rules they do not
 * yet satisfy carry an explicit allowlist of existing violations, so a new one
 * fails while the known ones are tracked. An allowlist may shrink, never grow:
 * fixing a violation means deleting its entry, and a stale entry fails too.
 */
const fs = require('fs')
const path = require('path')

const JSON_DIR = path.join(__dirname, '..', 'json')

const files = fs.readdirSync(JSON_DIR).filter(f => f.endsWith('.json'))
const schemas = {}
for (const file of files) {
  schemas[file] = JSON.parse(fs.readFileSync(path.join(JSON_DIR, file), 'utf8'))
}

/**
 * Every property in a schema, as { path, key, def }. Paths are stable
 * identifiers used by the allowlists below, e.g.
 * `WaterType[allOf1].pH` for a property contributed by the second branch of an
 * allOf composition.
 */
const walkProperties = schema => {
  const out = []
  const visit = (node, at) => {
    if (!node || typeof node !== 'object') return
    if (node.properties) {
      for (const [key, def] of Object.entries(node.properties)) {
        out.push({ path: `${at}.${key}`, key, def })
        visit(def, `${at}.${key}`)
      }
    }
    for (const kw of ['allOf', 'oneOf', 'anyOf']) {
      if (Array.isArray(node[kw])) {
        node[kw].forEach((branch, i) => visit(branch, `${at}[${kw}${i}]`))
      }
    }
    if (node.items) visit(node.items, `${at}[]`)
  }
  for (const [name, def] of Object.entries(schema.$defs || {})) visit(def, name)
  if (schema.properties) visit(schema, '<root>')
  return out
}

const everyProperty = () => {
  const out = []
  for (const file of files) {
    for (const prop of walkProperties(schemas[file])) {
      out.push({ ...prop, file, id: `${file}#${prop.path}` })
    }
  }
  return out
}

/**
 * Compares found violations against an allowlist, failing on anything new and
 * on any entry that no longer applies.
 */
const expectOnlyKnown = (found, allowed) => {
  expect({
    new: found.filter(x => !allowed.includes(x)).sort(),
    fixed: allowed.filter(x => !found.includes(x)).sort()
  }).toEqual({ new: [], fixed: [] })
}

describe('file structure', () => {
  test.each(files)(
    '%s declares 2020-12 and an $id matching its filename',
    file => {
      const schema = schemas[file]
      expect(schema.$schema).toBe(
        'https://json-schema.org/draft/2020-12/schema'
      )
      expect(schema.$id).toBe(
        `https://raw.githubusercontent.com/beerjson/beerjson/main/json/${file}`
      )
    }
  )

  test('only beer.json declares root properties', () => {
    const withRoot = files.filter(f => schemas[f].properties)
    expect(withRoot).toEqual(['beer.json'])
  })

  test('no schema still uses the draft-07 `definitions` keyword', () => {
    expect(files.filter(f => schemas[f].definitions)).toEqual([])
  })
})

describe('referencing', () => {
  const collectRefs = () => {
    const refs = []
    const visit = (node, file, at) => {
      if (!node || typeof node !== 'object') return
      if (Array.isArray(node)) {
        node.forEach((v, i) => visit(v, file, `${at}/${i}`))
        return
      }
      for (const [key, value] of Object.entries(node)) {
        if (key === '$ref') refs.push({ file, at, ref: value })
        else visit(value, file, `${at}/${key}`)
      }
    }
    for (const file of files) visit(schemas[file], file, '')
    return refs
  }

  const defined = new Set()
  for (const file of files) {
    for (const name of Object.keys(schemas[file].$defs || {})) {
      defined.add(`${file}#${name}`)
    }
  }

  test('every $ref resolves', () => {
    const broken = collectRefs()
      .filter(({ file, ref }) => {
        const match = ref.match(/^([^#]*)#\/\$defs\/(.+)$/)
        if (!match) return true
        return !defined.has(`${match[1] || file}#${match[2]}`)
      })
      .map(({ file, at, ref }) => `${file}${at} -> ${ref}`)
    expect(broken).toEqual([])
  })

  test('every definition is referenced', () => {
    const used = new Set(
      collectRefs().map(({ file, ref }) => {
        const match = ref.match(/^([^#]*)#\/\$defs\/(.+)$/)
        return match ? `${match[1] || file}#${match[2]}` : null
      })
    )
    expect([...defined].filter(d => !used.has(d)).sort()).toEqual([])
  })
})

describe('naming', () => {
  // SCHEMA_STYLE.md: PascalCase, suffixed Type for a concrete type or Base for
  // an allOf base.
  test('type names are PascalCase + Type/Base', () => {
    const found = []
    for (const file of files) {
      for (const name of Object.keys(schemas[file].$defs || {})) {
        if (!/^([A-Z][a-z0-9]*)+(Type|Base)$/.test(name)) {
          found.push(`${file}#${name}`)
        }
      }
    }
    expectOnlyKnown(found, [
      'culture.json#CultureInformation',
      'culture.json#Zymocide',
      'hop.json#VarietyInformation',
      'style.json#StyleCategories'
    ])
  })

  // Property keys are what appears in every BeerJSON document, so this is the
  // convention consumers feel most directly. The exceptions are tracked by
  // https://github.com/beerjson/beerjson/issues/208.
  test('property keys are snake_case', () => {
    const found = everyProperty()
      .filter(({ key }) => !/^[a-z][a-z0-9_]*$/.test(key))
      .map(({ id }) => id)
    expectOnlyKnown(found, [
      'packaging_graphic.json#PackagingGraphicType.URLS',
      'recipe.json#RecipeType.beer_pH',
      'timing.json#TimingType.pH',
      'water.json#WaterType[allOf1].pH'
    ])
  })
})

describe('objects and composition', () => {
  const roleOf = () => {
    const roles = {}
    const mark = (key, role) => {
      roles[key] = roles[key] || {}
      roles[key][role] = true
    }
    for (const file of files) {
      for (const [name, def] of Object.entries(schemas[file].$defs || {})) {
        if (!def.allOf) continue
        mark(`${file}#${name}`, 'extension')
        for (const branch of def.allOf) {
          if (!branch.$ref) continue
          const match = branch.$ref.match(/^([^#]*)#\/\$defs\/(.+)$/)
          if (match) mark(`${match[1] || file}#${match[2]}`, 'base')
        }
      }
    }
    return roles
  }

  const roles = roleOf()

  test('standalone object types close themselves to unknown keys', () => {
    const found = []
    for (const file of files) {
      for (const [name, def] of Object.entries(schemas[file].$defs || {})) {
        if (def.type !== 'object') continue
        const role = roles[`${file}#${name}`] || {}
        if (role.base || role.extension) continue
        if (!('additionalProperties' in def)) found.push(`${file}#${name}`)
      }
    }
    expect(found).toEqual([])
  })

  // In 2020-12 `additionalProperties` still only sees properties declared in
  // the same schema object, so next to an allOf it rejects everything the other
  // branch contributes. Composed types use `unevaluatedProperties` instead.
  test('allOf participants do not declare additionalProperties', () => {
    const found = []
    for (const file of files) {
      for (const [name, def] of Object.entries(schemas[file].$defs || {})) {
        const role = roles[`${file}#${name}`] || {}
        if (!role.base && !role.extension) continue
        if ('additionalProperties' in def) found.push(`${file}#${name}`)
      }
    }
    expect(found).toEqual([])
  })

  // A composed type without unevaluatedProperties accepts any misspelled key,
  // because additionalProperties cannot do the job next to an allOf. The four
  // still open are blocked on format questions, not on effort: their own
  // examples under tests/ use properties the types do not declare.
  test('allOf compositions are closed to unknown keys', () => {
    const found = []
    for (const file of files) {
      for (const [name, def] of Object.entries(schemas[file].$defs || {})) {
        if (!def.allOf) continue
        if (!('unevaluatedProperties' in def)) found.push(`${file}#${name}`)
      }
    }
    expectOnlyKnown(found, [
      // Recipe examples put the full variety record on an addition.
      'hop.json#HopAdditionType',
      // The BeerXML importer fills these with the style's ranges.
      'style.json#RecipeStyleType',
      // The BJCP and BA style guides carry 38 keys the type does not declare.
      'style.json#StyleType',
      // A recipe example records the pH of the water it added.
      'water.json#WaterAdditionType'
    ])
  })

  // unevaluatedProperties belongs on the outermost composed type only. On a
  // base it would reject every property the extension adds.
  test('unevaluatedProperties is not declared on an allOf base', () => {
    const found = []
    for (const file of files) {
      for (const [name, def] of Object.entries(schemas[file].$defs || {})) {
        const role = roles[`${file}#${name}`] || {}
        if (role.base && !role.extension && 'unevaluatedProperties' in def) {
          found.push(`${file}#${name}`)
        }
      }
    }
    expect(found).toEqual([])
  })
})

describe('arrays', () => {
  test('every array declares items', () => {
    const found = []
    const visit = (node, file, at) => {
      if (!node || typeof node !== 'object') return
      if (node.type === 'array' && !node.items) found.push(`${file}#${at}`)
      for (const [key, value] of Object.entries(node)) {
        if (value && typeof value === 'object')
          visit(value, file, `${at}/${key}`)
      }
    }
    for (const file of files) visit(schemas[file], file, '')
    expect(found).toEqual([])
  })
})

describe('measurements', () => {
  /**
   * A physical quantity uses a measurement type from measureable_units.json so
   * the document carries its own units. A bare number is correct only for a
   * dimensionless quantity.
   *
   * This list is frozen rather than budgeted: adding a bare number means adding
   * it here, which forces "what unit is this in?" to be answered in review.
   * Entries marked below are known to be wrong, not dimensionless.
   */
  test('bare numbers are limited to the known set', () => {
    const found = everyProperty()
      .filter(
        ({ def }) =>
          (def.type === 'number' || def.type === 'integer') && !def.enum
      )
      .map(({ id }) => id)
    expectOnlyKnown(found, [
      // Dimensionless counts and indexes.
      'culture.json#CultureAdditionType[allOf1].cell_count_billions',
      'culture.json#CultureAdditionType[allOf1].times_cultured',
      'culture.json#CultureInformation[allOf1].max_reuse',
      'packaging_vessel.json#PackagingVesselType.vessel_quantity',
      'recipe.json#TasteType.rating',
      'style.json#StyleBase.category_number',
      'timing.json#TimingType.step',
      // Dimensioned by a sibling `units` property.
      'packaging_graphic.json#PackagingGraphicType.dpi',
      'packaging_graphic.json#PackagingGraphicType.height',
      'packaging_graphic.json#PackagingGraphicType.width',
      // The value half of every measurement type. Its unit is the sibling
      // `unit` property, which is the whole point of these types.
      'measureable_units.json#AcidityType.value',
      'measureable_units.json#BitternessType.value',
      'measureable_units.json#CarbonationType.value',
      'measureable_units.json#ColorType.value',
      'measureable_units.json#ConcentrationType.value',
      'measureable_units.json#DiastaticPowerType.value',
      'measureable_units.json#GravityType.value',
      'measureable_units.json#MassType.value',
      'measureable_units.json#PercentType.value',
      'measureable_units.json#PressureType.value',
      'measureable_units.json#SpecificHeatType.value',
      'measureable_units.json#SpecificVolumeType.value',
      'measureable_units.json#TemperatureType.value',
      'measureable_units.json#TimeType.value',
      'measureable_units.json#UnitType.value',
      'measureable_units.json#ViscosityType.value',
      'measureable_units.json#VolumeType.value',
      // Should be measurement types. https://github.com/beerjson/beerjson/issues/207
      'packaging_vessel.json#PackagingVesselType.carbonation',
      'recipe.json#RecipeType.carbonation',
      // Should be AcidityType. https://github.com/beerjson/beerjson/issues/218
      'water.json#WaterType[allOf1].pH',
      // Unit is baked into the property name instead of being expressed.
      // https://github.com/beerjson/beerjson/issues/218
      'fermentable.json#FermentableType[allOf1].alpha_amylase',
      'hop.json#OilContentType.total_oil_ml_per_100g',
      'recipe.json#RecipeType.calories_per_pint'
    ])
  })
})

describe('descriptions', () => {
  /**
   * Every property carries a description. docs/ is generated from these strings
   * and they are the only documentation an implementer gets, so a property
   * without one is undocumented in the published reference.
   *
   * A property that is only a `$ref` is exempt: it inherits the referenced
   * type's own description.
   */
  const undescribed = file =>
    walkProperties(schemas[file])
      .filter(({ def }) => !def.description && !def.$ref)
      .map(({ path: at }) => `${file}#${at}`)

  test.each(files)('every property in %s has a description', file => {
    expect(undescribed(file)).toEqual([])
  })

  test.each(files)('every type in %s has a description', file => {
    const missing = Object.entries(schemas[file].$defs || {})
      .filter(([, def]) => !def.description)
      .map(([name]) => `${file}#${name}`)
    expect(missing).toEqual([])
  })

  // An empty string passes a truthiness check in some tooling but documents
  // nothing, and the published reference renders it as a blank cell.
  test('no description is blank or whitespace', () => {
    const blank = []
    for (const file of files) {
      for (const [name, def] of Object.entries(schemas[file].$defs || {})) {
        if ('description' in def && !String(def.description).trim()) {
          blank.push(`${file}#${name}`)
        }
      }
      for (const { path: at, def } of walkProperties(schemas[file])) {
        if ('description' in def && !String(def.description).trim()) {
          blank.push(`${file}#${at}`)
        }
      }
    }
    expect(blank).toEqual([])
  })
})
