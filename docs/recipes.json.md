The schema defines the following types:

## RecipeType
RecipeType composes the information stored in a beer_xml recipe
`RecipeType` type: `object`

### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
| **name** | string|  | :white_check_mark: |
| **type** | string|  | :white_check_mark: |
| **author** | string|  | :white_check_mark: |
| **coauthor** | string|  |  |
| **created** | undefined|  |  |
| **batch_size** | undefined|  | :white_check_mark: |
| **boil_size** | undefined|  | :white_check_mark: |
| **boil_time** | undefined|  | :white_check_mark: |
| **efficiency** | undefined|  |  |
| **style** | undefined|  |  |
| **ingredients** | object|  | :white_check_mark: |
| **mash** | undefined|  |  |
| **notes** | string|  |  |
| **original_gravity** | undefined|  |  |
| **final_gravity** | undefined|  |  |
| **alcohol_by_volume** | undefined|  |  |
| **ibu_estimate** | undefined|  |  |
| **color_estimate** | undefined|  |  |
| **beer_pH** | undefined|  |  |
| **carbonation** | number|  |  |
| **fermentation** | undefined|  |  |
| **taste** | object|  |  |
| **calories_per_pint** | number|  |  |

## RecipeStyleType
Recipe Style Type Description
`RecipeStyleType` type: `undefined`


