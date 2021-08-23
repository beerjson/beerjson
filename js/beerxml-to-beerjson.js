const XML = require('pixl-xml')
const {
  isNil,
  get,
  map,
  every,
  isEmpty,
  toLower,
  lowerCase
} = require('lodash')

const parseBool = s => s === 'TRUE'
const getArrayNode = node =>
  Array.from(isNil(node) ? [] : Array.isArray(node) ? node : [node])

const getStyleType = type =>
  type === 'lager' || type === 'ale' || type === '' ? 'beer' : type
const getFermentableType = type =>
  [
    'dry extract',
    'extract',
    'grain',
    'sugar',
    'fruit',
    'juice',
    'honey',
    'other'
  ].indexOf(type) == -1
    ? 'other'
    : type

const potential = y => (y * 0.01 * 46) / 1000 + 1
const mash_steps = r =>
  map(getArrayNode(get(r, ['MASH', 'MASH_STEPS', 'MASH_STEP'])), mash_step => ({
    name: mash_step['NAME'],
    type: lowerCase(mash_step['TYPE']),
    description: mash_step['DESCRIPTION'],
    step_temperature: {
      unit: 'C',
      value: Number(mash_step['STEP_TEMP'])
    },
    step_time: {
      unit: 'min',
      value: Number(mash_step['STEP_TIME'])
    },
    ...(!isEmpty(mash_step['RAMP_TIME'])
      ? {
          ramp_time: {
            unit: 'min',
            value: Number(mash_step['RAMP_TIME'])
          }
        }
      : {}),
    ...(!isEmpty(mash_step['END_TEMP'])
      ? {
          end_temperature: {
            unit: 'C',
            value: Number(mash_step['END_TEMP'])
          }
        }
      : {}),
    ...(!isEmpty(mash_step['INFUSE_AMOUNT'])
      ? {
          amount: {
            unit: 'l',
            value: Number(mash_step['INFUSE_AMOUNT'])
          }
        }
      : {})
  }))

const mash = r => {
  return {
    name: get(r, ['MASH', 'NAME']),
    grain_temperature: {
      unit: 'C',
      value: Number(get(r, ['MASH', 'GRAIN_TEMP']))
    },
    notes: get(r, ['MASH', 'NOTES']),
    mash_steps: mash_steps(r)
  }
}

const water_additions = r =>
  map(getArrayNode(get(r, ['WATERS', 'WATER'])), water => ({
    name: water['NAME'],
    calcium: {
      unit: 'mg/l',
      value: Number(water['CALCIUM'])
    },
    bicarbonate: {
      unit: 'mg/l',
      value: Number(water['BICARBONATE'])
    },
    sulfate: {
      unit: 'mg/l',
      value: Number(water['SULFATE'])
    },
    chloride: {
      unit: 'mg/l',
      value: Number(water['CHLORIDE'])
    },
    sodium: {
      unit: 'mg/l',
      value: Number(water['SODIUM'])
    },
    magnesium: {
      unit: 'mg/l',
      value: Number(water['MAGNESIUM'])
    },
    amount: {
      unit: 'l',
      value: Number(water['AMOUNT'])
    }
  }))

const miscellaneous_additions = r =>
  map(getArrayNode(get(r, ['MISCS', 'MISC'])), misc => ({
    name: misc['NAME'],
    type: lowerCase(misc['TYPE']),
    use: lowerCase(misc['USE']),
    ...(!isEmpty(misc['AMOUNT_IS_WEIGHT']) &&
    parseBool(misc['AMOUNT_IS_WEIGHT'])
      ? {
          amount: {
            unit: 'kg',
            value: Number(misc['AMOUNT'])
          }
        }
      : {}),
    ...((!isEmpty(misc['AMOUNT_IS_WEIGHT']) &&
      !parseBool(misc['AMOUNT_IS_WEIGHT'])) ||
    isEmpty(misc['AMOUNT_IS_WEIGHT'])
      ? {
          amount: {
            unit: 'l',
            value: Number(misc['AMOUNT'])
          }
        }
      : {}),
    timing: {
      time: {
        unit: 'min',
        value: Number(misc['TIME'])
      },
      use: 'add_to_boil'
    }
  }))

const hop_bill = r =>
  map(getArrayNode(get(r, ['HOPS', 'HOP'])), hop => ({
    name: hop['NAME'],
    alpha_acid: {
      unit: '%',
      value: Number(hop['ALPHA'])
    },
    ...(!isEmpty(hop['ORIGIN']) ? { origin: hop['ORIGIN'] } : {}),
    ...(!isEmpty(hop['FORM']) ? { form: lowerCase(hop['FORM']) } : {}),
    ...(!isEmpty(hop['BETA'])
      ? {
          beta_acid: {
            unit: '%',
            value: Number(hop['BETA'])
          }
        }
      : {}),
    ...(!isEmpty(hop['USE']) ? { use: lowerCase(hop['USE']) } : {}),
    amount: {
      unit: 'kg',
      value: Number(hop['AMOUNT'])
    },
    timing: {
      time: {
        unit: 'min',
        value: Number(hop['TIME'])
      },
      use: 'add_to_boil'
    }
  }))

const fermentable_bill = r =>
  map(getArrayNode(get(r, ['FERMENTABLES', 'FERMENTABLE'])), fermentable => ({
    name: fermentable['NAME'],
    type: getFermentableType(lowerCase(fermentable['TYPE'])),
    color: {
      unit: 'Lovi',
      value: Number(fermentable['COLOR'])
    },
    amount: {
      unit: 'kg',
      value: Number(fermentable['AMOUNT'])
    },
    origin: fermentable['ORIGIN'],
    supplier: fermentable['SUPPLIER'],
    group: 'base',
    yield: {
      potential: {
        unit: 'sg',
        value: potential(Number(fermentable['YIELD']))
      }
    },
    ...(!isEmpty(fermentable['ADD_AFTER_BOIL'])
      ? {
          add_after_boil: parseBool(fermentable['ADD_AFTER_BOIL'])
        }
      : {})
  }))

const DEFAULT_ATTENUATION = 75

const importCultureAdditions = recipe => {
  const cultures = get(recipe, 'YEASTS.YEAST')

  if (isEmpty(cultures)) {
    return []
  }

  return map(getArrayNode(cultures), culture => ({
    name: culture.NAME,
    type: toLower(culture.TYPE),
    form: toLower(culture.FORM),
    amount: {
      unit: parseBool(culture.AMOUNT_IS_WEIGHT) ? 'kg' : 'l',
      value: Number(culture.AMOUNT)
    },
    attenuation: {
      unit: '%',
      value: isEmpty(culture.ATTENUATION)
        ? DEFAULT_ATTENUATION
        : Number(culture.ATTENUATION)
    }
  }))
}

const checkRequiredFields = (obj, fieldList) =>
  every(fieldList, field => !isEmpty(obj[field]))

const importStyle = recipe => {
  const { STYLE } = recipe

  if (
    isEmpty(STYLE) ||
    !checkRequiredFields(STYLE, [
      'NAME',
      'CATEGORY',
      'STYLE_GUIDE',
      'TYPE',
      'OG_MIN',
      'OG_MAX',
      'FG_MIN',
      'FG_MAX',
      'IBU_MIN',
      'IBU_MAX',
      'COLOR_MIN',
      'COLOR_MAX'
    ])
  ) {
    return null
  }

  return {
    name: STYLE.NAME,
    category: STYLE.CATEGORY,
    style_guide: STYLE.STYLE_GUIDE,
    type: getStyleType(toLower(STYLE.TYPE)),
    original_gravity: {
      minimum: {
        unit: 'sg',
        value: Number(STYLE.OG_MIN)
      },
      maximum: {
        unit: 'sg',
        value: Number(STYLE.OG_MAX)
      }
    },
    final_gravity: {
      minimum: {
        unit: 'sg',
        value: Number(STYLE.FG_MIN)
      },
      maximum: {
        unit: 'sg',
        value: Number(STYLE.FG_MAX)
      }
    },
    international_bitterness_units: {
      minimum: {
        unit: 'IBUs',
        value: Number(STYLE.IBU_MIN)
      },
      maximum: {
        unit: 'IBUs',
        value: Number(STYLE.IBU_MAX)
      }
    },
    alcohol_by_volume: {
      minimum: {
        unit: '%',
        value: Number(STYLE.ABV_MIN)
      },
      maximum: {
        unit: '%',
        value: Number(STYLE.ABV_MAX)
      }
    },
    color: {
      minimum: {
        unit: 'srm',
        value: Number(STYLE.COLOR_MIN)
      },
      maximum: {
        unit: 'srm',
        value: Number(STYLE.COLOR_MAX)
      }
    }
  }
}

const importFromBeerXml = xml => {
  try {
    const r = XML.parse(xml).RECIPE
    if (Array.isArray(r)) {
      throw new Error(
        'BrewComputer does not currently support importing several recipes from a single BeerXML file. Please create a separate file for each recipe.'
      )
    }
    const recipe = {
      name: r['NAME'],
      type: lowerCase(r['TYPE']),
      author: r['BREWER'],
      ...(!isEmpty(r['ASST_BREWER']) ? { coauthor: r['ASST_BREWER'] } : {}),
      ...(!isEmpty(r['DATE'])
        ? { created: new Date(r['DATE']).toISOString() }
        : {}),
      batch_size: {
        unit: 'l',
        value: Number(r['BATCH_SIZE'])
      },
      boil: {
        pre_boil_size: {
          unit: 'l',
          value: Number(r['BOIL_SIZE'])
        },
        boil_time: {
          unit: 'min',
          value: Number(r['BOIL_TIME'])
        }
      },
      efficiency: {
        brewhouse: {
          unit: '%',
          value: Number(r['EFFICIENCY'])
        }
      },
      ingredients: {
        fermentable_additions: fermentable_bill(r),
        hop_additions: hop_bill(r),
        ...(!isEmpty(r['MISCS'])
          ? {
              miscellaneous_additions: miscellaneous_additions(r)
            }
          : {}),
        culture_additions: importCultureAdditions(r),
        ...(!isEmpty(r['WATERS'])
          ? {
              water_additions: water_additions(r)
            }
          : {})
      },
      mash: mash(r)
    }

    const style = importStyle(r)
    if (style != null) {
      recipe.style = style
    }

    const beerJSON = {
      beerjson: {
        version: 2.06,
        recipes: [recipe]
      }
    }

    return JSON.stringify(beerJSON)
  } catch (err) {
    console.log('XML Parser Error: ' + err)
    throw err
  }
}

module.exports = importFromBeerXml
