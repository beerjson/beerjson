const convert = require('./json-schema-to-flow.js')
const rootSchema = require('../json/beer.json')

test('simple schema converted to flow', () => {
  expect(
    convert({
      definitions: {
        ObjType: {
          type: 'object',
          properties: {
            strProp: { type: 'string' },
            numberProp: { type: 'number' }
          }
        }
      }
    })
  ).toBe(
    `    export type ObjType = {
        strProp?: string,
        numberProp?: number,
    }

`
  )
})

test('enum format', () => {
  expect(
    convert({
      definitions: {
        EnumType: {
          type: 'object',
          properties: {
            enumProp: { type: 'string', enum: ['a', 'b'] }
          }
        }
      }
    })
  ).toMatchSnapshot()
})

test('root schema type', () => {
  expect(convert(rootSchema)).toMatchSnapshot()
})

test('regexp pattern should be rendered as comment', () => {
  expect(
    convert({
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
