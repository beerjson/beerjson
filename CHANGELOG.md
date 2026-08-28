# Changelog

All notable changes to BeerJSON are documented in this file. The format is based
on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and the project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Note that the format version recorded inside a document (`beerjson.version`) and
the version of the `@beerjson/beerjson` npm package are separate things. Entries
below refer to the npm package version; where an entry changes what a document
may contain, it says so.

Releases before 1.0.3 are reconstructed from git history and are less detailed
than entries written at the time.

## [Unreleased]

Everything below has been on `main` since 1.0.2 (October 2021) without a
release. The npm package is still 1.0.2, so none of it has reached consumers.

### Changed (breaking)

- **Schemas migrated to JSON Schema 2020-12, and `definitions` renamed to
  `$defs`.** draft-07 has no `deprecated` keyword, which is the only way to
  correct a misspelled property without invalidating existing files
  ([#214](https://github.com/beerjson/beerjson/issues/214),
  [#208](https://github.com/beerjson/beerjson/issues/208)), and no
  `unevaluatedProperties`, which is the only way an `allOf`-composed type can
  reject unknown keys. All 46 test documents validate unchanged; a consumer that
  resolves `$ref` pointers properly is unaffected, but one that string-matches
  `#/definitions/` will not find the types. See
  [ADR-0002](adr/0002-json-schema-2020-12.md).
- **`FermentableBase.group` renamed to `grain_group`**
  ([#219](https://github.com/beerjson/beerjson/pull/219)). `group` was never a
  valid key for the value it held.
- **`DensityUnitType` removed** from `measureable_units.json`
  ([#234](https://github.com/beerjson/beerjson/pull/234)). It duplicated
  `GravityUnitType` and no type referenced it.

### Added

- **`ibu_estimate` on recipes**
  ([#237](https://github.com/beerjson/beerjson/pull/237)). `IBUEstimateType`
  now carries a `value` alongside its estimation method, so a recipe can record
  the bitterness it was designed to hit rather than only how that number was
  arrived at.
- **`vessel_pressure` on fermentation steps**
  ([#195](https://github.com/beerjson/beerjson/pull/195),
  [#178](https://github.com/beerjson/beerjson/issues/178)), for fermenting under
  pressure.
- **`PackagingGraphicType`** ([#185](https://github.com/beerjson/beerjson/pull/185),
  [#118](https://github.com/beerjson/beerjson/issues/118)), so a packaging
  vessel can carry label artwork by URL or embedded base64.
- **BJCP 2021 style guide** added to the test corpus
  ([#191](https://github.com/beerjson/beerjson/pull/191)).
- **Contributor documentation**: [CONTRIBUTING.md](CONTRIBUTING.md),
  [SCHEMA_STYLE.md](SCHEMA_STYLE.md), [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md),
  a security policy, issue and pull request templates, and [ADRs](adr/) for
  recording format decisions.
- **`additionalProperties: false` on `IBUEstimateType` and `OilContentType`**,
  the only two standalone object types that lacked it, so a misspelled key in
  either is now a validation error.
- **The npm package has a working entry point**
  ([#215](https://github.com/beerjson/beerjson/issues/215)).
  `require('@beerjson/beerjson')` now returns `{ validate, schemas, rootSchema, schemaFiles }`. `validate` takes a document or a JSON string and returns
  `{ valid, errors }` with every error reported, each carrying a JSON pointer,
  a message and ajv's params.
- **`engines: node >= 22`** declared, and CI runs the suite on Node 22 and 24
  ([#216](https://github.com/beerjson/beerjson/issues/216)).

### Fixed

- **The documentation and type generator crashed on any array with inline
  `items`**, and had done since `packaging_graphic.json` was added. The failure
  was masked because the npm script chained its steps with `;`, so `docs/` and
  `types/` were hand-maintained and had drifted: `docs/packaging_graphic.json.md`
  did not exist, the types declared a `GraphicType` that the schema does not have
  (with a `body warp around` typo and a `bmp` format the schema never listed),
  they still declared the removed `DensityUnitType`, and `BeerJSON.profiles` was
  typed `WaterBase[]` where the schema says `WaterType`. All four are corrected
  by regenerating.
- **`packaging_vessel.graphics` and the `misc.json` root** had JSON Schema
  authoring errors ([#222](https://github.com/beerjson/beerjson/pull/222)).
- **Kolbach Index** is a percentage, and is now typed as one
  ([#187](https://github.com/beerjson/beerjson/pull/187),
  [#186](https://github.com/beerjson/beerjson/issues/186)).
- **Typos** in `beer.json` and `fermentable.json` descriptions
  ([#199](https://github.com/beerjson/beerjson/pull/199),
  [#200](https://github.com/beerjson/beerjson/pull/200)).
- **`$id` values** pointed at the `master` branch, renamed to `main` in
  [#235](https://github.com/beerjson/beerjson/pull/235).
- **ajv** updated to `^8.20.0`, clearing GHSA-2g4f-4pwh-qvx6, and moved to
  `dependencies`, since the shipped validator requires it at runtime.
- **The published tarball** carried 133 files and 2.5 MB unpacked, including the
  2 MB of style guide fixtures, the BeerXML `xsd/` reference and the generators.
  A `files` allowlist brings it to 28 files and 120 kB: the schemas, the
  declarations, the validator and the changelog.

## [1.0.2] - 2021-10-12

### Added

- `GraphicType` for vessel labels ([#185](https://github.com/beerjson/beerjson/pull/185)).
- `beerjson.d.ts` declared as the package's `types` entry
  ([#183](https://github.com/beerjson/beerjson/pull/183)).

### Changed

- `timing` removed from the document root
  ([#181](https://github.com/beerjson/beerjson/pull/181)). It only ever made
  sense attached to an addition.
- Kolbach Index typed as a percentage
  ([#187](https://github.com/beerjson/beerjson/pull/187)).
- BeerXML to BeerJSON converter updated
  ([#184](https://github.com/beerjson/beerjson/pull/184)).

## [1.0.1] - 2021-06-02

### Added

- `g/l` as a carbonation unit ([#174](https://github.com/beerjson/beerjson/pull/174)).
- Further example documents in the test corpus
  ([#165](https://github.com/beerjson/beerjson/pull/165)).

### Fixed

- `pH` documentation on timing ([#168](https://github.com/beerjson/beerjson/pull/168)).

## [1.0.0] - 2021-06-01

First published release of the BeerJSON format
([#176](https://github.com/beerjson/beerjson/pull/176)), after four years of
development. Establishes the schema set under `json/`, the generated reference
documentation, TypeScript and Flow declarations, and the `@beerjson/beerjson`
npm package.

The format is derived from the unfinished BeerXML 2 draft. Significant
departures from BeerXML 1.0 are listed in the [README](README.md).
