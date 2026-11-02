/**
 * What the BeerXML importer means, not just whether its output validates.
 *
 * BeerXML's TIME has a different meaning for each USE (BeerXML 1.0, HOP TIME):
 * "For Boil this is the boil time. For Mash this is the mash time. For First
 * Wort this is the boil time. For Aroma this is the steep time. For Dry Hop this
 * is the amount of time to dry hop." BeerJSON splits that into `time`, measured
 * back from the end of the boil for a boil addition, and `duration`, how long an
 * ingredient stays in. Getting the split wrong produces a valid document with
 * the wrong bitterness, so each case is pinned here.
 */
const importFromBeerXml = require('../js/beerxml-to-beerjson')
const beerjson = require('../index.js')
const { CURRENT_VERSION } = require('../js/format-version')

const recipeXml = ({ hops = '', miscs = '', fermentables = '' } = {}) => `
<RECIPES><RECIPE>
  <NAME>Test</NAME><VERSION>1</VERSION><TYPE>All Grain</TYPE><BREWER>tester</BREWER>
  <BATCH_SIZE>20</BATCH_SIZE><BOIL_SIZE>25</BOIL_SIZE><BOIL_TIME>60</BOIL_TIME>
  <EFFICIENCY>72</EFFICIENCY>
  <HOPS>${hops}</HOPS>
  <FERMENTABLES>${fermentables ||
    `<FERMENTABLE><NAME>Pale</NAME><VERSION>1</VERSION><TYPE>Grain</TYPE>
      <AMOUNT>4</AMOUNT><YIELD>80</YIELD><COLOR>3</COLOR></FERMENTABLE>`}</FERMENTABLES>
  ${miscs ? `<MISCS>${miscs}</MISCS>` : ''}
  <YEASTS><YEAST><NAME>US-05</NAME><VERSION>1</VERSION><TYPE>Ale</TYPE>
    <FORM>Dry</FORM><AMOUNT>0.011</AMOUNT><AMOUNT_IS_WEIGHT>TRUE</AMOUNT_IS_WEIGHT></YEAST></YEASTS>
  <MASH><NAME>Mash</NAME><VERSION>1</VERSION><GRAIN_TEMP>20</GRAIN_TEMP>
    <MASH_STEPS><MASH_STEP><NAME>Rest</NAME><VERSION>1</VERSION><TYPE>Infusion</TYPE>
      <STEP_TEMP>66</STEP_TEMP><STEP_TIME>60</STEP_TIME></MASH_STEP></MASH_STEPS></MASH>
</RECIPE></RECIPES>`

const hopXml = (use, time) =>
  `<HOP><NAME>Cascade</NAME><VERSION>1</VERSION><ALPHA>5.5</ALPHA>
    <AMOUNT>0.02</AMOUNT>${use === undefined ? '' : `<USE>${use}</USE>`}
    ${time === undefined ? '' : `<TIME>${time}</TIME>`}</HOP>`

const miscXml = (use, time) =>
  `<MISC><NAME>Irish Moss</NAME><VERSION>1</VERSION><TYPE>Fining</TYPE>
    <USE>${use}</USE><TIME>${time}</TIME><AMOUNT>0.005</AMOUNT>
    <AMOUNT_IS_WEIGHT>TRUE</AMOUNT_IS_WEIGHT></MISC>`

const convert = xml => JSON.parse(importFromBeerXml(xml))
const recipe = xml => convert(xml).beerjson.recipes[0]
const hopTiming = (use, time) =>
  recipe(recipeXml({ hops: hopXml(use, time) })).ingredients.hop_additions[0]
    .timing
const miscTiming = (use, time) =>
  recipe(recipeXml({ miscs: miscXml(use, time) })).ingredients
    .miscellaneous_additions[0].timing
const min = value => ({ unit: 'min', value })

describe('hop timing', () => {
  test('Boil: TIME is the boil time', () => {
    expect(hopTiming('Boil', 60)).toEqual({ use: 'add_to_boil', time: min(60) })
  })

  // First Wort cannot be placed in a pre-boil step until #271 defines how boil
  // steps are classified; until then it is recorded as boiled for TIME.
  test('First Wort: TIME is the boil time', () => {
    expect(hopTiming('First Wort', 60)).toEqual({
      use: 'add_to_boil',
      time: min(60)
    })
  })

  test('Aroma: added at the end of the boil, steeped for TIME', () => {
    expect(hopTiming('Aroma', 20)).toEqual({
      use: 'add_to_boil',
      time: min(0),
      duration: min(20)
    })
  })

  // A whirlpool hop recorded as a 20 minute boil addition inflates calculated
  // bitterness, so the steep time must never become a positive boil `time`.
  test('Aroma never contributes boil time', () => {
    for (const steep of [5, 20, 45]) {
      expect(hopTiming('Aroma', steep).time).toEqual(min(0))
    }
  })

  test('Dry Hop: TIME is how long it stays in the fermenter', () => {
    expect(hopTiming('Dry Hop', 4320)).toEqual({
      use: 'add_to_fermentation',
      duration: min(4320)
    })
  })

  test('Mash: TIME is how long it stays in the mash', () => {
    expect(hopTiming('Mash', 60)).toEqual({
      use: 'add_to_mash',
      duration: min(60)
    })
  })

  test('USE is matched case-insensitively', () => {
    for (const use of ['DRY HOP', 'dry hop', 'Dry Hop']) {
      expect(hopTiming(use, 100).use).toBe('add_to_fermentation')
    }
  })

  test('an unrecognised USE is treated as a boil addition', () => {
    expect(hopTiming('Hopback', 10)).toEqual({
      use: 'add_to_boil',
      time: min(10)
    })
  })

  test('a missing USE is treated as a boil addition', () => {
    expect(hopTiming(undefined, 10)).toEqual({
      use: 'add_to_boil',
      time: min(10)
    })
  })

  test('a missing TIME records the use alone, never a NaN time', () => {
    expect(hopTiming('Boil', undefined)).toEqual({ use: 'add_to_boil' })
    expect(hopTiming('Dry Hop', undefined)).toEqual({
      use: 'add_to_fermentation'
    })
  })

  test('a dry hop never records a `time`', () => {
    expect(hopTiming('Dry Hop', 4320)).not.toHaveProperty('time')
  })
})

describe('miscellaneous timing', () => {
  test.each([
    ['Boil', 15, { use: 'add_to_boil', time: min(15) }],
    ['Mash', 60, { use: 'add_to_mash', duration: min(60) }],
    ['Primary', 10080, { use: 'add_to_fermentation', duration: min(10080) }],
    ['Secondary', 10080, { use: 'add_to_fermentation', duration: min(10080) }],
    ['Bottling', 0, { use: 'add_to_package', duration: min(0) }]
  ])('%s', (use, time, expected) => {
    expect(miscTiming(use, time)).toEqual(expected)
  })
})

describe('fermentables', () => {
  const fermentable = extra =>
    recipe(
      recipeXml({
        fermentables: `<FERMENTABLE><NAME>Extract</NAME><VERSION>1</VERSION>
          <TYPE>Dry Extract</TYPE><AMOUNT>1</AMOUNT><YIELD>95</YIELD>
          <COLOR>4</COLOR>${extra}</FERMENTABLE>`
      })
    ).ingredients.fermentable_additions[0]

  test('SUPPLIER becomes producer', () => {
    const f = fermentable('<SUPPLIER>Muntons</SUPPLIER>')
    expect(f.producer).toBe('Muntons')
    expect(f).not.toHaveProperty('supplier')
  })

  test.each(['TRUE', 'true', 'True'])(
    'ADD_AFTER_BOIL %s adds it to the fermentation',
    value => {
      const f = fermentable(`<ADD_AFTER_BOIL>${value}</ADD_AFTER_BOIL>`)
      expect(f.timing).toEqual({ use: 'add_to_fermentation' })
      expect(f).not.toHaveProperty('add_after_boil')
    }
  )

  test.each(['FALSE', 'false'])('ADD_AFTER_BOIL %s adds no timing', value => {
    const f = fermentable(`<ADD_AFTER_BOIL>${value}</ADD_AFTER_BOIL>`)
    expect(f).not.toHaveProperty('timing')
  })
})

describe('the converted document', () => {
  const all = recipeXml({
    hops: ['Boil', 'First Wort', 'Aroma', 'Dry Hop', 'Mash']
      .map(use => hopXml(use, 30))
      .join(''),
    miscs: ['Boil', 'Mash', 'Primary', 'Secondary', 'Bottling']
      .map(use => miscXml(use, 30))
      .join('')
  })

  test('declares the current format version', () => {
    expect(convert(all).beerjson.version).toBe(CURRENT_VERSION)
  })

  test('validates, with every USE value present', () => {
    expect(beerjson.validate(convert(all))).toEqual({ valid: true, errors: [] })
  })

  test('no addition carries a key the format does not declare', () => {
    const r = recipe(all)
    for (const h of r.ingredients.hop_additions) {
      expect(h).not.toHaveProperty('use')
    }
    for (const m of r.ingredients.miscellaneous_additions) {
      expect(m).not.toHaveProperty('use')
    }
  })
})
