const styles = [
  {
    name: 'American Light Lager',
    category: 'Standard American Beer',
    category_id: '1',
    style_id: '1A'
  },
  {
    name: 'American Lager',
    category: 'Standard American Beer',
    category_id: '1',
    style_id: '1B'
  },
  {
    name: 'Cream Ale',
    category: 'Standard American Beer',
    category_id: '1',
    style_id: '1C'
  },
  {
    name: 'American Wheat Beer',
    category: 'Standard American Beer',
    category_id: '1',
    style_id: '1D'
  },
  {
    name: 'International Pale Lager',
    category: 'International Lager',
    category_id: '2',
    style_id: '2A'
  },
  {
    name: 'International Amber Lager',
    category: 'International Lager',
    category_id: '2',
    style_id: '2B'
  },
  {
    name: 'International Dark Lager',
    category: 'International Lager',
    category_id: '2',
    style_id: '2C'
  },
  {
    name: 'Czech Pale Lager',
    category: 'Czech Lager',
    category_id: '3',
    style_id: '3A'
  },
  {
    name: 'Czech Premium Pale Lager',
    category: 'Czech Lager',
    category_id: '3',
    style_id: '3B'
  },
  {
    name: 'Czech Amber Lager',
    category: 'Czech Lager',
    category_id: '3',
    style_id: '3C'
  },
  {
    name: 'Czech Dark Lager',
    category: 'Czech Lager',
    category_id: '3',
    style_id: '3D'
  },

  {
    name: 'Munich Helles',
    category: 'Pale Malty European Lager',
    category_id: '4',
    style_id: '4A'
  },
  {
    name: 'Festbier',
    category: 'Pale Malty European Lager',
    category_id: '4',
    style_id: '4B'
  },
  {
    name: 'Helles Bock',
    category: 'Pale Malty European Lager',
    category_id: '4',
    style_id: '4C'
  },

  {
    name: 'German Leichtbier',
    category: 'Pale Bitter European Beer',
    category_id: '5',
    style_id: '5A'
  },
  {
    name: 'Kölsch',
    category: 'Pale Bitter European Beer',
    category_id: '5',
    style_id: '5B'
  },
  {
    name: 'German Helles Exportbier',
    category: 'Pale Bitter European Beer',
    category_id: '5',
    style_id: '5C'
  },
  {
    name: 'German Pils',
    category: 'Pale Bitter European Beer',
    category_id: '5',
    style_id: '5D'
  },
  {
    name: 'Märzen',
    category: 'Amber Malty European Lager',
    category_id: '6',
    style_id: '6A'
  },
  {
    name: 'Rauchbier',
    category: 'Amber Malty European Lager',
    category_id: '6',
    style_id: '6B'
  },
  {
    name: 'Dunkles Bock',
    category: 'Amber Malty European Lager',
    category_id: '6',
    style_id: '6C'
  },
  {
    name: 'Vienna Lager',
    category: 'Amber Bitter European Beer',
    category_id: '7',
    style_id: '7A'
  },
  {
    name: 'Altbier',
    category: 'Amber Bitter European Beer',
    category_id: '7',
    style_id: '7B'
  },
  {
    name: 'Munich Dunkel',
    category: 'Dark European Lager',
    category_id: '8',
    style_id: '8A'
  },
  {
    name: 'Schwarzbier',
    category: 'Dark European Lager',
    category_id: '8',
    style_id: '8B'
  },
  {
    name: 'Doppelbock',
    category: 'Strong European Beer',
    category_id: '9',
    style_id: '9A'
  },
  {
    name: 'Eisbock',
    category: 'Strong European Beer',
    category_id: '9',
    style_id: '9B'
  },
  {
    name: 'Baltic Porter',
    category: 'Strong European Beer',
    category_id: '9',
    style_id: '9C'
  },
  {
    name: 'Weissbier',
    category: 'German Wheat Beer',
    category_id: '10',
    style_id: '10A'
  },
  {
    name: 'Dunkles Weissbier',
    category: 'German Wheat Beer',
    category_id: '10',
    style_id: '10B'
  },
  {
    name: 'Weizenbock',
    category: 'German Wheat Beer',
    category_id: '10',
    style_id: '10C'
  },
  {
    name: 'Ordinary Bitter',
    category: 'British Bitter',
    category_id: '11',
    style_id: '11A'
  },
  {
    name: 'Best Bitter',
    category: 'British Bitter',
    category_id: '11',
    style_id: '11B'
  },
  {
    name: 'Strong Bitter',
    category: 'British Bitter',
    category_id: '11',
    style_id: '11C'
  },
  {
    name: 'British Golden Ale',
    category: 'Pale Commonwealth Beer',
    category_id: '12',
    style_id: '12A'
  },
  {
    name: 'Australian Sparkling Ale',
    category: 'Pale Commonwealth Beer',
    category_id: '12',
    style_id: '12B'
  },
  {
    name: 'English IPA',
    category: 'Pale Commonwealth Beer',
    category_id: '12',
    style_id: '12C'
  },
  {
    name: 'Dark Mild',
    category: 'Brown British Beer',
    category_id: '13',
    style_id: '13A'
  },
  {
    name: 'British Brown Ale',
    category: 'Brown British Beer',
    category_id: '13',
    style_id: '13B'
  },
  {
    name: 'English Porter',
    category: 'Brown British Beer',
    category_id: '13',
    style_id: '13C'
  },

  {
    name: 'Scottish Light',
    category: 'Scottish Ale',
    category_id: '14',
    style_id: '14A'
  },
  {
    name: 'Scottish Heavy',
    category: 'Scottish Ale',
    category_id: '14',
    style_id: '14B'
  },
  {
    name: 'Scottish Export',
    category: 'Scottish Ale',
    category_id: '14',
    style_id: '14C'
  },

  {
    name: 'Irish Red Ale',
    category: 'Irish Beer',
    category_id: '15',
    style_id: '15A'
  },
  {
    name: 'Irish Stout',
    category: 'Irish Beer',
    category_id: '15',
    style_id: '15B'
  },
  {
    name: 'Irish Extra Stout',
    category: 'Irish Beer',
    category_id: '15',
    style_id: '15C'
  },
  {
    name: 'Sweet Stout',
    category: 'Dark British Beer',
    category_id: '16',
    style_id: '16A'
  },
  {
    name: 'Oatmeal Stout',
    category: 'Dark British Beer',
    category_id: '16',
    style_id: '16B'
  },
  {
    name: 'Tropical Stout',
    category: 'Dark British Beer',
    category_id: '16',
    style_id: '16C'
  },
  {
    name: 'Foreign Extra Stout',
    category: 'Dark British Beer',
    category_id: '16',
    style_id: '16D'
  },
  {
    name: 'British Strong Ale',
    category: 'Strong British Ale',
    category_id: '17',
    style_id: '17A'
  },
  {
    name: 'Old Ale',
    category: 'Strong British Ale',
    category_id: '17',
    style_id: '17B'
  },
  {
    name: 'Wee Heavy',
    category: 'Strong British Ale',
    category_id: '17',
    style_id: '17C'
  },
  {
    name: 'English Barley Wine',
    category: 'Strong British Ale',
    category_id: '17',
    style_id: '17D'
  },
  {
    name: 'Blonde Ale',
    category: 'Pale American Ale',
    category_id: '18',
    style_id: '18A'
  },
  {
    name: 'American Pale Ale',
    category: 'Pale American Ale',
    category_id: '18',
    style_id: '18B'
  },
  {
    name: 'American Amber Ale',
    category: 'Amber and Brown American Beer',
    category_id: '19',
    style_id: '19A'
  },
  {
    name: 'California Common',
    category: 'Amber and Brown American Beer',
    category_id: '19',
    style_id: '19B'
  },
  {
    name: 'American Brown Ale',
    category: 'Amber and Brown American Beer',
    category_id: '19',
    style_id: '19C'
  },
  {
    name: 'American Porter',
    category: 'American Porter and Stout',
    category_id: '20',
    style_id: '20A'
  },
  {
    name: 'American Stout',
    category: 'American Porter and Stout',
    category_id: '20',
    style_id: '20B'
  },
  {
    name: 'Imperial Stout',
    category: 'American Porter and Stout',
    category_id: '20',
    style_id: '20C'
  },
  {
    name: 'American IPA',
    category: 'IPA',
    category_id: '21',
    style_id: '21A'
  },
  {
    name: 'Specialty IPA',
    category: 'IPA',
    category_id: '21',
    style_id: '21B'
  },
  {
    name: 'Hazy IPA',
    category: 'IPA',
    category_id: '21',
    style_id: '21C'
  },
  //'Specialty IPA: Belgian IPA',
  //'Specialty IPA: Black IPA',
  //'Specialty IPA: Brown IPA',
  //'Specialty IPA: Red IPA',
  //'Specialty IPA: Rye IPA',
  //'Specialty IPA: White IPA',
  //'Specialty IPA: Brut IPA',
  {
    name: 'Double IPA',
    category: 'Strong American Ale',
    category_id: '22',
    style_id: '22A'
  },
  {
    name: 'American Strong Ale',
    category: 'Strong American Ale',
    category_id: '22',
    style_id: '22B'
  },
  {
    name: 'American Barleywine',
    category: 'Strong American Ale',
    category_id: '22',
    style_id: '22C'
  },
  {
    name: 'Wheatwine',
    category: 'Strong American Ale',
    category_id: '22',
    style_id: '22D'
  },
  {
    name: 'Berliner Weisse',
    category: 'European Sour Ale',
    category_id: '23',
    style_id: '23A'
  },
  {
    name: 'Flanders Red Ale',
    category: 'European Sour Ale',
    category_id: '23',
    style_id: '23B'
  },
  {
    name: 'Oud Bruin',
    category: 'European Sour Ale',
    category_id: '23',
    style_id: '23C'
  },
  {
    name: 'Lambic',
    category: 'European Sour Ale',
    category_id: '23',
    style_id: '23D'
  },
  {
    name: 'Gueuze',
    category: 'European Sour Ale',
    category_id: '23',
    style_id: '23E'
  },
  {
    name: 'Fruit Lambic',
    category: 'European Sour Ale',
    category_id: '23',
    style_id: '23F'
  },
  {
    name: 'Gose',
    category: 'European Sour Ale',
    category_id: '23',
    style_id: '23G'
  },

  '24. Belgian Ale',
  '24A. Witbier',
  '24B. Belgian Pale Ale',
  '24C. Bière de Garde',
  '25. Strong Belgian Ale',
  '25A. Belgian Blond Ale',
  '25B. Saison',
  '25C. Belgian Golden Strong Ale',
  '26. Monastic Ale',
  '26A. Belgian Single',
  '26B. Belgian Dubbel',
  '26C. Belgian Tripel',
  '26D. Belgian Dark Strong Ale',
  '27. Historical Beer',
  'Historical Beer: Kellerbier',
  'Historical Beer: Kentucky Common',
  'Historical Beer: Lichtenhainer',
  'Historical Beer: London Brown Ale',
  'Historical Beer: Piwo Grodziskie',
  'Historical Beer: Pre-Prohibition Lager',
  'Historical Beer: Pre-Prohibition Porter',
  'Historical Beer: Roggenbier',
  'Historical Beer: Sahti',
  'Introduction to Specialty-Type Beer',
  'Entering Specialty-Type Beers',
  'Entry Instructions',
  'Base Style',
  'Specialty Ingredients',
  'Best Fit',
  'Judging Specialty-Type Beers',
  'Overall Assessment',
  'Base Style',
  'Multiple Ingredients',
  'Balance Effects of Specialty-Type Ingredients',
  '28. American Wild Ale',
  '28A. Brett Beer',
  '28B. Mixed-Fermentation Sour Beer',
  '28C. Wild Specialty Beer',
  '28D. Straight Sour Beer',
  '29. Fruit Beer',
  '29A. Fruit Beer',
  '29B. Fruit and Spice Beer',
  '29C. Specialty Fruit Beer',
  '29D. Grape Ale',
  '30. Spiced Beer',
  '30A. Spice, Herb, or Vegetable Beer',
  '30B. Autumn Seasonal Beer',
  '30C. Winter Seasonal Beer',
  '30D. Specialty Spice Beer',
  '31. Alternative Fermentables Beer',
  '31A. Alternative Grain Beer',
  '31B. Alternative Sugar Beer',
  '32. Smoked Beer',
  '32A. Classic Style Smoked Beer',
  '32B. Specialty Smoked Beer',
  '33. Wood Beer',
  '33A. Wood-Aged Beer',
  '33B. Specialty Wood-Aged Beer',
  '34. Specialty Beer',
  '34A. Commercial Specialty Beer',
  '34B. Mixed-Style Beer',
  '34C. Experimental Beer',
  'Argentine Styles',
  'X1. Dorada Pampeana',
  'X2. IPA Argenta',
  'Argentine IPA',
  'Italian Styles',
  'X3. Italian Grape Ale',
  'Brazilian Styles',
  'X4. Catharina Sour',
  'New Zealand Styles',
  'X5. New Zealand Pilsner'
]

const flattenKeys = require('./flatter').flattenKeys
const unflattenKeys = require('./flatter').unflattenKeys
const _ = require('lodash')

const extract = (stringValues, unit) => {
  const minMax = stringValues.split(' – ')
  return {
    minimum: {
      unit: unit,
      value: Number(minMax[0])
    },
    maximum: {
      unit: unit,
      value: Number(minMax[1])
    }
  }
}

async function go() {
  const EasyDocx = require('node-easy-docx')
  const easyDocx = new EasyDocx({
    path: './2021_Guidelines_Beer.docx'
  })

  try {
    //const data = await easyDocx.parseDocx()
    //require('fs').writeFileSync('data.json', JSON.stringify(data))

    //const dataFlatten = flattenKeys(data)
    //console.log(dataFlatten)
    //require('fs').writeFileSync('dataFlatten.json', JSON.stringify(dataFlatten))

    const dataFlatten = JSON.parse(
      require('fs').readFileSync('dataFlattenFixed.json')
    )

    const styleguide = {
      beerjson: {
        version: 2.01,
        styles: []
      }
    }

    for (let i = 0; i < styles.length; i++) {
      const style = styles[i]

      const result = { ...style }

      styleName = `${style.style_id}. ${style.name}`
      console.log(styleName)
      let collect = false
      let param = ''

      _.forEach(dataFlatten, (value, key) => {
        if (value != null && key.endsWith('.text')) {
          if (!key.includes('.items.')) {
            collect = false
          }
          if (value == styleName) {
            collect = true
          }

          if (collect && value != styleName) {
            console.log(collect, param, key, value)
            if (value.trim().endsWith(':') && value != 'that are either:') {
              param = _.snakeCase(value.trim().replace(':', ''))
              result[param] = ''
            } else {
              if (param == '') {
                param = 'notes'
                result[param] = ''
              }
              result[param] = result[param] + value
            }
          }
        }
      })

      for (const [key, value] of Object.entries(result)) {
        result[key] = value.trim()
        if (result[key] == '') {
          delete result[key]
        }
      }

      if (result.og != null) {
        result.original_gravity = extract(result.og, 'sg')
        delete result.og
      }

      if (result.ib_us != null) {
        result.international_bitterness_units = extract(result.ib_us, 'IBUs')
        delete result.ib_us
      }

      if (result.fg != null) {
        result.final_gravity = extract(result.fg, 'sg')
        delete result.fg
      }

      if (result.abv != null) {
        result.alcohol_by_volume = extract(result.abv.replace('%', ''), '%')
        delete result.abv
      }

      if (result.srm != null) {
        result.color = extract(result.srm, 'SRM')
        delete result.srm
      }

      if (result['vital_statistics'] == '') {
        delete result['vital_statistics']
      }

      if (result['characteristic_ingredients'] != null) {
        result.ingredients = result['characteristic_ingredients'].trim()
        delete result['characteristic_ingredients']
      }

      if (result['commercial_examples'] != null) {
        result.examples = result['commercial_examples'].trim()
        delete result['commercial_examples']
      }

      result.style_guide = 'BJCP2021'
      result.type = 'beer'

      require('fs').writeFileSync(
        `styles/${styleName}.json`,
        JSON.stringify(result, null, 4)
      )

      styleguide.beerjson.styles.push(result)
    }
    require('fs').writeFileSync(
      'bjcp_styleguide-2021.json',
      JSON.stringify(styleguide, null, 4)
    )
  } catch (error) {
    console.log(error)
  }
}

go()
