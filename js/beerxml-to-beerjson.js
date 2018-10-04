const XML = require('pixl-xml')
const _ = require('lodash')

const parseBool = s => s === 'TRUE'
const getArrayNode = node => Array.from(Array.isArray(node) ? node : [node])

const getStyleType = type =>
  type === 'lager' || type === 'ale' ? 'beer' : type

const mash_steps = r =>
  _.map(
    getArrayNode(_.get(r, ['MASH', 'MASH_STEPS', 'MASH_STEP'])),
    mash_step => ({
      name: mash_step['NAME'],
      type: _.lowerCase(mash_step['TYPE']),
      step_temperature: {
        unit: 'C',
        value: Number(mash_step['STEP_TEMP'])
      },
      step_time: {
        unit: 'min',
        value: Number(mash_step['STEP_TIME'])
      },
      ...(!_.isEmpty(mash_step['RAMP_TIME'])
        ? {
            ramp_time: {
              unit: 'min',
              value: Number(mash_step['RAMP_TIME'])
            }
          }
        : {}),
      ...(!_.isEmpty(mash_step['END_TEMP'])
        ? {
            end_temperature: {
              unit: 'C',
              value: Number(mash_step['END_TEMP'])
            }
          }
        : {}),
      ...(!_.isEmpty(mash_step['INFUSE_AMOUNT'])
        ? {
            amount: {
              unit: 'l',
              value: Number(mash_step['INFUSE_AMOUNT'])
            }
          }
        : {})
    })
  )

const mash = r => {
  return {
    name: _.get(r, ['MASH', 'NAME']),
    grain_temperature: {
      unit: 'C',
      value: Number(_.get(r, ['MASH', 'GRAIN_TEMP']))
    },
    ...(!_.isEmpty(_.get(r, ['MASH', 'SPARGE_TEMP']))
      ? {
          sparge_temperature: {
            unit: 'C',
            value: Number(_.get(r, ['MASH', 'SPARGE_TEMP']))
          }
        }
      : {}),
    ...(!_.isEmpty(_.get(r, ['MASH', 'PH']))
      ? {
          pH: Number(_.get(r, ['MASH', 'PH']))
        }
      : {}),
    notes: _.get(r, ['MASH', 'NOTES']),
    mash_steps: mash_steps(r)
  }
}

const water_additions = r =>
  _.map(getArrayNode(_.get(r, ['WATERS', 'WATER'])), water => ({
    name: water['NAME'],
    calcium: Number(water['CALCIUM']),
    bicarbonate: Number(water['BICARBONATE']),
    sulfate: Number(water['SULFATE']),
    chloride: Number(water['CHLORIDE']),
    sodium: Number(water['SODIUM']),
    magnesium: Number(water['MAGNESIUM']),
    amount: {
      unit: 'l',
      value: Number(water['AMOUNT'])
    }
  }))

const culture_additions = r =>
  _.map(getArrayNode(_.get(r, ['YEASTS', 'YEAST'])), culture => ({
    name: culture['NAME'],
    ...(!_.isEmpty(culture['ATTENUATION'])
      ? { attenuation: Number(culture['ATTENUATION']) }
      : {}),
    type: _.lowerCase(culture['TYPE']),
    form: _.lowerCase(culture['FORM']),
    ...(!_.isEmpty(culture['AMOUNT_IS_WEIGHT']) &&
    parseBool(culture['AMOUNT_IS_WEIGHT'])
      ? {
          amount: {
            unit: 'kg',
            value: Number(culture['AMOUNT'])
          }
        }
      : {}),
    ...((!_.isEmpty(culture['AMOUNT_IS_WEIGHT']) &&
      !parseBool(culture['AMOUNT_IS_WEIGHT'])) ||
    _.isEmpty(culture['AMOUNT_IS_WEIGHT'])
      ? {
          amount: {
            unit: 'l',
            value: Number(culture['AMOUNT'])
          }
        }
      : {})
  }))

const miscellaneous_additions = r =>
  _.map(getArrayNode(_.get(r, ['MISCS', 'MISC'])), misc => ({
    name: misc['NAME'],
    type: _.lowerCase(misc['TYPE']),
    use: _.lowerCase(misc['USE']),
    ...(!_.isEmpty(misc['AMOUNT_IS_WEIGHT']) &&
    parseBool(misc['AMOUNT_IS_WEIGHT'])
      ? {
          amount: {
            unit: 'kg',
            value: Number(misc['AMOUNT'])
          }
        }
      : {}),
    ...((!_.isEmpty(misc['AMOUNT_IS_WEIGHT']) &&
      !parseBool(misc['AMOUNT_IS_WEIGHT'])) ||
    _.isEmpty(misc['AMOUNT_IS_WEIGHT'])
      ? {
          amount: {
            unit: 'l',
            value: Number(misc['AMOUNT'])
          }
        }
      : {})
  }))

const hop_bill = r =>
  _.map(getArrayNode(_.get(r, ['HOPS', 'HOP'])), hop => ({
    name: hop['NAME'],
    alpha_acid_units: Number(hop['ALPHA']),
    ...(!_.isEmpty(hop['ORIGIN']) ? { origin: hop['ORIGIN'] } : {}),
    ...(!_.isEmpty(hop['FORM']) ? { form: _.lowerCase(hop['FORM']) } : {}),
    ...(!_.isEmpty(hop['BETA'])
      ? { beta_acid_units: Number(hop['BETA']) }
      : {}),
    ...(!_.isEmpty(hop['USE']) ? { use: _.lowerCase(hop['USE']) } : {}),
    amount: {
      unit: 'kg',
      value: Number(hop['AMOUNT'])
    },
    time: {
      unit: 'min',
      value: Number(hop['TIME'])
    }
  }))

const fermentable_bill = r =>
  _.map(
    getArrayNode(_.get(r, ['FERMENTABLES', 'FERMENTABLE'])),
    fermentable => ({
      name: fermentable['NAME'],
      type: _.lowerCase(fermentable['TYPE']),
      color: {
        unit: 'L',
        value: Number(fermentable['COLOR'])
      },
      amount: {
        unit: 'kg',
        value: Number(fermentable['AMOUNT'])
      },
      origin: fermentable['ORIGIN'],
      supplier: fermentable['SUPPLIER'],
      group: 'base',
      yield: Number(fermentable['YIELD']),
      ...(!_.isEmpty(fermentable['ADD_AFTER_BOIL'])
        ? {
            add_after_boil: parseBool(fermentable['ADD_AFTER_BOIL'])
          }
        : {})
    })
  )

const importFromBeerXml = xml => {
  try {
    const r = XML.parse(xml).RECIPE
    const recipe = {
      beerjson: {
        version: 2.06,
        recipes: [
          {
            name: r['NAME'],
            type: _.lowerCase(r['TYPE']),
            author: r['BREWER'],
            ...(!_.isEmpty(r['ASST_BREWER'])
              ? { coauthor: r['ASST_BREWER'] }
              : {}),
            ...(!_.isEmpty(r['DATE'])
              ? { created: new Date(r['DATE']).toISOString() }
              : {}),
            batch_size: {
              unit: 'l',
              value: Number(r['BATCH_SIZE'])
            },
            boil: {
              boil_size: {
                unit: 'l',
                value: Number(r['BOIL_SIZE'])
              },
              boil_time: {
                unit: 'min',
                value: Number(r['BOIL_TIME'])
              }
            },
            efficiency: {
              brewhouse: Number(r['EFFICIENCY'])
            },
            ...(!_.isEmpty(r['STYLE'])
              ? {
                  style: {
                    name: _.get(r, ['STYLE', 'NAME']),
                    category: _.get(r, ['STYLE', 'CATEGORY']),
                    style_guide: _.get(r, ['STYLE', 'STYLE_GUIDE']),
                    type: getStyleType(_.lowerCase(_.get(r, ['STYLE', 'TYPE'])))
                  }
                }
              : {}),
            ingredients: {
              fermentable_additions: fermentable_bill(r),
              hop_additions: hop_bill(r),
              ...(!_.isEmpty(r['MISCS'])
                ? {
                    miscellaneous_additions: miscellaneous_additions(r)
                  }
                : {}),
              culture_additions: culture_additions(r),
              ...(!_.isEmpty(r['WATERS'])
                ? {
                    water_additions: water_additions(r)
                  }
                : {})
            },
            mash: mash(r)
          }
        ]
      }
    }

    return JSON.stringify(recipe)
  } catch (err) {
    console.log('XML Parser Error: ' + err)
    throw err
  }
}

module.exports = importFromBeerXml
