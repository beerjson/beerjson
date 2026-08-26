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

### Added

- **Every property and every type in the format now has a description**, which
  completes the documentation work tracked by
  [#89](https://github.com/beerjson/beerjson/issues/89). 121 properties and 42
  types had none, so the published reference showed blank cells and
  "_no description yet_" against roughly a third of the format, and the
  generated TypeScript and Flow declarations carried no explanatory text at all.
  Under 2020-12 these strings also reach validators, which draft-07 ignored when
  they sat next to a `$ref`.

  Descriptions say what a value means and, where it is not obvious, what it is
  measured relative to or which unit it is in. Two ambiguities the format has
  but does not resolve are named rather than papered over:
  `RecipeType.calories_per_pint` does not say which pint, and `TasteType.rating`
  does not define a scale.

- **The conventions test enforces descriptions outright**, replacing the
  per-file budget: a property or type without one fails, and so does a
  description that is present but blank.

### Fixed

- **`EquipmentType.equipment_items` had `"description": ""`**, which reads as
  documented to any tooling checking for the key's presence while rendering as
  an empty cell in the reference.

## [1.1.0] - 2026-08-21

Format version **1.1**. The first release since October 2021: everything below
had accumulated on `main` without reaching consumers.

No document that was valid against 1.0.2 becomes invalid. The schemas are
stricter, but only about keys and values that were never part of the format and
were going undetected.

> **Upgrade notes**
>
> - **Schema consumers**: the schemas are now JSON Schema 2020-12, so a
>   validator supporting that draft is required, and type definitions moved from
>   `definitions` to `$defs`. Code that resolves `$ref` pointers properly needs
>   no change; code that string-matches `#/definitions/` does.
> - **TypeScript consumers**: `GraphicType` is now `PackagingGraphicType`, which
>   is what the schema always called it, and `DensityUnitType` is gone. Neither
>   described anything the schema contained.
> - **Anyone writing documents**: write `"version": 1.1`. The `2.01` and `2.06`
>   values that the examples used to show still validate but are deprecated. See
>   [ADR-0004](adr/0004-format-version-numbering.md).

### Changed

- **Schemas migrated to JSON Schema 2020-12, and `definitions` renamed to
  `$defs`.** draft-07 has no `deprecated` keyword, which is the only way to
  correct a misspelled property without invalidating existing files
  ([#214](https://github.com/beerjson/beerjson/issues/214),
  [#208](https://github.com/beerjson/beerjson/issues/208)), and no
  `unevaluatedProperties`, which is the only way an `allOf`-composed type can
  reject unknown keys. All 46 test documents validate unchanged. See
  [ADR-0002](adr/0002-json-schema-2020-12.md).
- **`beerjson.version` is now constrained and documented**
  ([ADR-0004](adr/0004-format-version-numbering.md)). It was a bare `number`
  with no constraint and no documentation, so nothing agreed on what belonged in
  it: 22 of the repository's own documents said `2.01`, 24 said `2.06`, the
  BeerXML importer hardcoded `2.06`, and the README called the format 1.0. It is
  the format version, `MAJOR.MINOR`, distinct from the npm package version, and
  the schema now enumerates the versions it accepts. The `2.0x` development
  snapshot values are kept and marked deprecated, because the published examples
  showed them for five years and implementations copied them.
- **`DensityUnitType` removed** from `measureable_units.json`
  ([#234](https://github.com/beerjson/beerjson/pull/234)). It duplicated
  `GravityUnitType` and no type referenced it, so no document could have used it.

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
- **`WaterBase.fluoride`**, spelled correctly
  ([#214](https://github.com/beerjson/beerjson/issues/214)). The misspelled
  `flouride` is kept and marked `deprecated`, so existing documents stay valid
  and writers can migrate on their own schedule. Readers should accept either
  and prefer `fluoride` when both are present. This is the first use of the
  deprecation path that 2020-12 makes possible, and it is what #214 was blocked
  on.
- **`wheat` as a culture type**
  ([#217](https://github.com/beerjson/beerjson/issues/217)). It was a yeast type
  in BeerXML 1.0 with no BeerJSON equivalent, so a Hefeweizen strain had no
  correct classification.
- **Deprecations are visible in the generated output.** The markdown reference
  marks a deprecated property, and the TypeScript and Flow declarations emit
  `@deprecated`, so an editor strikes it through at the point of use.
- **Nine of the thirteen `allOf`-composed types now reject unknown keys**, via
  2020-12's `unevaluatedProperties`: `CultureInformation`,
  `CultureAdditionType`, `EquipmentItemType`, `FermentableType`,
  `FermentableAdditionType`, `VarietyInformation`, `MiscellaneousType`,
  `MiscellaneousAdditionType` and `WaterType`. A misspelled key in any of them
  was previously accepted and silently discarded, and draft-07 offered no way to
  catch it. `HopAdditionType`, `WaterAdditionType`, `StyleType` and
  `RecipeStyleType` remain open pending format questions.

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
- **The BeerXML importer converted every hop as a boil addition**, because
  `timing.use` was hardcoded to `add_to_boil` while BeerXML's `USE` was written
  out to a `use` key the format does not have. Dry hops therefore became boil
  additions. `USE` is now mapped to `timing.use`, so the six dry hop additions
  in the fixtures convert to `add_to_fermentation`. Same fix for miscellaneous
  additions.
- **The BeerXML importer emitted three more keys the format does not have**:
  `supplier` on fermentable additions (the schema calls it `producer`),
  `add_after_boil` (now a `timing` of `add_to_fermentation`), and `use` on
  miscellaneous additions. Its `parseBool` also only recognised uppercase
  `TRUE`, so a lowercase `true` in a source file read as false.
- **Test fixtures used properties the format does not have**: `laboratory` for
  `producer` on cultures, `add_to_fermentation_step: N` where `TimingType`
  expresses exactly that as `timing.step`, and the hop oil fields flat on an
  addition rather than nested under `oil_content`.
- **The BeerXML importer wrote an invalid `group` key** on fermentable
  additions, where the schema has always called it `grain_group`
  ([#219](https://github.com/beerjson/beerjson/pull/219)). The schema was not
  changed, so this affects only files the importer produced.
- **`packaging_vessel.graphics` and the `misc.json` root** had JSON Schema
  authoring errors ([#222](https://github.com/beerjson/beerjson/pull/222)).
- **Kolbach Index** is a percentage, and is now typed as one
  ([#187](https://github.com/beerjson/beerjson/pull/187),
  [#186](https://github.com/beerjson/beerjson/issues/186)).
- **`TimingType.time` now says what it is measured from**
  ([#220](https://github.com/beerjson/beerjson/issues/220)). The reference point
  depends on `use`: forwards from the start of the step for mash, fermentation
  and packaging additions, backwards from the end for boil additions. The
  previous description gave only the fermentation case, leaving implementers to
  infer the boil convention.
- **Typos** in `beer.json` and `fermentable.json` descriptions
  ([#199](https://github.com/beerjson/beerjson/pull/199),
  [#200](https://github.com/beerjson/beerjson/pull/200)), and "transffered" in
  `recipe.json` ([#204](https://github.com/beerjson/beerjson/issues/204)).
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
