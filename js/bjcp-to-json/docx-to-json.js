const styles = require('./styles')

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

const docxToJson = async () => {
  const EasyDocx = require('node-easy-docx')
  const easyDocx = new EasyDocx({
    path: './2021_Guidelines_Beer.docx'
  })

  const data = await easyDocx.parseDocx()
  require('fs').writeFileSync('data.json', JSON.stringify(data))

  const dataFlatten = flattenKeys(data)
  console.log(dataFlatten)
  require('fs').writeFileSync('dataFlatten.json', JSON.stringify(dataFlatten))
}

const extractCategoryDescription = (catName, dataFlatten) => {
  let collect = false
  let category_description = ''

  _.forEach(dataFlatten, (value, key) => {
    if (value != null && key.endsWith('.text')) {
      if (!key.includes('.items.')) {
        collect = false
      }

      if (value == catName) {
        collect = true
      }

      if (collect && value != catName) {
        category_description = category_description + value
      }
    }
  })

  return category_description
}

const extractStyleFields = (styleName, dataFlatten) => {
  const result = {}
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
        if (
          value.trim().endsWith(':') &&
          value != 'that are either:' &&
          value != 'Saison, Session Strength, Comment: '
        ) {
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

  return result
}

async function go() {
  //initial 2021_Guidelines_Beer.docx parsing to json and flattering it.
  //await docxToJson()

  try {
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
      const catName = `${styles[i].category_id}. ${styles[i].category}`
      const category_description = extractCategoryDescription(
        catName,
        dataFlatten
      )

      if (category_description != null) {
        styles[i].category_description = category_description
      }
    }

    for (let i = 0; i < styles.length; i++) {
      const styleName = `${styles[i].style_id}. ${styles[i].name}`
      const styleFields = extractStyleFields(styleName, dataFlatten)
      const style = { ...styles[i], ...styleFields }

      for (const [key, value] of Object.entries(style)) {
        style[key] = value.trim()
        if (style[key] == '') {
          delete style[key]
        }
      }

      if (style.og != null) {
        style.original_gravity = extract(style.og, 'sg')
        delete style.og
      }

      if (style.ib_us != null) {
        style.international_bitterness_units = extract(style.ib_us, 'IBUs')
        delete style.ib_us
      }

      if (style.fg != null) {
        style.final_gravity = extract(style.fg, 'sg')
        delete style.fg
      }

      if (style.abv != null) {
        style.alcohol_by_volume = extract(style.abv.replace('%', ''), '%')
        delete style.abv
      }

      if (style.srm != null) {
        style.color = extract(style.srm, 'SRM')
        delete style.srm
      }

      if (style['vital_statistics'] == '') {
        delete style['vital_statistics']
      }

      if (style['characteristic_ingredients'] != null) {
        style.ingredients = style['characteristic_ingredients'].trim()
        delete style['characteristic_ingredients']
      }

      if (style['commercial_examples'] != null) {
        style.examples = style['commercial_examples'].trim()
        delete style['commercial_examples']
      }

      style.style_guide = 'BJCP2021'
      style.type = 'beer'

      require('fs').writeFileSync(
        `styles/${styleName}.json`,
        JSON.stringify(style, null, 4)
      )

      styleguide.beerjson.styles.push(style)
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
