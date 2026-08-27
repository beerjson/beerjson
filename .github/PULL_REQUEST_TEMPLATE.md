## Summary

What this pull request does.

## Related issues

Fixes #

## Type of change

- [ ] Schema change, additive (new optional property, new enum value, new type)
- [ ] Schema change, breaking (rename, removal, type change, new `required` entry)
- [ ] Description or documentation only
- [ ] Tooling (generators, validator, BeerXML importer, CI)
- [ ] Test corpus
- [ ] Dependency update

## Compatibility

For a schema change, answer both:

- Does a document valid against the current release stay valid? If not, what
  breaks?
- Does existing software that reads BeerJSON keep working? If not, what breaks?

## Schema checklist

Skip this section for changes that do not touch `json/`. See
[SCHEMA_STYLE.md](../SCHEMA_STYLE.md).

- [ ] Property keys are `snake_case`; type names are `PascalCase` + `Type`/`Base`
- [ ] Every new property has a `description` saying what the value means
- [ ] Physical quantities use a measurement type from `measureable_units.json`
- [ ] `npm run gen-docs` has been run and its output committed
- [ ] A document under `tests/` exercises the new or changed property

## Checklist

- [ ] `npm test` passes locally
- [ ] `CHANGELOG.md` has an entry under `## [Unreleased]`
- [ ] I have performed a self-review of my own changes
- [ ] Generated files (`docs/`, `types/`) were regenerated, not hand-edited

## Additional notes

Anything reviewers should know: open questions, decisions you were unsure about,
follow-up work you deliberately left out.
