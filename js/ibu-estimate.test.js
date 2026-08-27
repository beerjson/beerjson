const hopSchema = require('../json/hop')

describe('IBUEstimateType', () => {
  test('references the shared bitterness measurement type for its value', () => {
    expect(hopSchema['$defs'].IBUEstimateType.properties.value).toEqual({
      $ref: 'measureable_units.json#/$defs/BitternessType'
    })
  })
})
