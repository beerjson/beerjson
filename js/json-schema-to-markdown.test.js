const parse = require('./json-schema-to-markdown.js')
const typeSchema = require('../json/fermentable.json')
const rootSchema = require('../json/beer.json')

const rewire = require('rewire')
const parseRewire = rewire('././json-schema-to-markdown.js')
const formatTypeDefinition = parseRewire.__get__('formatTypeDefinition')
const formatTypeRef = parseRewire.__get__('formatTypeRef')
const formatPropertyList = parseRewire.__get__('formatPropertyList')
const formatArray = parseRewire.__get__('formatArray')
const mapProps = parseRewire.__get__('mapProps')

test('mapProps utility test that it maps and creates a new object', () => {
  const obj = { a: 1, b: 2 }
  const mapped = mapProps(obj, (key, value) => `${key}:${value}`)
  expect(mapped).toMatchObject(['a:1', 'b:2'])
  expect(obj).toMatchObject({ a: 1, b: 2 })
})
test('mapProps for undefined should be empty array', () => {
  const obj = { a: 1 }
  expect(mapProps(obj.b, (key, value) => 1)).toHaveLength(0)
})

test('Type reference format', () => {
  expect(formatTypeRef({ typeName: 'type', fileName: 'file' })).toBe(
    '[type](file.md#type)'
  )
})

test('test property list with single allOf entry', () => {
  expect(
    formatPropertyList('name', {
      allOf: [{ $ref: '#/definitions/StyleBase' }]
    })
  ).toBeDefined()
})

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

test('formatArray should match snapshot', () => {
  expect(
    formatArray({ $ref: 'fermentable.json#/definitions/FermentableType' })
  ).toMatchSnapshot()
})
