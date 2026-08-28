/**
 * The package's `main` entry pointed at an index.js that did not exist, so
 * `require('@beerjson/beerjson')` threw MODULE_NOT_FOUND for both published
 * versions. Nothing tested it. These tests cover the public surface so the
 * entry point cannot break silently again.
 */
const fs = require('fs')
const path = require('path')

const pkg = require('../package.json')
const beerjson = require('../index.js')

describe('package manifest', () => {
  test('main points at a file that exists', () => {
    expect(fs.existsSync(path.join(__dirname, '..', pkg.main))).toBe(true)
  })

  test('types points at a file that exists', () => {
    expect(fs.existsSync(path.join(__dirname, '..', pkg.types))).toBe(true)
  })

  test('every file listed in `files` exists', () => {
    const missing = (pkg.files || []).filter(
      entry => !fs.existsSync(path.join(__dirname, '..', entry))
    )
    expect(missing).toEqual([])
  })

  test('ajv is a runtime dependency, since index.js needs it to validate', () => {
    expect(Object.keys(pkg.dependencies || {})).toContain('ajv')
  })
})

describe('exported schemas', () => {
  test('every schema under json/ is exported', () => {
    const onDisk = fs
      .readdirSync(path.join(__dirname, '..', 'json'))
      .filter(f => f.endsWith('.json'))
      .sort()
    expect(beerjson.schemaFiles.slice().sort()).toEqual(onDisk)
    expect(Object.keys(beerjson.schemas).sort()).toEqual(onDisk)
  })

  test('rootSchema is beer.json', () => {
    expect(beerjson.rootSchema).toBe(beerjson.schemas['beer.json'])
    expect(beerjson.rootSchema.properties.beerjson).toBeDefined()
  })
})

describe('validate', () => {
  const minimal = {
    beerjson: {
      version: 1.0,
      hop_varieties: [
        {
          name: 'Cascade',
          origin: 'US',
          alpha_acid: { unit: '%', value: 5 }
        }
      ]
    }
  }

  test('accepts a valid document', () => {
    expect(beerjson.validate(minimal)).toEqual({ valid: true, errors: [] })
  })

  test('accepts a JSON string', () => {
    expect(beerjson.validate(JSON.stringify(minimal)).valid).toBe(true)
  })

  test('reports a path, message and params for an invalid document', () => {
    const result = beerjson.validate({
      beerjson: { version: 1.0, hop_varieties: [{ origin: 'US' }] }
    })
    expect(result.valid).toBe(false)
    expect(result.errors.length).toBeGreaterThan(0)
    for (const error of result.errors) {
      expect(typeof error.path).toBe('string')
      expect(typeof error.message).toBe('string')
      expect(error.params).toBeDefined()
    }
  })

  test('reports every error, not only the first', () => {
    const result = beerjson.validate({
      beerjson: {
        version: 1.0,
        hop_varieties: [{ origin: 'US' }, { origin: 'DE' }]
      }
    })
    expect(result.errors.length).toBeGreaterThan(1)
  })

  test('reports malformed JSON rather than throwing', () => {
    const result = beerjson.validate('{ not json')
    expect(result.valid).toBe(false)
    expect(result.errors[0].message).toMatch(/^Invalid JSON:/)
  })

  test('does not leak errors from a previous call', () => {
    beerjson.validate({ beerjson: { version: 1.0, hop_varieties: [{}] } })
    expect(beerjson.validate(minimal)).toEqual({ valid: true, errors: [] })
  })
})
