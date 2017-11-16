The schema defines the following properties:

---

# Sub Schemas

The schema defines the following additional types:

## `StyleBase` (object)

The descriptive base type for both beer style guideline records and recipe style provisions. Provides unique properties to identify individual beer styles

Properties of the `StyleBase` object:

* [name](#name)
* [category](#category)
* [category_number](#category_number)
* [style_letter](#style_letter)
* [style_guide](#style_guide)
* [type](#type)

### name
 `name` (string, required)

### category
 `category` (string, required)

### category_number
 `category_number` (integer, required)

### style_letter
 `style_letter` (string, required)

Additional restrictions:

* Regex pattern: `[A-Z ]`

### style_guide
 `style_guide` (string, required)

### type
 `type` (StyleCategories, required)

## `StyleType` (object)

StyleType provide information for BJCP Style categorization

## `RecipeStyleType` (undefined)

RecipeStyleType defines style information stored in a recipe record

## `StyleCategories` (string)