/**
 * Constraints on individual values, which the sample documents cannot pin
 * because they only show what is accepted, not what is rejected.
 */
const beerjson = require('../index.js')
const { CURRENT_VERSION } = require('../js/format-version')

const generic = name => require(`./generic/${name}.json`).beerjson
const clone = value => JSON.parse(JSON.stringify(value))

const document = (key, record) => ({
  beerjson: { version: CURRENT_VERSION, [key]: [record] }
})

const isValid = (key, record) => beerjson.validate(document(key, record)).valid

const recipe = fields => ({
  ...clone(generic('recipes').recipes[0]),
  ...fields
})
const fermentable = fields => ({
  ...clone(generic('fermentable').fermentables[0]),
  ...fields
})
const hop = fields => ({
  ...clone(generic('hop_varieties').hop_varieties[0]),
  ...fields
})
const style = fields => ({ ...clone(generic('styles').styles[0]), ...fields })
const percent = value => ({ unit: '%', value })

describe('DateType (#283)', () => {
  test.each([
    '2026-11-09',
    '2026-11-09T14:30:00',
    '2026-11-09T14:30:00Z',
    '2026-11-09T14:30:00+01:00',
    '2026-11-09T14:30:00.125-05:00'
  ])('accepts %s', created => {
    expect(isValid('recipes', recipe({ created }))).toBe(true)
  })

  test.each([
    'junk2026-11-09junk',
    '2026-13-45',
    '2026-00-10',
    '2026-11-09T25:00:00',
    '2026-11-09T14:30',
    '2026-11-09 14:30:00'
  ])('rejects %s', created => {
    expect(isValid('recipes', recipe({ created }))).toBe(false)
  })
})

describe('YieldType (#284)', () => {
  test.each([
    ['fine_grind', { fine_grind: percent(80) }],
    ['coarse_grind', { coarse_grind: percent(78) }],
    ['potential', { potential: { unit: 'sg', value: 1.037 } }]
  ])('%s alone is enough', (_, value) => {
    expect(isValid('fermentables', fermentable({ yield: value }))).toBe(true)
  })

  test.each([
    ['nothing', {}],
    ['only fine_coarse_difference', { fine_coarse_difference: percent(2) }]
  ])('%s is rejected', (_, value) => {
    expect(isValid('fermentables', fermentable({ yield: value }))).toBe(false)
  })
})

describe('TimeType (#285)', () => {
  const findTime = node => {
    if (!node || typeof node !== 'object') return null
    if (['sec', 'min', 'hr', 'day', 'week'].includes(node.unit)) return node
    for (const value of Object.values(node)) {
      const found = findTime(value)
      if (found) return found
    }
    return null
  }

  test('accepts a fractional value', () => {
    const record = recipe()
    findTime(record).value = 3.5
    expect(isValid('recipes', record)).toBe(true)
  })
})

describe('StyleBase identifiers (#286)', () => {
  test.each(['A', 'Z', '1', '12'])('style_letter accepts %j', style_letter => {
    expect(isValid('styles', style({ style_letter }))).toBe(true)
  })

  test.each([' ', '', 'a', 'AB', '123', 'xAx'])(
    'style_letter rejects %j',
    style_letter => {
      expect(isValid('styles', style({ style_letter }))).toBe(false)
    }
  )

  test('category_id rejects an empty string', () => {
    expect(isValid('styles', style({ category_id: '' }))).toBe(false)
  })
})

describe('TasteType.rating (#287)', () => {
  const taste = rating => recipe({ taste: { notes: 'Good', rating } })

  test.each([0, 37.5, 50])('accepts %s', rating => {
    expect(isValid('recipes', taste(rating))).toBe(true)
  })

  test.each([-1, 50.5])('rejects %s', rating => {
    expect(isValid('recipes', taste(rating))).toBe(false)
  })
})

describe('percentages (#289)', () => {
  test.each([0, 100])('alpha acid accepts %s', value => {
    expect(isValid('hop_varieties', hop({ alpha_acid: percent(value) }))).toBe(
      true
    )
  })

  test.each([-1, 150])('alpha acid rejects %s', value => {
    expect(isValid('hop_varieties', hop({ alpha_acid: percent(value) }))).toBe(
      false
    )
  })

  test('apparent attenuation may exceed 100', () => {
    expect(
      isValid('recipes', recipe({ apparent_attenuation: percent(102) }))
    ).toBe(true)
  })
})

describe('EnergyPerVolumeType (#289)', () => {
  test('rejects a negative value', () => {
    expect(
      isValid(
        'recipes',
        recipe({ energy_content: { unit: 'kcal/l', value: -1 } })
      )
    ).toBe(false)
  })

  test('rejects a unit that is not per volume', () => {
    expect(
      isValid('recipes', recipe({ energy_content: { unit: 'kcal', value: 1 } }))
    ).toBe(false)
  })
})
