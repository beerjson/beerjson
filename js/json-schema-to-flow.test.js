const convert = require('./json-schema-to-flow.js')

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
    `//@flow

    type ObjType = {
        strProp: string,
        numberProp: number,
    }
`
  )
})
