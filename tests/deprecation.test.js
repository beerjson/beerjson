/**
 * A rename is only non-breaking if both spellings really validate. These tests
 * pin that contract, so removing the deprecated form is a deliberate act with a
 * failing test attached rather than a silent break of every existing document.
 */
const beerjson = require('../index.js')
const { CURRENT_VERSION } = require('../js/format-version')

const waterProfile = extra => ({
  beerjson: {
    version: CURRENT_VERSION,
    profiles: [
      {
        name: 'Test water',
        calcium: { unit: 'mg/l', value: 50 },
        bicarbonate: { unit: 'mg/l', value: 100 },
        sulfate: { unit: 'mg/l', value: 50 },
        chloride: { unit: 'mg/l', value: 50 },
        sodium: { unit: 'mg/l', value: 10 },
        magnesium: { unit: 'mg/l', value: 5 },
        ...extra
      }
    ]
  }
})

describe('WaterBase fluoride (#214)', () => {
  const schema = require('../json/water.json').$defs.WaterBase.properties

  test('the corrected spelling exists and is not deprecated', () => {
    expect(schema.fluoride).toBeDefined()
    expect(schema.fluoride.deprecated).toBeUndefined()
  })

  test('the misspelling is still declared, and marked deprecated', () => {
    expect(schema.flouride).toBeDefined()
    expect(schema.flouride.deprecated).toBe(true)
  })

  test('both spellings reference the same type', () => {
    expect(schema.fluoride.$ref).toBe(schema.flouride.$ref)
  })

  test('a document using the corrected spelling validates', () => {
    const result = beerjson.validate(
      waterProfile({ fluoride: { unit: 'mg/l', value: 1 } })
    )
    expect(result).toEqual({ valid: true, errors: [] })
  })

  test('a document using the deprecated spelling still validates', () => {
    const result = beerjson.validate(
      waterProfile({ flouride: { unit: 'mg/l', value: 1 } })
    )
    expect(result).toEqual({ valid: true, errors: [] })
  })

  test('a document using both validates', () => {
    const result = beerjson.validate(
      waterProfile({
        fluoride: { unit: 'mg/l', value: 1 },
        flouride: { unit: 'mg/l', value: 1 }
      })
    )
    expect(result).toEqual({ valid: true, errors: [] })
  })
})

describe('StyleBase category_id (#286)', () => {
  const schema = require('../json/style.json').$defs.StyleBase.properties
  const { styles } = require('./generic/styles.json').beerjson
  const style = fields => {
    const { category_number, ...rest } = styles[0]
    return {
      beerjson: { version: CURRENT_VERSION, styles: [{ ...rest, ...fields }] }
    }
  }

  test('category_number is still declared, and marked deprecated', () => {
    expect(schema.category_number.deprecated).toBe(true)
    expect(schema.category_id.deprecated).toBeUndefined()
  })

  test.each([
    ['category_id', { category_id: 'M1' }],
    ['category_number', { category_number: 2 }],
    ['both', { category_id: '2', category_number: 2 }]
  ])('a style using %s validates', (_, fields) => {
    expect(beerjson.validate(style(fields))).toEqual({
      valid: true,
      errors: []
    })
  })
})

describe('RecipeType energy_content (#289)', () => {
  const schema = require('../json/recipe.json').$defs.RecipeType.properties
  const { recipes } = require('./generic/recipes.json').beerjson
  const recipe = fields => {
    const { energy_content, ...rest } = recipes[0]
    return {
      beerjson: { version: CURRENT_VERSION, recipes: [{ ...rest, ...fields }] }
    }
  }
  const energy_content = { unit: 'kcal/ipt', value: 180 }

  test('calories_per_pint is still declared, and marked deprecated', () => {
    expect(schema.calories_per_pint.deprecated).toBe(true)
    expect(schema.energy_content.deprecated).toBeUndefined()
  })

  test.each([
    ['energy_content', { energy_content }],
    ['calories_per_pint', { calories_per_pint: 180 }],
    ['both', { energy_content, calories_per_pint: 180 }]
  ])('a recipe using %s validates', (_, fields) => {
    expect(beerjson.validate(recipe(fields))).toEqual({
      valid: true,
      errors: []
    })
  })
})

describe('UnitUnitType synonyms (#289)', () => {
  test('every deprecated synonym of each stays in the enum', () => {
    const { UnitUnitType } = require('../json/measureable_units.json').$defs
    expect(UnitUnitType.enum).toEqual(
      expect.arrayContaining(['each', '1', 'unit', 'dimensionless', 'pkg'])
    )
  })
})

describe('generated output marks deprecated properties', () => {
  const fs = require('fs')
  const path = require('path')
  const read = file => fs.readFileSync(path.join(__dirname, '..', file), 'utf8')

  test('the markdown reference flags it', () => {
    const docs = read('docs/water.json.md')
    expect(docs).toMatch(/\*\*flouride\*\*.*Deprecated/)
  })

  test('the TypeScript declarations carry @deprecated', () => {
    const types = read('types/ts/beerjson.d.ts')
    expect(types).toMatch(/@deprecated \*\/\n\s*flouride\?/)
  })
})

describe('CultureBase types (#217)', () => {
  const type = require('../json/culture.json').$defs.CultureBase.properties.type

  test('wheat is an available culture type', () => {
    expect(type.enum).toContain('wheat')
  })

  test('a wheat culture validates', () => {
    const result = beerjson.validate({
      beerjson: {
        version: CURRENT_VERSION,
        cultures: [
          {
            name: 'Weihenstephan Weizen',
            type: 'wheat',
            form: 'liquid',
            producer: 'Wyeast',
            product_id: '3068'
          }
        ]
      }
    })
    expect(result).toEqual({ valid: true, errors: [] })
  })
})
