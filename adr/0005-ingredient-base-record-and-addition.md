# ADR-0005: How an ingredient is split between identity, catalogue record, and addition

**Status:** Accepted
**Date:** 2026-08-31

## Context

Every ingredient family in the format is expressed as three types built from one
another with `allOf`:

| Family        | Base                | Catalogue record     | Addition                    |
| ------------- | ------------------- | -------------------- | --------------------------- |
| Fermentable   | `FermentableBase`   | `FermentableType`    | `FermentableAdditionType`   |
| Hop           | `HopVarietyBase`    | `VarietyInformation` | `HopAdditionType`           |
| Miscellaneous | `MiscellaneousBase` | `MiscellaneousType`  | `MiscellaneousAdditionType` |
| Culture       | `CultureBase`       | `CultureInformation` | `CultureAdditionType`       |

Nothing recorded what the split was for. The descriptions said a Base "provides
unique properties to identify individual records" and the catalogue type
"collects the attributes to store as record information", which does not tell an
implementer which of the two to write, or why a recipe gets one and not the
other.

The consequence was visible in this repository's own examples: `generic/recipes.json`
put `type`, `notes`, `substitutes`, `inventory` and `oil_content` directly on hop
additions, which are exactly the properties `VarietyInformation` adds. Because
draft-07 could not close an `allOf` type to unknown keys, that went undetected
for years, and it was impossible to say whether the example was wrong or
`HopAdditionType` was too narrow.

Raised on #245 by the author of Brewtarget's BeerJSON support, who had to guess
the intent when implementing it and was uneasy that sending someone a recipe
hands them cut-down ingredients.

## Decision

The three-way split is deliberate, and it is:

- **Base** identifies the ingredient and carries the measurements a recipe must
  have to calculate with it. This is why `FermentableBase` requires `yield` and
  `color`, and `HopVarietyBase` requires `alpha_acid`: original gravity, colour
  and bitterness cannot be derived without them. `MiscellaneousBase` and
  `CultureBase` require no measurements because nothing is calculated from them.
- **The catalogue record** (`FermentableType`, `VarietyInformation`,
  `MiscellaneousType`, `CultureInformation`) is Base plus everything a supplier
  or lab publishes: a maltster's specification, a hop's oil content, a culture's
  temperature range and flocculation, stock on hand. This is the form used in
  the `fermentables`, `hop_varieties`, `miscellaneous_ingredients` and `cultures`
  lists at the document root.
- **The addition** is Base plus how much, when, and anything measured at the time
  of use. `CultureAdditionType` adds `attenuation`, `times_cultured` and
  `cell_count_billions` for this reason: they describe a particular pitch, not
  the strain.

Catalogue detail does not belong on an addition. The composed addition types are
closed with `unevaluatedProperties: false`, so writing it there is now a
validation error rather than silently discarded data.

**Recommendation for writers.** A recipe carrying only Base records is complete
enough to calculate from but lossy as a catalogue: a reader with an empty
ingredient database cannot recover a hop's oil content or a culture's
temperature range. A document root accepts ingredient lists alongside `recipes`,
so an exporter should emit the full catalogue record for every ingredient a
recipe references:

```json
{
  "beerjson": {
    "version": 1.1,
    "hop_varieties": [
      {
        "name": "Citra",
        "alpha_acid": { "unit": "%", "value": 10 },
        "oil_content": {}
      }
    ],
    "recipes": [
      {
        "ingredients": {
          "hop_additions": [{ "name": "Citra", "amount": {}, "timing": {} }]
        }
      }
    ]
  }
}
```

This is what Brewtarget already does. It needs no schema change, and
`tests/generic/recipes.json` now demonstrates it.

## Alternatives considered

**Let additions carry the full catalogue record.** Makes a recipe
self-describing with no extra convention, and matches what our own examples were
already doing. Rejected because it duplicates every ingredient detail at every
addition, so a recipe with the same hop in four additions repeats its oil content
four times, with no rule for what happens when the copies disagree. The
root-plus-reference pattern gets the same completeness without the ambiguity.

**Collapse Base and the catalogue record into one type.** Simplest possible
model: one type per ingredient, everything optional. Rejected because the
required measurements are the point: a `FermentableBase` without `yield` cannot
be used in a recipe, and making it optional moves that failure from validation
time to calculation time. It would also be a breaking change for every existing
document.

**Leave the intent undocumented and just fix the examples.** Cheapest. Rejected
because the question has already cost one implementer a guess and a workaround,
and a reviewer asked for it in writing. An undocumented split invites each
implementer to invent a different answer.

## Consequences

- **Easier:** an implementer can tell which type to write and why; a recipe
  exported with the recommendation is fully self-contained; `HopAdditionType`
  could be closed to unknown keys, which was blocked purely on this question.
- **Harder:** an exporter following the recommendation has to collect the
  ingredients a recipe references and emit them at the root. That is bookkeeping,
  not difficulty, and it is optional.
- **Breaking:** nothing in the schema. Documents that put catalogue detail on an
  addition were always invalid; they are now detected. Where the format cannot
  express something an addition needs, that is a gap to raise rather than a
  reason to write an undeclared key.
