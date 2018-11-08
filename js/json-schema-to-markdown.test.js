const parse = require('./json-schema-to-markdown.js')
const typeSchema = require('../json/fermentable.json')
const rootSchema = require('../json/beer.json')

const rewire = require('rewire')
const parseRewire = rewire('././json-schema-to-markdown.js')
const formatTypeDefinition = parseRewire.__get__('formatTypeDefinition')

test('fermentable docs should match snapshot', () => {
  expect(parse(typeSchema)).toMatchSnapshot()
})

test('formatTypeDefinition', () => {
  expect(
    formatTypeDefinition([
      'FermentableBase',
      typeSchema.definitions.FermentableBase
    ])
  ).toMatchSnapshot()
})

test('root schema docs', () => {
  expect(parse(rootSchema)).toMatchSnapshot()
})
