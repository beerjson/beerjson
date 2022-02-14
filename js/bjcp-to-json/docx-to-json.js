const styles = [
  '1. Standard American Beer',
  '1A. American Light Lager',
  '1B. American Lager',
  '1C. Cream Ale',
  '1D. American Wheat Beer',
  '2. International Lager',
  '2A. International Pale Lager',
  '2B. International Amber Lager',
  '2C. International Dark Lager',
  '3. Czech Lager',
  '3A. Czech Pale Lager',
  '3B. Czech Premium Pale Lager',
  '3C. Czech Amber Lager',
  '3D. Czech Dark Lager',
  '4. Pale Malty European Lager',
  '4A. Munich Helles',
  '4B. Festbier',
  '4C. Helles Bock',
  '5. Pale Bitter European Beer',
  '5A. German Leichtbier',
  '5B. Kölsch',
  '5C. German Helles Exportbier',
  '5D. German Pils',
  '6. Amber Malty European Lager',
  '6A. Märzen',
  '6B. Rauchbier',
  '6C. Dunkles Bock',
  '7. Amber Bitter European Beer',
  '7A. Vienna Lager',
  '7B. Altbier',
  '8. Dark European Lager',
  '8A. Munich Dunkel',
  '8B. Schwarzbier',
  '9. Strong European Beer',
  '9A. Doppelbock',
  '9B. Eisbock',
  '9C. Baltic Porter',
  '10. German Wheat Beer',
  '10A. Weissbier',
  '10B. Dunkles Weissbier',
  '10C. Weizenbock',
  '11. British Bitter',
  '11A. Ordinary Bitter',
  '11B. Best Bitter',
  '11C. Strong Bitter',
  '12. Pale Commonwealth Beer',
  '12A. British Golden Ale',
  '12B. Australian Sparkling Ale',
  '12C. English IPA',
  '13. Brown British Beer',
  '13A. Dark Mild',
  '13B. British Brown Ale',
  '13C. English Porter',
  '14. Scottish Ale',
  '14A. Scottish Light',
  '14B. Scottish Heavy',
  '14C. Scottish Export',
  '15. Irish Beer',
  '15A. Irish Red Ale',
  '15B. Irish Stout',
  '15C. Irish Extra Stout',
  '16. Dark British Beer',
  '16A. Sweet Stout',
  '16B. Oatmeal Stout',
  '16C. Tropical Stout',
  '16D. Foreign Extra Stout',
  '17. Strong British Ale',
  '17A. British Strong Ale',
  '17B. Old Ale',
  '17C. Wee Heavy',
  '17D. English Barley Wine',
  '18. Pale American Ale',
  '18A. Blonde Ale',
  '18B. American Pale Ale',
  '19. Amber and Brown American Beer',
  '19A. American Amber Ale',
  '19B. California Common',
  '19C. American Brown Ale',
  '20. American Porter and Stout',
  '20A. American Porter',
  '20B. American Stout',
  '20C. Imperial Stout',
  '21. IPA',
  '21A. American IPA',
  '21B. Specialty IPA',
  'Specialty IPA: Belgian IPA',
  'Specialty IPA: Black IPA',
  'Specialty IPA: Brown IPA',
  'Specialty IPA: Red IPA',
  'Specialty IPA: Rye IPA',
  'Specialty IPA: White IPA',
  'Specialty IPA: Brut IPA',
  '21C. Hazy IPA',
  '22. Strong American Ale',
  '22A. Double IPA',
  '22B. American Strong Ale',
  '22C. American Barleywine',
  '22D. Wheatwine',
  '23. European Sour Ale',
  '23A. Berliner Weisse',
  '23B. Flanders Red Ale',
  '23C. Oud Bruin',
  '23D. Lambic',
  '23E. Gueuze',
  '23F. Fruit Lambic',
  '23G. Gose',
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
  '34C. Experimental Beer'
]

const flattenKeys = require('./flatter').flattenKeys
const unflattenKeys = require('./flatter').unflattenKeys
const _ = require('lodash')

async function go() {
  const EasyDocx = require('node-easy-docx')
  const easyDocx = new EasyDocx({
    path: './2021_Guidelines_Beer.docx'
  })

  try {
    const data = await easyDocx.parseDocx()
    require('fs').writeFileSync('data.json', JSON.stringify(data))

    const dataFlatten = flattenKeys(data)
    //console.log(dataFlatten)
    require('fs').writeFileSync('dataFlatten.json', JSON.stringify(dataFlatten))

    for (let i = 0; i < styles.length; i++) {
      const style = styles[i]

      const result = {}
      result.name = style
      result.data = []
      let collect = false
      let param = ''

      _.forEach(dataFlatten, (value, key) => {
        if (value != null && key.endsWith('.text')) {
          if (!key.includes('.items.')) {
            collect = false
          }
          if (value == style) {
            collect = true
          }

          if (collect && value != style) {
            console.log(collect, param, key, value)
            if (value.endsWith(':') && value != 'that are either:') {
              param = value
              result.data[param] = ''
            } else {
              if (param == '') {
                param = 'Intro:'
                result.data[param] = ''
              }
              result.data[param] = result.data[param] + value
            }
          }
        }
      })

      console.log(result)
    }
  } catch (error) {
    console.log(error)
  }
}

go()
