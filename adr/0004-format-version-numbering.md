# ADR-0004: Format version numbering

**Status:** Accepted
**Date:** 2026-08-21

## Context

Every BeerJSON document is required to carry `beerjson.version`, and nothing in
the repository says what to put there.

`VersionType` is declared as a bare `number` with no constraint, so any value
validates. The repository does not agree with itself about which value is right:

- 22 documents under `tests/` declare `2.01`
- 24 declare `2.06`
- The bundled BeerXML importer hardcodes `2.06` into everything it converts
- The README describes the contents as "the BeerJSON 1.0 specification"
- The npm package and the git tags say `1.0.x`

The `2.0x` values are inherited from BeerXML 2, the unfinished draft BeerJSON was
derived from, and were never revisited when #176 declared BeerJSON 1.0. The
result is that a consumer cannot use the field for the one thing it exists for,
which is deciding whether it understands the document in front of it, and an
implementer writing a file has no way to find out what to emit.

There is a second, quieter problem. Because the value is a JSON number, `1.10`
and `1.1` are the same value, so a numbering scheme that ever reaches a
two-digit minor version silently collides. `1.0` is also indistinguishable from
`1`, since JSON has no decimal type.

## Decision

**`beerjson.version` is the version of the format, not of the npm package.** A
package release that changes no schema does not move it. Dependency bumps and
tooling fixes never move it.

**It has exactly two components, `MAJOR.MINOR`.** Never `MAJOR.MINOR.PATCH`: a
JSON number cannot carry three components, and a format has no meaningful patch
level, since a change to what documents may contain is at least a minor.

- **MAJOR** increments when a document valid against the previous version stops
  being valid: a property removed, a property's type changed, a new `required`
  entry, an enum value withdrawn.
- **MINOR** increments when the format gains something without invalidating
  anything: a new optional property, a new enum value, a new type, a corrected
  description. Closing a type to unknown keys is a minor, because the keys it
  starts rejecting were never valid.

**Minor versions stay single-digit while the field is a number.** On reaching
`x.9`, the next release is a major, or the field moves to a string in a major.

**`VersionType` enumerates the versions the schema can validate**, rather than
accepting any number. The development-snapshot values are kept in a branch
marked `deprecated`, following [ADR-0003](0003-deprecate-rather-than-rename.md):

```json
"VersionType": {
  "description": "The version of the BeerJSON format this document is written against, as MAJOR.MINOR. Note that JSON has no decimal type, so 1.0 is written as the number 1.",
  "oneOf": [
    { "type": "number", "enum": [1.0, 1.1] },
    {
      "deprecated": true,
      "description": "Development-snapshot versions inherited from the unfinished BeerXML 2 draft. Accepted so existing documents stay valid; write 1.1 instead.",
      "type": "number",
      "enum": [2.01, 2.06]
    }
  ]
}
```

Keeping `2.01` and `2.06` valid is not politeness. They are what the published
examples showed for five years, so implementations copied them: every example
document in Werb, an independent consumer, declares `2.06` because it was
copied from this repository's own fixtures. Rejecting the value outright would
invalidate real files for a cosmetic gain, and would make this release a major
for no benefit to anyone.

A schema accepts its own version and every earlier one it is compatible with, so
a 1.1 reader accepts a 1.0 document. A document declaring a version in neither
branch fails with an error that names the version, rather than failing obscurely
somewhere deeper or, as today, passing while being misunderstood.

The current format version is therefore **1.1**, and the enum is the single
source of truth for it: `js/format-version.js` derives the current and supported
versions from the schema, the importer emits the current one, and a test asserts
every document under `tests/` declares a supported version.

## Alternatives considered

**Keep `2.06` and continue the BeerXML 2 numbering.** It is what most of the
test corpus and the importer already do, so it is the cheapest option and has
some claim to being the original intent. Rejected because the project published
itself as 1.0 in #176, tagged 1.0.x, and describes itself as 1.0 in the README
and the documentation title. Declaring `2.06` in documents while calling the
format 1.0 everywhere else would preserve exactly the confusion this ADR exists
to end. It would also imply a relationship to a BeerXML 2 draft that was never
finished and that BeerJSON has long since diverged from.

**Leave `VersionType` unconstrained and document the expected value.** Least
disruptive. Rejected because the field's only purpose is machine consumption; a
constraint no validator enforces is a comment, and the present state is the
evidence for that, with the repository's own documents disagreeing for five
years without anything noticing.

**Make the version a string** (`"1.1"`), which removes the two-digit-minor
collision and allows a patch component and prerelease tags. This is the right
long-term answer. Rejected for now because `version` is required on every
document, so changing its type invalidates every BeerJSON file in existence,
which is the most expensive possible break for the least urgent problem. It is
recorded here as the thing to do in the next major.

**Tie the format version to the package version.** Superficially simpler, one
number to think about. Rejected because they answer different questions: a
consumer reading a file needs to know which spec it follows, while a package
version has to move for a dependency bump or a tooling fix that leaves the format
untouched. Conflating them would either force pointless format version bumps or
freeze the package version.

## Consequences

- **Easier:** a consumer can decide from the version field alone whether it
  understands a document; an implementer has a documented answer for what to
  write; an unsupported version fails with a clear error.
- **Harder:** every release with schema changes must extend the `VersionType`
  enum, which is a deliberate step that is easy to forget. The test asserting the
  test corpus declares a supported version is what catches it.
- **Breaking:** nothing. Documents declaring `2.01` or `2.06` keep validating,
  and every other value that used to pass was passing only because the field was
  unconstrained. Software emitting `2.06` should move to `1.1`, but on its own
  schedule; the deprecated branch will be removed in a future major with the
  usual notice.
