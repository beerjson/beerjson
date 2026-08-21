/**
 * A rename is only non-breaking if both spellings really validate. These tests
 * pin that contract, so removing the deprecated form is a deliberate act with a
 * failing test attached rather than a silent break of every existing document.
 */
const beerjson = require('../index.js')

const waterProfile = extra => ({
  beerjson: {
    version: 1.0,
    profiles: [
      {
        name: 'Test water',
        calcium: { unit: 'mg/l', value: 50 },
        bicarbonate: { unit: 'mg/l', value: 100 },
        sulfate: { unit: 'mg/l', value: 50 },
        chloride: { unit: 'mg/l', value: 50 },
        sodium: { unit: 'mg/l', value: 10 },
        magnesium: { unit: 'mg/l', value: 5 },
        ...extra
      }
    ]
  }
})

describe('WaterBase fluoride (#214)', () => {
  const schema = require('../json/water.json').$defs.WaterBase.properties

  test('the corrected spelling exists and is not deprecated', () => {
    expect(schema.fluoride).toBeDefined()
    expect(schema.fluoride.deprecated).toBeUndefined()
  })

  test('the misspelling is still declared, and marked deprecated', () => {
    expect(schema.flouride).toBeDefined()
    expect(schema.flouride.deprecated).toBe(true)
  })

  test('both spellings reference the same type', () => {
    expect(schema.fluoride.$ref).toBe(schema.flouride.$ref)
  })

  test('a document using the corrected spelling validates', () => {
    const result = beerjson.validate(
      waterProfile({ fluoride: { unit: 'mg/l', value: 1 } })
    )
    expect(result).toEqual({ valid: true, errors: [] })
  })

  test('a document using the deprecated spelling still validates', () => {
    const result = beerjson.validate(
      waterProfile({ flouride: { unit: 'mg/l', value: 1 } })
    )
    expect(result).toEqual({ valid: true, errors: [] })
  })

  test('a document using both validates', () => {
    const result = beerjson.validate(
      waterProfile({
        fluoride: { unit: 'mg/l', value: 1 },
        flouride: { unit: 'mg/l', value: 1 }
      })
    )
    expect(result).toEqual({ valid: true, errors: [] })
  })
})

describe('generated output marks deprecated properties', () => {
  const fs = require('fs')
  const path = require('path')
  const read = file => fs.readFileSync(path.join(__dirname, '..', file), 'utf8')

  test('the markdown reference flags it', () => {
    const docs = read('docs/water.json.md')
    expect(docs).toMatch(/\*\*flouride\*\*.*Deprecated/)
  })

  test('the TypeScript declarations carry @deprecated', () => {
    const types = read('types/ts/beerjson.d.ts')
    expect(types).toMatch(/@deprecated \*\/\n\s*flouride\?/)
  })
})

describe('CultureBase types (#217)', () => {
  const type = require('../json/culture.json').$defs.CultureBase.properties.type

  test('wheat is an available culture type', () => {
    expect(type.enum).toContain('wheat')
  })

  test('a wheat culture validates', () => {
    const result = beerjson.validate({
      beerjson: {
        version: 1.0,
        cultures: [
          {
            name: 'Weihenstephan Weizen',
            type: 'wheat',
            form: 'liquid',
            producer: 'Wyeast',
            product_id: '3068'
          }
        ]
      }
    })
    expect(result).toEqual({ valid: true, errors: [] })
  })
})
