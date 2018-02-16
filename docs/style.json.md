The schema defines the following types:

# StyleBase
The descriptive base type for both beer style guideline records and recipe style provisions. Provides unique properties to identify individual beer styles
  
`StyleBase` type: `object`
|   |Type|Description|Required|
|---|----|-----------|--------|
|**name**|string|| |
|**category**|string|| |
|**category_number**|integer|| |
|**style_letter**|string|| |
|**style_guide**|string|| |
|**type**|undefined|| |
# StyleType
StyleType provide information for BJCP Style categorization
  
`StyleType` type: `object`
# RecipeStyleType
RecipeStyleType defines style information stored in a recipe record
  
`RecipeStyleType` type: `undefined`
# StyleCategories
*no description yet*
  
`StyleCategories` type: `string`
