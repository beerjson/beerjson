const parse = require('../js/json-schema-to-markdown.js')
const fermentableSchema = require('../json/fermentable.json')

test('fermentable docs should match snapshot', () => {
  expect(parse(fermentableSchema)).toMatchSnapshot()
})

test('formatTypeDefinition', () => {
  expect(
    parse.formatTypeDefinition([
      'FermentableBase',
      fermentableSchema.definitions.FermentableBase
    ])
  ).toMatchSnapshot()
})

test('formatParentType', () => {
  expect(
    parse.formatParentType(fermentableSchema.definitions.FermentableBase)
  ).toEqual('')
})
