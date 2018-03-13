const XML = require('pixl-xml')
const _ = require('lodash')

const parseBool = s => s === 'TRUE'
const isBIAB = mashName => mashName.includes('BIAB')

// TODO: May be it is not so good idea. But At the moment I can't figure out best practices for rounding operations.
const dirtyRound = n => Math.round(n * 100000000000) / 100000000000
const getArrayNode = node => Array.from(Array.isArray(node) ? node : [node])

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
              units: 'l',
              volume: Number(r['BATCH_SIZE'])
            },
            boil_size: {
              units: 'l',
              volume: Number(r['BOIL_SIZE'])
            },
            boil_time: {
              units: 'min',
              duration: Number(r['BOIL_TIME'])
            },
            efficiency: {
              brewhouse: Number(r['EFFICIENCY'])
            },
            ...(!_.isEmpty(r['STYLE']) ? { style: r['STYLE'] } : {}),
            ingredients: {
              fermentable_bill: _.map(
                getArrayNode(_.get(r, ['FERMENTABLES', 'FERMENTABLE'])),
                fermentable => ({
                  name: fermentable['NAME'],
                  type: _.lowerCase(fermentable['TYPE']),
                  color: {
                    units: 'L',
                    scale: Number(fermentable['COLOR'])
                  },
                  amount: {
                    units: 'kg',
                    mass: Number(fermentable['AMOUNT'])
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
              ),
              hop_bill: _.map(getArrayNode(_.get(r, ['HOPS', 'HOP'])), hop => ({
                name: hop['NAME'],
                alpha_acid_units: Number(hop['ALPHA']),
                ...(!_.isEmpty(hop['ORIGIN']) ? { origin: hop['ORIGIN'] } : {}),
                ...(!_.isEmpty(hop['FORM'])
                  ? { form: _.lowerCase(hop['FORM']) }
                  : {}),
                ...(!_.isEmpty(hop['BETA'])
                  ? { beta_acid_units: Number(hop['BETA']) }
                  : {}),
                ...(!_.isEmpty(hop['USE']) ? { use: Number(hop['USE']) } : {}),
                amount: {
                  units: 'kg',
                  mass: Number(hop['AMOUNT'])
                },
                time: {
                  units: 'min',
                  duration: Number(hop['TIME'])
                }
              })),
              ...(!_.isEmpty(r['MISCS'])
                ? {
                    miscellaneous_additions: _.map(
                      getArrayNode(_.get(r, ['MISCS', 'MISC'])),
                      misc => ({
                        name: misc['NAME'],
                        type: _.lowerCase(misc['TYPE']),
                        use: _.lowerCase(misc['USE']),
                        ...(!_.isEmpty(misc['AMOUNT_IS_WEIGHT']) &&
                        parseBool(misc['AMOUNT_IS_WEIGHT'])
                          ? {
                              amount_as_weight: {
                                units: 'kg',
                                mass: Number(misc['AMOUNT'])
                              }
                            }
                          : {}),
                        ...((!_.isEmpty(misc['AMOUNT_IS_WEIGHT']) &&
                          !parseBool(misc['AMOUNT_IS_WEIGHT'])) ||
                        _.isEmpty(misc['AMOUNT_IS_WEIGHT'])
                          ? {
                              amount: {
                                units: 'l',
                                volume: Number(misc['AMOUNT'])
                              }
                            }
                          : {})
                      })
                    )
                  }
                : {}),
              culture_additions: _.map(
                getArrayNode(_.get(r, ['YEASTS', 'YEAST'])),
                culture => ({
                  name: culture['NAME'],
                  type: _.lowerCase(culture['TYPE']),
                  form: _.lowerCase(culture['FORM']),
                  ...(!_.isEmpty(culture['AMOUNT_IS_WEIGHT']) &&
                  parseBool(culture['AMOUNT_IS_WEIGHT'])
                    ? {
                        amount_as_weight: {
                          units: 'kg',
                          mass: Number(culture['AMOUNT'])
                        }
                      }
                    : {}),
                  ...((!_.isEmpty(culture['AMOUNT_IS_WEIGHT']) &&
                    !parseBool(culture['AMOUNT_IS_WEIGHT'])) ||
                  _.isEmpty(culture['AMOUNT_IS_WEIGHT'])
                    ? {
                        amount: {
                          units: 'l',
                          volume: Number(culture['AMOUNT'])
                        }
                      }
                    : {})
                })
              ),
              ...(!_.isEmpty(r['WATERS'])
                ? {
                    water_profile: _.map(
                      getArrayNode(_.get(r, ['WATERS', 'WATER'])),
                      water => ({
                        name: water['NAME'],
                        calcium: Number(water['CALCIUM']),
                        bicarbonate: Number(water['BICARBONATE']),
                        sulfate: Number(water['SULFATE']),
                        chloride: Number(water['CHLORIDE']),
                        sodium: Number(water['SODIUM']),
                        magnesium: Number(water['MAGNESIUM']),
                        amount: {
                          units: 'l',
                          volume: Number(water['AMOUNT'])
                        }
                      })
                    )
                  }
                : {})
            }
          }
        ]
      }
    }

    //console.log(JSON.stringify(recipe))
    return JSON.stringify(recipe)
  } catch (err) {
    console.log('XML Parser Error: ' + err)
    throw err
  }
}

module.exports = importFromBeerXml
