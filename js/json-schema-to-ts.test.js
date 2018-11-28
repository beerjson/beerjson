const convert = require('./json-schema-to-ts.js')
const rootSchema = require('../json/beer.json')

test('simple schema converted to ts', () => {
  expect(
    convert({
      definitions: {
        ObjType: {
          type: 'object',
          properties: {
            strProp: { type: 'string' },
            numberProp: { type: 'number' },
            intProp: { type: 'integer' }
          }
        }
      }
    })
  ).toBe(
    `    export type ObjType = {
        strProp?: string,
        numberProp?: number,
        intProp?: number,
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
