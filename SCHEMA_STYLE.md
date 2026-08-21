# BeerJSON schema conventions

Rules for authoring the JSON Schema files under `json/`. They exist so the
format stays internally consistent, so the documentation and type generators can
process every schema, and so reviewers have something concrete to check against.

Most rules are enforced by `tests/schema-conventions.test.js`. Where the current
schemas break a rule, that test carries an explicit list of grandfathered
exceptions. The list may shrink, never grow: a new violation fails CI, and
fixing an old one means deleting its entry.

## File structure

Every file in `json/` declares its draft and its identity:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://raw.githubusercontent.com/beerjson/beerjson/main/json/hop.json",
  "type": "object",
  "additionalProperties": false,
  "$defs": {}
}
```

- The whole format is on **JSON Schema 2020-12**. Do not mix drafts across
  files: cross-file `$ref` resolution depends on them agreeing. See
  [ADR-0002](adr/0002-json-schema-2020-12.md).
- The `$id` path must match the filename.
- Reusable types go under `$defs`. Only `beer.json` declares `properties` at the
  root: it is the document entry point.

## Naming

**Property keys** are `snake_case`, matching `^[a-z][a-z0-9_]*$`. This is the
convention consumers feel most directly: every key appears verbatim in every
BeerJSON document and in every generated type.

**Type names** are `PascalCase`, suffixed `Type` for a concrete type or `Base`
for a type meant to be composed into others with `allOf`.

Grandfathered exceptions: the type names `CultureInformation`,
`VarietyInformation`, `StyleCategories`, `Zymocide`, and the property keys
`URLS`, `beer_pH`, `TimingType.pH`, `WaterType.pH`.

## Descriptions

Every property carries a `description`. It is the only documentation a consumer
gets: `docs/` is generated from these strings, and they are what implementers
read when deciding what to write into a field.

A description says what the value means and, where it is not obvious, what it is
measured relative to. Compare:

```json
"time": { "description": "What time during a process step is added." }
```

with a description that answers the question an implementer actually has:

```json
"time": {
  "description": "Time of the addition, measured from the start of the step for fermentation additions and from the end of the step for boil additions."
}
```

Around 120 properties still lack a description. The test records a per-file
budget that can only go down.

## Measurements

A physical quantity uses a measurement type from `measureable_units.json`, never
a bare number. A measurement type pairs a value with its unit, so a document
carries its own units and no consumer has to guess:

```json
"alpha_acid": { "$ref": "measureable_units.json#/$defs/PercentType" }
```

A bare `"type": "number"` is correct only for a dimensionless quantity: a count,
an index, a rating, or the `value` field inside a measurement type itself.

The set of bare-number properties is frozen by the test. Adding one means adding
it to that list, which is the point: it forces the question "what unit is this
in?" to be answered in review rather than after release.

If a quantity needs a unit that does not exist yet, add the unit type to
`measureable_units.json` rather than embedding the unit in the property name.

## Objects and composition

Declare `"additionalProperties": false` on every standalone object type, so a
misspelled key is a validation error rather than silently discarded data.

For a type built with `allOf`, use `"unevaluatedProperties": false` **on the
outermost composed type only**, never on the base. `additionalProperties` only
sees properties declared in the same schema object, so placed next to an `allOf`
it rejects everything the other branch contributes. `unevaluatedProperties`
sees the whole composition:

```json
"CultureAdditionType": {
  "type": "object",
  "unevaluatedProperties": false,
  "allOf": [
    { "$ref": "#/$defs/CultureBase" },
    { "properties": { "amount": {} } }
  ]
}
```

Putting either keyword on `CultureBase` would reject every property
`CultureAdditionType` adds.

Nine of the thirteen composed types carry it. The four that do not
(`HopAdditionType`, `WaterAdditionType`, `StyleType`, `RecipeStyleType`) are
blocked on open format questions: their own examples under `tests/` use
properties the types do not declare. Closing one is therefore a change that
comes with resolving that question and fixing its examples. The conventions test
tracks the four, so a newly added composed type cannot join them.

## Arrays

Always declare `items`, and prefer a `$ref` to a named type over an inline
definition, so the type is nameable in the generated docs and types:

```json
"hop_additions": {
  "type": "array",
  "items": { "$ref": "hop.json#/$defs/HopAdditionType" }
}
```

An inline primitive is acceptable where a named type would add nothing
(`items: { "type": "string" }`). The generators handle both.

## Enums

New enum values are lowercase words separated by single spaces: `"all grain"`,
`"body wrap around"`, `"very high"`.

The exception is unit symbols and named methods, which keep their canonical
typography because that is how they are written everywhere else: `"kPa"`,
`"SRM"`, `"pH"`, `"mPa-s"`, `"Cal/(g C)"`, `"Lintner"`, `"Tinseth"`.

The format also contains `Title Case` equipment forms (`"Mash Tun"`, `"Brew Kettle"`), `snake_case` use values (`"add_to_boil"`), and one hyphenated value
(`"mixed-culture"`). These are grandfathered and are not the pattern to follow.

Removing or renaming an enum value is a breaking change.

## Required properties

Keep `required` minimal: a property belongs there only when a document is
meaningless without it. Adding an entry invalidates existing documents, so it is
much harder to add later than to get right the first time.

## Deprecating instead of renaming

2020-12 provides `deprecated`, so a misnamed property can be corrected without
breaking existing files. Add the correct spelling, keep the old one, and mark it:

```json
"fluoride": { "$ref": "measureable_units.json#/$defs/ConcentrationType" },
"flouride": {
  "deprecated": true,
  "description": "Deprecated misspelling of fluoride. Use fluoride.",
  "$ref": "measureable_units.json#/$defs/ConcentrationType"
}
```

Both spellings validate, so writers can migrate on their own schedule and
readers accept either. Announce the deprecation in `CHANGELOG.md`, and keep the
old form for at least one release before removing it.

## Referencing

Every `$ref` must resolve, and every definition must be referenced from
somewhere. Cross-file refs are relative to the file:
`measureable_units.json#/$defs/MassType`. Within a file, use `#/$defs/TypeName`.

An unreferenced definition is either dead weight or a type that was meant to be
wired up and was not, so the test rejects both.

## Checklist for a schema pull request

- [ ] Property keys are `snake_case`; type names are `PascalCase` + `Type`/`Base`
- [ ] Every new property has a `description` that says what the value means
- [ ] Physical quantities use a type from `measureable_units.json`
- [ ] Standalone objects declare `additionalProperties: false`; `allOf`
      compositions use `unevaluatedProperties: false` on the outermost type only
- [ ] Arrays declare `items`
- [ ] New `required` entries are justified, and flagged as breaking
- [ ] A rename keeps the old spelling marked `deprecated` for one release
- [ ] `npm run gen-docs` has been run and its output committed
- [ ] A test document under `tests/` exercises the new property
- [ ] `CHANGELOG.md` has an entry under `## [Unreleased]`
