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
            ...(r['ASST_BREWER'] !== '' && r['ASST_BREWER'] !== undefined
              ? { coauthor: r['ASST_BREWER'] }
              : {}),
            ...(r['DATE'] !== '' && r['DATE'] !== undefined
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
            ...(r['STYLE'] !== '' && r['STYLE'] !== undefined
              ? { style: r['STYLE'] }
              : {}),
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
                  ...(r['ADD_AFTER_BOIL'] !== '' &&
                  r['ADD_AFTER_BOIL'] !== undefined
                    ? {
                        add_after_boil: parseBool(fermentable['ADD_AFTER_BOIL'])
                      }
                    : {})
                })
              ),
              hop_bill: _.map(getArrayNode(_.get(r, ['HOPS', 'HOP'])), hop => ({
                name: hop['NAME'],
                alpha_acid_units: Number(hop['ALPHA']),
                ...(hop['ORIGIN'] !== '' && hop['ORIGIN'] !== undefined
                  ? { origin: hop['ORIGIN'] }
                  : {}),
                ...(hop['FORM'] !== '' && hop['FORM'] !== undefined
                  ? { form: _.lowerCase(hop['FORM']) }
                  : {}),
                ...(hop['BETA'] !== '' && hop['BETA'] !== undefined
                  ? { beta_acid_units: Number(hop['BETA']) }
                  : {}),
                ...(hop['USE'] !== '' && hop['USE'] !== undefined
                  ? { use: Number(hop['USE']) }
                  : {}),
                amount: {
                  units: 'kg',
                  mass: Number(hop['AMOUNT'])
                },
                time: {
                  units: 'min',
                  duration: Number(hop['TIME'])
                }
              }))
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
