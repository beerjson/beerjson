/**
 * The format version, derived from the schema so there is one source of truth.
 *
 * `VersionType` is a oneOf: the first branch enumerates the current versions,
 * the second the deprecated development-snapshot values. See ADR-0004.
 */
const { VersionType } = require('../json/measureable_units.json').$defs

const [current, deprecated] = VersionType.oneOf

const SUPPORTED_VERSIONS = current.enum
const DEPRECATED_VERSIONS = deprecated.enum
const CURRENT_VERSION = Math.max(...SUPPORTED_VERSIONS)

module.exports = {
  CURRENT_VERSION,
  SUPPORTED_VERSIONS,
  DEPRECATED_VERSIONS
}
