The schema defines the following types:

## StyleBase 

The descriptive base type for both style guideline records, and recipe style provisions. Provides unique properties to identify individual styles

**StyleBase** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **name** | ✅ | string| Name of the style. |
| **category** | ✅ | string| Name of the category the style belongs to in its style guide. |
| **category_id** |  | string| Identifier of the category the style belongs to in its style guide. This is a string because not every identifier is a number: BJCP uses 3 for Czech Lager, but M1 to M4 for meads and C1 and C2 for ciders. |
| **category_number** |  | integer| ⚠️ **Deprecated.** Number of the category the style belongs to in its style guide, which cannot represent an identifier such as M1. Kept so existing documents stay valid. Write category_id instead; readers should accept either and prefer category_id when both are present. |
| **style_letter** |  | RegExp pattern: `^([A-Z]\|[0-9]{1,2})$`| The upper case letter, or one or two digit number, identifying the style within its category, such as the B of BJCP style 3B. Omit it if the style has none. |
| **style_guide** | ✅ | string| The style guide the style is defined by, such as BJCP 2021 or Brewers Association 2017. |
| **type** | ✅ | [StyleCategories](#stylecategories)| The kind of beverage the style describes. |

## StyleType 

StyleType provide information for Style categorization

**StyleType** is an object with all properties from [StyleBase](#stylebase) and these additional properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **original_gravity** |  | [GravityRangeType](measureable_units.json.md#gravityrangetype)| The range of original gravity for the style. |
| **final_gravity** |  | [GravityRangeType](measureable_units.json.md#gravityrangetype)| The range of final gravity for the style. |
| **international_bitterness_units** |  | [BitternessRangeType](measureable_units.json.md#bitternessrangetype)| The range of bitterness for the style. |
| **color** |  | [ColorRangeType](measureable_units.json.md#colorrangetype)| The range of colour for the style. |
| **carbonation** |  | [CarbonationRangeType](measureable_units.json.md#carbonationrangetype)| The range of carbonation for the style. |
| **alcohol_by_volume** |  | [PercentRangeType](measureable_units.json.md#percentrangetype)| The range of alcohol content by volume for the style. |
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
