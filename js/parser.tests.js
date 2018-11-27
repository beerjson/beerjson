const mapProps = require('./parser.js').mapProps

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
