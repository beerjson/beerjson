/**
 * The version contract from ADR-0004. `beerjson.version` was unconstrained and
 * the repository's own documents disagreed about what belonged in it for five
 * years, so every part of the contract is pinned here.
 */
const fs = require('fs')
const path = require('path')

const beerjson = require('../index.js')
const {
  CURRENT_VERSION,
  SUPPORTED_VERSIONS,
  DEPRECATED_VERSIONS
} = require('../js/format-version')

const document = version => ({
  beerjson: {
    version,
    hop_varieties: [
      { name: 'Cascade', origin: 'US', alpha_acid: { unit: '%', value: 5 } }
    ]
  }
})

describe('VersionType', () => {
  test('the current version is the highest supported one', () => {
    expect(CURRENT_VERSION).toBe(Math.max(...SUPPORTED_VERSIONS))
  })

  test('has exactly two components, never MAJOR.MINOR.PATCH', () => {
    for (const version of [...SUPPORTED_VERSIONS, ...DEPRECATED_VERSIONS]) {
      expect(String(version).split('.').length).toBeLessThanOrEqual(2)
    }
  })

  // A JSON number cannot distinguish 1.10 from 1.1, so a two-digit minor
  // silently collides with an earlier version. ADR-0004 keeps minors single
  // digit until the field becomes a string in a future major.
  test('minor versions stay single-digit', () => {
    for (const version of SUPPORTED_VERSIONS) {
      const minor = String(version).split('.')[1]
      if (minor !== undefined) expect(minor.length).toBe(1)
    }
  })

  test.each(SUPPORTED_VERSIONS)('%s validates', version => {
    expect(beerjson.validate(document(version))).toEqual({
      valid: true,
      errors: []
    })
  })

  // These were never a published BeerJSON version, but they are what the
  // examples showed for years, so implementations copied them.
  test.each(DEPRECATED_VERSIONS)('deprecated %s still validates', version => {
    expect(beerjson.validate(document(version)).valid).toBe(true)
  })

  test('the deprecated branch is marked deprecated', () => {
    const { VersionType } = require('../json/measureable_units.json').$defs
    expect(VersionType.oneOf[1].deprecated).toBe(true)
  })

  test.each([0.9, 2.0, 3.0, 1.2])('unknown version %s is rejected', version => {
    expect(beerjson.validate(document(version)).valid).toBe(false)
  })

  test('a non-numeric version is rejected', () => {
    expect(beerjson.validate(document('1.1')).valid).toBe(false)
  })
})

describe('the test corpus declares a supported version', () => {
  const dirs = fs
    .readdirSync(path.join(__dirname))
    .filter(entry => entry !== 'xml' && !entry.startsWith('.'))
    .filter(entry => fs.statSync(path.join(__dirname, entry)).isDirectory())

  const documents = []
  for (const dir of dirs) {
    for (const file of fs.readdirSync(path.join(__dirname, dir))) {
      documents.push([`${dir}/${file}`, path.join(__dirname, dir, file)])
    }
  }

  test.each(documents)('%s', (_name, file) => {
    const { version } = JSON.parse(fs.readFileSync(file, 'utf8')).beerjson
    expect(SUPPORTED_VERSIONS).toContain(version)
  })
})

describe('the BeerXML importer', () => {
  const importFromBeerXml = require('../js/beerxml-to-beerjson')

  test('emits the current format version, not a hardcoded one', () => {
    const xml = fs.readFileSync(
      path.join(__dirname, 'xml', 'Kolsh.xml'),
      'utf8'
    )
    const converted = JSON.parse(importFromBeerXml(xml))
    expect(converted.beerjson.version).toBe(CURRENT_VERSION)
  })
})
