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
      definitions: {
        testPropName: {
          type: 'object',
          allOf: [{ $ref: '#/definitions/StyleBase' }]
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
      definitions: {
        name: {
          type: 'array',
          items: { $ref: 'fermentable.json#/definitions/FermentableType' }
        }
      }
    })
  ).toMatchSnapshot()
})

test('format oneOf property type should match snapshot', () => {
  expect(
    parse({
      definitions: {
        typeName: {
          type: 'object',
          properties: {
            amount: {
              oneOf: [
                {
                  $ref: 'measureable_units.json#/definitions/VolumeType'
                },
                {
                  $ref: 'measureable_units.json#/definitions/MassType'
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
      definitions: {
        typeName: {
          type: 'object',
          properties: {
            amount: {
              oneOf: [
                {
                  $ref: 'measureable_units.json#/definitions/VolumeType'
                },
                {
                  $ref: 'measureable_units.json#/definitions/MassType'
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
      definitions: {
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
      definitions: {
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
      definitions: {
        IBUEstimateType: {
          properties: {
            method: {
              $ref: '#/definitions/IBUMethodType'
            }
          }
        }
      }
    })
  }).toThrowError()
})
