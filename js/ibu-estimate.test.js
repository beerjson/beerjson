const hopSchema = require('../json/hop')

describe('IBUEstimateType', () => {
  test('references the shared bitterness measurement type for its value', () => {
    expect(hopSchema.definitions.IBUEstimateType.properties.value).toEqual({
      $ref: 'measureable_units.json#/definitions/BitternessType'
    })
  })
})
