const parse = require('./json-schema-to-markdown.js')
const typeSchema = require('../json/fermentable.json')
const rootSchema = require('../json/beer.json')
const mdFormatter = require('./markdown-formatter.js')
const formatParsedTypeRef = mdFormatter.formatParsedTypeRef

test('Type reference format', () => {
  expect(formatParsedTypeRef({ typeName: 'type', fileName: 'file' })).toBe(
    '[type](file.md#type)'
  )
})

test('test property list with single allOf entry', () => {
  expect(
    parse({
      "$defs": {
        testPropName: {
          type: 'object',
          allOf: [{ $ref: '#/$defs/StyleBase' }]
        }
      }
    })
  ).toMatchSnapshot()
})

test('fermentable docs should match snapshot', () => {
  expect(parse(typeSchema)).toMatchSnapshot()
})

test('root schema docs', () => {
  expect(parse(rootSchema)).toMatchSnapshot()
})

test('processArray should match snapshot', () => {
  expect(
    parse({
      "$defs": {
        name: {
          type: 'array',
          items: { $ref: 'fermentable.json#/$defs/FermentableType' }
        }
      }
    })
  ).toMatchSnapshot()
})

test('format oneOf property type should match snapshot', () => {
  expect(
    parse({
      "$defs": {
        typeName: {
          type: 'object',
          properties: {
            amount: {
              oneOf: [
                {
                  $ref: 'measureable_units.json#/$defs/VolumeType'
                },
                {
                  $ref: 'measureable_units.json#/$defs/MassType'
                }
              ]
            }
          }
        }
      }
    })
  ).toMatchSnapshot()
})

test('format oneOf property type should match snapshot', () => {
  expect(
    parse({
      "$defs": {
        typeName: {
          type: 'object',
          properties: {
            amount: {
              oneOf: [
                {
                  $ref: 'measureable_units.json#/$defs/VolumeType'
                },
                {
                  $ref: 'measureable_units.json#/$defs/MassType'
                }
              ]
            }
          }
        }
      }
    })
  ).toMatchSnapshot()
})

test('format simple type should match snapshot', () => {
  expect(
    parse({
      "$defs": {
        SpecificVolumeUnitType: {
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
      }
    })
  ).toMatchSnapshot()
})

test('format type with pattern should match snapshot', () => {
  expect(
    parse({
      "$defs": {
        patternType: {
          type: 'string',
          pattern:
            '\\d{4}-\\d{2}-\\d{2}|\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}'
        }
      }
    })
  ).toMatchSnapshot()
})

test('type attribute is required', () => {
  expect(() => {
    parse({
      "$defs": {
        IBUEstimateType: {
          properties: {
            method: {
              $ref: '#/$defs/IBUMethodType'
            }
          }
        }
      }
    })
  }).toThrow()
})
