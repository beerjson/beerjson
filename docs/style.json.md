The schema defines the following types:

## StyleBase
  
The descriptive base type for both beer style guideline records and recipe style provisions. Provides unique properties to identify individual beer styles
`StyleBase` type: `object`

### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
| **name** | string|  | :white_check_mark: |
| **category** | string|  | :white_check_mark: |
| **category_number** | integer|  | :white_check_mark: |
| **style_letter** | string|  | :white_check_mark: |
| **style_guide** | string|  | :white_check_mark: |
| **type** | [StyleCategories](#stylecategories)|  | :white_check_mark: |

## StyleType
  
StyleType provide information for BJCP Style categorization
`StyleType` type: `object`


## RecipeStyleType
  
RecipeStyleType defines style information stored in a recipe record
`RecipeStyleType` type: `undefined`


## StyleCategories
  
*no description yet*
`StyleCategories` type: `string`


