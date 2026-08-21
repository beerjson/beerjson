# Architecture Decision Records

Decisions about the BeerJSON format that constrain future changes, with the
reasoning that led to them.

BeerJSON is an interchange format implemented by software the working group does
not control, so the cost of a decision is mostly paid by other people, later.
An ADR records what was decided, what it was weighed against, and what it makes
harder, so the question does not have to be re-argued from scratch every few
years.

## When to write one

- The decision constrains future changes to the format
- A reasonable alternative was considered and rejected
- The question is likely to be asked again
- The answer is not obvious from the schema itself

Not every schema change needs an ADR. A new optional property does not. A
decision about how properties are named, how versions are numbered, or how
breaking changes are released does.

## How

Copy [TEMPLATE.md](TEMPLATE.md), take the next number in sequence, and open it
as part of the pull request that implements the decision. An ADR is immutable
once accepted: if the decision changes, write a new one that supersedes it and
mark the old one `Superseded by ADR-NNNN`.

## Index

| ADR                                             | Title                                               | Status   |
| ----------------------------------------------- | --------------------------------------------------- | -------- |
| [0001](0001-record-format-decisions-as-adrs.md) | Record format decisions as ADRs                     | Accepted |
| [0002](0002-json-schema-2020-12.md)             | JSON Schema 2020-12 and `$defs`                     | Accepted |
| [0003](0003-deprecate-rather-than-rename.md)    | Correct property names by deprecating, not renaming | Accepted |
