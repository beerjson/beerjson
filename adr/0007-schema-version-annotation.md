# ADR-0007: Record the format version in each schema file

**Status:** Accepted
**Date:** 2026-11-18

## Context

A BeerJSON document says which format version it follows, but a schema file does
not (#282). Once a file has been copied into another project, nothing in it says
which release it came from. `VersionType` hints at it, but only in
`measureable_units.json`, and only by inference from the highest value in an
enum.

## Decision

Every file under `json/` carries a top-level `x-version` annotation holding the
format version as a `MAJOR.MINOR` string:

```json
"x-version": "3.0"
```

It is a string so that `3.0` keeps its minor component, which a JSON number
loses. It always equals the highest value in `VersionType`, and the conventions
test enforces that, so a release cannot move one without the other. On `main` it
names the version in development. It has no effect on validation.

## Alternatives considered

**Put the version in `$id`**, as dotBeer does. `$id` need not be a fetchable URL,
but BeerJSON's currently is one, pointing at the latest schema on `main`. A
versioned `$id` would also change every cross-file identifier at each release.

**A `$comment`.** Needs no validator configuration, but is not meant to be read
by programs.

## Consequences

- **Easier:** a schema file identifies its own version, wherever it ends up.
- **Harder:** validators running in a strict mode reject unknown keywords and
  must be told about this one, as `js/validation.js` does for ajv.
- **Breaking:** no document. A strict validator that is not reconfigured will
  refuse to compile the schemas.
