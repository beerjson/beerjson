/**
 * The version contract from ADR-0004: `beerjson.version` is the format version
 * as MAJOR.MINOR, the schema accepts only the versions it can validate, and
 * every document under tests/ declares a supported one.
 */
const fs = require('fs')
const path = require('path')

const beerjson = require('../index.js')
const { CURRENT_VERSION, SUPPORTED_VERSIONS } = require('../js/format-version')

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

  test('every supported version sorts below the current one', () => {
    for (const version of SUPPORTED_VERSIONS) {
      expect(version).toBeLessThanOrEqual(CURRENT_VERSION)
    }
  })

  test('has exactly two components, never MAJOR.MINOR.PATCH', () => {
    for (const version of SUPPORTED_VERSIONS) {
      expect(String(version).split('.').length).toBeLessThanOrEqual(2)
    }
  })

  // A JSON number cannot distinguish 3.10 from 3.1, so a two-digit minor
  // collides with an earlier version. The 2.0x values predate this rule and
  // keep the two-decimal form they were published with.
  test('minor versions from 3.0 onwards stay single-digit', () => {
    for (const version of SUPPORTED_VERSIONS.filter(v => v >= 3)) {
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

  test.each([0.9, 1.0, 1.1, 2.0, 2.07, 4.0])(
    'unsupported version %s is rejected',
    version => {
      expect(beerjson.validate(document(version)).valid).toBe(false)
    }
  )

  test('a non-numeric version is rejected', () => {
    expect(beerjson.validate(document('3.0')).valid).toBe(false)
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
