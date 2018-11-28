The schema defines the following types:

## StyleBase 

The descriptive base type for both style guideline records, and recipe style provisions. Provides unique properties to identify individual styles

**StyleBase** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **name** | ✅ | string|  |
| **category** | ✅ | string|  |
| **category_number** |  | integer|  |
| **style_letter** |  | RegExp pattern: `[A-Z ]`|  |
| **style_guide** | ✅ | string|  |
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
| **notes** |  | string|  |
| **aroma** |  | string|  |
| **appearance** |  | string|  |
| **flavor** |  | string|  |
| **mouthfeel** |  | string|  |
| **overall_impression** |  | string|  |
| **ingredients** |  | string|  |
| **examples** |  | string|  |

## RecipeStyleType 

RecipeStyleType defines style information stored in a recipe record

**RecipeStyleType** is an object with all properties from [StyleBase](#stylebase)


## StyleCategories 

*no description yet*

`"beer"`<br/>`"cider"`<br/>`"kombucha"`<br/>`"mead"`<br/>`"other"`<br/>`"soda"`<br/>`"wine"`
