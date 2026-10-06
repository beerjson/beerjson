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

There is a second, quieter problem. Because the value is a JSON number, `3.10`
and `3.1` are the same value, so a numbering scheme that ever reaches a
two-digit minor version silently collides. `3.0` is also indistinguishable from
`3`, since JSON has no decimal type.

## Decision

**`beerjson.version` is the version of the format, not of the npm package.** A
package release that changes no schema does not move it. Dependency bumps and
tooling fixes never move it.

The two are nonetheless kept aligned where they can be: the package's
`MAJOR.MINOR` mirrors the format version, and its `PATCH` carries
package-only changes such as dependency bumps. So `@beerjson/beerjson@3.0.x`
implements format 3.0, which is the question five years of two competing numbers
made hard to answer. If the package ever needs a breaking change the format does
not have, the format takes a minor bump alongside it rather than the two
desyncing.

**It has exactly two components, `MAJOR.MINOR`.** Never `MAJOR.MINOR.PATCH`: a
JSON number cannot carry three components, and a format has no meaningful patch
level, since a change to what documents may contain is at least a minor.

- **MAJOR** increments when a document valid against the previous version stops
  being valid (a property removed, a property's type changed, a new `required`
  entry, an enum value withdrawn), or when reading the schema demands work of
  implementers that a schema edit would not, such as changing JSON Schema draft.
- **MINOR** increments when the format gains something without invalidating
  anything: a new optional property, a new enum value, a new type. Closing a
  type to unknown keys is a minor, because the keys it starts rejecting were
  never valid.
- **Neither** increments for a change that leaves every document's validity
  untouched, such as correcting a description. That ships as a patch release of
  the package with the format version unchanged.

**`VersionType` enumerates the versions the schema can validate**, rather than
accepting any number:

```json
"VersionType": {
  "description": "The version of the BeerJSON format this document is written against, as MAJOR.MINOR. A schema accepts its own version and the earlier ones it can still validate. Note that JSON has no decimal type, so 3.0 is written as the number 3.",
  "type": "number",
  "enum": [2.01, 2.06, 3.0]
}
```

**The current format version is 3.0.** The published examples carried `2.01` and
then `2.06` for years, and implementations copied them: a GitHub code search
finds 31 documents declaring `2.06`, including samples in `beerproto/beerjson.go`
and test data in `brewcomputer/brewcalc`. Those are not development snapshots to
be deprecated, they are the versions the format shipped as, and they stay valid.

A version number exists to be compared, so whatever comes next has to sort and
read as newer than `2.06`. That rules out continuing from the "1.0" the README
used, and it rules out `2.1`, which sorts correctly as a number (`2.1` is `2.10`)
but reads as older to anyone seeing minor 1 against minor 6, and which would
permanently foreclose `2.10`.

Going to a major rather than `2.07` reflects the cost to implementers. Moving to
2020-12 is not a schema edit they can absorb: Brewtarget and Brewken had to
replace their validation library, from Valijson to Blaze, to support the draft at
all. No document breaks, but implementations do, and that is what a major
communicates. It also leaves the two-decimal `2.0x` counter behind, so `3.1` and
`3.2` can be ordinary single-digit minors.

**Minor versions stay single-digit from 3.0 onwards.** On reaching `3.9`, the
next release is a major, or the field moves to a string in a major. The `2.0x`
values keep the two-decimal form they were published with.

### What a version bump promises

An interchange format has two directions of compatibility, and they are not
equivalent:

|                      | New software, old document | Old software, new document |
| -------------------- | -------------------------- | -------------------------- |
| Patch (package only) | valid                      | valid                      |
| MINOR                | valid                      | **may be rejected**        |
| MAJOR                | may be rejected            | may be rejected            |

**A MINOR bump promises only that new software reads old documents.** It does
not promise the reverse. Semantic Versioning's "backward compatible manner" is
written for an API consumer, where adding something is safe; for a data format,
a document written against a newer version can fail against an older schema.
Three ways it fails, in increasing severity:

- **A new optional property is ignored** where the type it sits on is open to
  unknown keys. The document validates and the value is discarded.
- **A property added alongside a deprecated one loses data silently.** A reader
  that knows only `flouride` discards a document's `fluoride` and reports
  nothing.
- **A new enum value is rejected outright.** An enum is closed in every version,
  so a document using `wheat` as a culture type fails against an earlier schema
  rather than degrading.

From 3.0 onwards most composed types declare `unevaluatedProperties: false`, so
the first case increasingly behaves like the third: an older validator rejects a
newer document rather than ignoring the addition.

None of this argues for calling such changes MAJOR, which would make every
addition a breaking release. It argues for saying so plainly: a reader should
accept an unknown format version it can parse, and treat unrecognised properties
and enum values as data it does not understand rather than as grounds for
rejecting the document.

## Alternatives considered

**Continue from 1.0**, which the README, the tags and the npm package all use.
Rejected because `1.1` sorts below the `2.06` already in circulation, so an
implementer comparing two documents gets the order backwards, and would need
special-case logic instead of a numeric comparison.

**`2.1`.** Sorts correctly, since `2.1` is `2.10` and `2.06` is `2.06`.
Rejected because it reads as older than `2.06` to a human comparing minor 1 with
minor 6, and because it would foreclose `2.10` forever, that being the same
number.

**`2.07`**, continuing the two-decimal sequence exactly. Sorts and reads
correctly and leaves room to `2.99`. Rejected as understating the cost to
implementers of the 2020-12 migration, and because it keeps the two-decimal
counter that made this question hard in the first place.

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
- **Breaking:** no document. Documents declaring `2.01` or `2.06` keep
  validating; every other value that passed before did so only because the field
  was unconstrained. Implementations do break, in that reading a 3.0 schema needs
  a validator supporting JSON Schema 2020-12, which is what the major signals.
