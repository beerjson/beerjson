const parse = require('../js/json-schema-to-markdown.js')
const typeSchema = require('../json/fermentable.json')
const objSchema = require('../json/beer.json')

test('fermentable docs should match snapshot', () => {
  expect(parse(typeSchema)).toMatchSnapshot()
})

test('formatTypeDefinition', () => {
  expect(
    parse.formatTypeDefinition([
      'FermentableBase',
      typeSchema.definitions.FermentableBase
    ])
  ).toMatchSnapshot()
})

test('formatObjectDefinition', () => {
  expect(parse.formatPropertyList(objSchema)).toMatchSnapshot()
})
