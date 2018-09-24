The schema defines the following types:

## StyleBase

The descriptive base type for both style guideline records, and recipe style provisions. Provides unique properties to identify individual styles

`StyleBase` type: `object`

### Properties

|                     | Type                                | Description | Required           |
| ------------------- | ----------------------------------- | ----------- | ------------------ |
| **name**            | string                              |             | :white_check_mark: |
| **category**        | string                              |             | :white_check_mark: |
| **category_number** | integer                             |             |                    |
| **style_letter**    | string                              |             |                    |
| **style_guide**     | string                              |             | :white_check_mark: |
| **type**            | [StyleCategories](#stylecategories) |             | :white_check_mark: |

## StyleType

StyleType provide information for Style categorization

`StyleType` type: `object`

Parent: [StyleBase](#stylebase)

### Properties

|                                    | Type                                                                     | Description | Required |
| ---------------------------------- | ------------------------------------------------------------------------ | ----------- | -------- |
| **original_gravity**               | [GravityRangeType](measureable_units.json.md#gravityrangetype)           |             |          |
| **final_gravity**                  | [GravityRangeType](measureable_units.json.md#gravityrangetype)           |             |          |
| **international_bitterness_units** | [QuantitativeRangeType](measureable_units.json.md#quantitativerangetype) |             |          |
| **color**                          | [ColorRangeType](measureable_units.json.md#colorrangetype)               |             |          |
| **carbonation**                    | [QuantitativeRangeType](measureable_units.json.md#quantitativerangetype) |             |          |
| **alcohol_by_volume**              | [PercentRangeType](measureable_units.json.md#percentrangetype)           |             |          |
| **notes**                          | string                                                                   |             |          |
| **aroma**                          | string                                                                   |             |          |
| **appearance**                     | string                                                                   |             |          |
| **flavor**                         | string                                                                   |             |          |
| **mouthfeel**                      | string                                                                   |             |          |
| **overall_impression**             | string                                                                   |             |          |
| **ingredients**                    | string                                                                   |             |          |
| **examples**                       | string                                                                   |             |          |

## RecipeStyleType

RecipeStyleType defines style information stored in a recipe record

`RecipeStyleType` type: `undefined`

Parent: [StyleBase](#stylebase)

## StyleCategories

_no description yet_

`StyleCategories` type: `string`
