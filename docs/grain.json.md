The schema defines the following types:

## FermentableBase
FermentableBase provides unique properties to identify individual records of fermentable ingredients
`FermentableBase` type: `object`

### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
| **name** | string|  | :white_check_mark: |
| **type** | string|  | :white_check_mark: |
| **color** | undefined|  | :white_check_mark: |
| **origin** | string|  |  |
| **supplier** | string|  |  |
| **group** | string|  |  |

## FermentableType
FermentableType collects the attributes of a fermentable ingredient to store as record information
`FermentableType` type: `object`


## FermentableAdditionType
FermentableAdditionType collects the attributes of a fermentable ingredient for use in a recipe grain bill
`FermentableAdditionType` type: `array`


