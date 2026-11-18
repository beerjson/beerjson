/**
 * The format version, derived from the schema so there is one source of truth.
 * `VersionType` enumerates every version this schema can validate; the current
 * one is the highest. See ADR-0004.
 */
const { VersionType } = require('../json/measureable_units.json').$defs

const SUPPORTED_VERSIONS = VersionType.enum
const CURRENT_VERSION = Math.max(...SUPPORTED_VERSIONS)

module.exports = {
  CURRENT_VERSION,
  SUPPORTED_VERSIONS
}
