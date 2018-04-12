const parse = require('../js/json-schema-to-markdown.js')
const schema = require('../json/fermentable.json')

test('fermentable docs should match snapshot', () => {
  expect(parse(schema)).toMatchSnapshot()
})

test('formatTypeDefinition', () => {
  expect(
    parse.formatTypeDefinition([
      'FermentableBase',
      schema.definitions.FermentableBase
    ])
  ).toMatchSnapshot()
})
