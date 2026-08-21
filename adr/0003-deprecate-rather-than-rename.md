# ADR-0003: Correct property names by deprecating, not renaming

**Status:** Accepted
**Date:** 2026-08-21

## Context

Several property names in the format are wrong or inconsistent, and each has sat
unfixed for years because there was no way to fix one without invalidating every
existing document:

- `WaterBase.flouride` is a misspelling of fluoride (#214, open since 2024).
- The format is split between `pH` and `ph`: 3 properties use `pH`
  (`TimingType.pH`, `WaterType.pH`, `RecipeType.beer_pH`) and 8 use `ph`
  (`start_ph` and `end_ph` on boil, fermentation, mash and packaging steps, plus
  `FermentableType.di_ph`) (#208, open since 2023).
- `FermentableBase.group` was renamed to `grain_group` in #219 as a hard break,
  because that was the only option available.

On #214 the reason for inaction was stated plainly: a typo in a published schema
means "we have to keep supporting the incorrect version, and a correct one". The
options were to break everyone or to live with the mistake permanently, and
neither is acceptable for an interchange format that other people's files are
already written in.

[ADR-0002](0002-json-schema-2020-12.md) moved the schemas to 2020-12, which
provides the `deprecated` annotation. There is now a third option.

## Decision

A misnamed property is corrected by **adding** the correct name and **keeping**
the old one marked `deprecated: true`, with a description that names the
replacement. Both spellings validate.

```json
"fluoride": {
  "description": "The concentration of fluoride in the water.",
  "$ref": "measureable_units.json#/$defs/ConcentrationType"
},
"flouride": {
  "deprecated": true,
  "description": "Misspelling of fluoride, kept so existing documents stay valid. Write fluoride instead; readers should accept either and prefer fluoride when both are present.",
  "$ref": "measureable_units.json#/$defs/ConcentrationType"
}
```

The contract for implementers:

- **Writers** should emit the correct name only. The deprecated name is for
  reading old files, not for writing new ones.
- **Readers** must accept both, and prefer the correct name when a document
  carries both.
- A deprecated name survives **at least one release** before removal, and its
  removal is a breaking change announced in the changelog like any other.

The deprecation must be visible where implementers actually look, so the
generators surface it: the markdown reference marks the property, and the
TypeScript and Flow declarations emit `@deprecated` so an editor strikes it
through at the point of use. A deprecation that only exists inside the schema
file is not much better than a comment.

Every deprecation carries a test asserting that both spellings validate, so
dropping the old one is a deliberate act with a failing test attached rather
than a silent break.

## Alternatives considered

**Hard rename, batched into a major release.** Simpler schemas, and one
migration for implementers instead of a long tail. Rejected because the tail is
the point: BeerJSON files are archived and emailed, and a reader that cannot
open a five-year-old recipe has failed at the one job an interchange format has.
A major release also does not help software that never updates, which for hobby
brewing applications is a large share of them.

**Keep the misspellings forever and document them.** Zero migration cost, and
the status quo. Rejected because the format accumulates the mistakes
permanently, every implementer has to learn each one, and the generated types
teach the wrong name to anyone using autocomplete.

**`oneOf` on the parent object to accept either spelling but not both.**
Enforces the exclusivity that the "prefer the correct name" rule handles
socially. Rejected as disproportionate: it makes the schema significantly harder
to read for a case that is harmless when it happens, and the error message a
validator produces for a failed `oneOf` is famously unhelpful.

## Consequences

- **Easier:** #214 shipped. #208 has a path that does not break anyone. Future
  naming mistakes stop being permanent.
- **Harder:** the schemas carry both spellings for a while, so readers have two
  code paths per deprecation, and there needs to be the discipline to actually
  remove old names rather than accumulating them. The changelog and the
  deprecation tests are what make removal trackable.
- **Breaking:** nothing on adoption. Each eventual removal is breaking, and gets
  its own changelog entry and upgrade note.
