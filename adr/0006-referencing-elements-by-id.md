# ADR-0006: Referencing recipe elements by identifier

**Status:** Proposed
**Date:** 2026-08-31

Not accepted. Recorded so the reasoning survives, and waiting on implementation
experience. See "What would have to be true to accept this" below.

## Context

Proposed by the author of Brewtarget's BeerJSON support during review of #245,
while designing Brewtarget's own internal file format.

Today a recipe embeds a cut-down copy of each ingredient it uses: a
`HopAdditionType` is a `HopVarietyBase` plus an amount and a timing, so a hop
used in four additions has its name, producer, origin, form and alpha acid
repeated four times. [ADR-0005](0005-ingredient-base-record-and-addition.md)
documents why that split exists and recommends emitting the full catalogue
records alongside, but it does not remove the duplication.

The proposal: every element a recipe references (hop, fermentable, culture,
water, miscellaneous, style, boil, mash, fermentation) appears once in the
document's root lists, and the recipe points at it, either by position or by an
identifier such as `FERM7`. Identifiers preferred, as simpler to implement and
easier to read than "item 4 in the list".

Two observations support it:

- **The format is already inconsistent.** Procedures do not follow the
  ingredient pattern at all. `RecipeType.mash` is a full `MashProcedureType`,
  not a base and not a reference, and the same holds for `fermentation`,
  `packaging` and `boil`. So a recipe embeds its entire mash schedule while
  carrying a cut-down hop, and the root's `mashes`, `fermentations`, `boil` and
  `packaging` lists cannot be pointed at by any recipe. A uniform reference
  model would resolve this.
- **Part of the mechanism exists.** All four ingredient base types already carry
  `producer` and `product_id`.

## The proposal, and why it is not accepted yet

The decisive consideration is that BeerJSON is an interchange format with
independent implementations, and that inverts the usual normalisation calculus.

For a format with a single owner, normalising is nearly free: you control every
reader and writer, and duplication is pure cost. For an interchange format the
duplication buys portability. A recipe today means the same thing to a reader
that has never seen the writer's database, because `yield`, `color` and
`alpha_acid` travel with the addition. Someone can extract a single recipe from a
document, or paste one into a forum post, and the receiving software can still
compute original gravity, bitterness and colour. Under an identifier model an
extracted recipe is not merely incomplete, it is meaningless: `FERM7` denotes
nothing outside its document.

Three further costs:

1. **Referential integrity is not expressible in JSON Schema**, at any draft.
   "`FERM7` must exist in the fermentables list" cannot be validated, so a
   dangling reference becomes an error class no validator catches and every
   implementation must check for itself. Today a malformed addition simply fails
   validation.
2. **Document-local identifiers break composition.** The `recipes` lists of two
   BeerJSON documents can be concatenated today and the result is valid. With
   local identifiers they must be rewritten on merge, or collide.
3. **Every existing document stops conforming, and every importer and exporter
   needs rewriting.** For a format whose value rests on independent tools
   agreeing, this is the most expensive category of change available, and it
   would leave two dialects in circulation for years.

The third is decisive in the project's current position: adoption has been the
open problem since #104 was filed in 2019, the npm package sees fewer than 200
installs a month, and the first release in five years has not yet shipped. A
breaking structural change now gives every implementer a reason to stay where
they are.

## Alternatives considered

**Document `producer` plus `product_id` as the link.** Available immediately, and
recommended in preference to doing nothing. All four base types already carry
both fields, so an addition can identify its catalogue record unambiguously; the
pair is stable across documents rather than only within one; no schema change is
required; no integrity checking is required; and additions stay self-sufficient.
It does not remove the duplication, which is the proposal's main goal, but it
addresses the ambiguity that matters in practice. Linking is currently done by
name matching, which fails as soon as two producers both sell a "Cascade".

**Positional references** ("the fourth hop in the list"). Rejected outright,
independently of the rest. BeerJSON files are hand-edited, and inserting an
element would silently repoint every reference in the document.

**Normalise procedures only**, leaving ingredients embedded, on the grounds that
mash and fermentation schedules are the largest duplicated structures. Not
explored in detail. It would reduce the breaking surface but keep the format
inconsistent in a new way, and the portability objection applies to a recipe
that cannot describe its own mash.

## What would have to be true to accept this

- Implementation experience from a real codebase, showing that the model is
  better in practice and not only tidier on paper. Brewtarget's internal file
  format is the intended proving ground.
- Agreement from the applications that implement BeerJSON, not only from the
  working group. This is a 2.0 change, and its cost falls almost entirely on
  implementers.
- A resolution for referential integrity: which component is responsible for
  checking references, and what a reader should do with a dangling one.
- A migration story: whether 1.x documents remain readable, and whether a
  converter between the two shapes is practical.

## Consequences if accepted

- **Easier:** no duplication; ingredients and procedures treated uniformly; a
  document becomes a coherent whole rather than a set of partially overlapping
  copies.
- **Harder:** a recipe can no longer be understood in isolation; referential
  integrity becomes every implementation's problem; merging documents requires
  rewriting identifiers.
- **Breaking:** every existing document and every existing implementation. This
  is a major version, and the practical question is not whether it is cleaner but
  whether the ecosystem will follow.
