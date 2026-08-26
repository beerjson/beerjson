The schema defines the following types:

## StyleBase 

The descriptive base type for both style guideline records, and recipe style provisions. Provides unique properties to identify individual styles

**StyleBase** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **name** | ✅ | string| Name of the style. |
| **category** | ✅ | string| Name of the category the style belongs to in its style guide. |
| **category_number** |  | integer| Number of the category the style belongs to in its style guide. |
| **style_letter** |  | RegExp pattern: `[A-Z ]`| The letter identifying the style within its category, as BJCP guidelines use. |
| **style_guide** | ✅ | string| The style guide the style is defined by, such as BJCP 2021 or Brewers Association 2017. |
| **type** | ✅ | [StyleCategories](#stylecategories)|  |

## StyleType 

StyleType provide information for Style categorization

**StyleType** is an object with all properties from [StyleBase](#stylebase) and these additional properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **original_gravity** |  | [GravityRangeType](measureable_units.json.md#gravityrangetype)|  |
| **final_gravity** |  | [GravityRangeType](measureable_units.json.md#gravityrangetype)|  |
| **international_bitterness_units** |  | [BitternessRangeType](measureable_units.json.md#bitternessrangetype)|  |
| **color** |  | [ColorRangeType](measureable_units.json.md#colorrangetype)|  |
| **carbonation** |  | [CarbonationRangeType](measureable_units.json.md#carbonationrangetype)|  |
| **alcohol_by_volume** |  | [PercentRangeType](measureable_units.json.md#percentrangetype)|  |
| **notes** |  | string| Free text notes about the style. |
| **aroma** |  | string| The aroma a beer in this style should present. |
| **appearance** |  | string| The appearance a beer in this style should present. |
| **flavor** |  | string| The flavour a beer in this style should present. |
| **mouthfeel** |  | string| The mouthfeel a beer in this style should present. |
| **overall_impression** |  | string| A summary of the overall character of the style. |
| **ingredients** |  | string| The ingredients characteristic of the style. |
| **examples** |  | string| Commercial examples of the style. |

## RecipeStyleType 

RecipeStyleType defines style information stored in a recipe record

**RecipeStyleType** is an object with all properties from [StyleBase](#stylebase)


## StyleCategories 

The kind of beverage a style describes.

`"beer"`<br/>`"cider"`<br/>`"kombucha"`<br/>`"mead"`<br/>`"other"`<br/>`"soda"`<br/>`"wine"`
