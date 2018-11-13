const parse = require('./json-schema-to-markdown.js')
const typeSchema = require('../json/fermentable.json')
const rootSchema = require('../json/beer.json')

const rewire = require('rewire')
const parseRewire = rewire('././json-schema-to-markdown.js')
const formatTypeDefinition = parseRewire.__get__('formatTypeDefinition')
const formatParsedTypeRef = parseRewire.__get__('formatParsedTypeRef')
const formatPropertyList = parseRewire.__get__('formatPropertyList')
const formatArray = parseRewire.__get__('formatArray')
const formatPropType = parseRewire.__get__('formatPropType')
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
  expect(formatParsedTypeRef({ typeName: 'type', fileName: 'file' })).toBe(
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

test('format oneOf property type should match snapshot', () => {
  expect(
    formatPropType({
      oneOf: [
        {
          $ref: 'measureable_units.json#/definitions/VolumeType'
        },
        {
          $ref: 'measureable_units.json#/definitions/MassType'
        }
      ]
    })
  ).toMatchSnapshot()
})

test('format simple type should match snapshot', () => {
  expect(
    formatTypeDefinition([
      'SpecificVolumeUnitType',
      {
        type: 'string',
        enum: [
          'qt/lb',
          'gal/lb',
          'gal/oz',
          'l/g',
          'l/kg',
          'floz/oz',
          'm^3/kg',
          'ft^3/lb'
        ]
      }
    ])
  ).toMatchSnapshot()
})

test('format type with pattern should match snapshot', () => {
  expect(
    formatPropType({
      type: 'string',
      pattern: '\\d{4}-\\d{2}-\\d{2}|\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}'
    })
  ).toMatchSnapshot()
})
