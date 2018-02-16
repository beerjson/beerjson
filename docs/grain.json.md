The schema defines the following types:

## FermentableBase

FermentableBase provides unique properties to identify individual records of fermentable ingredients

`FermentableBase` type: `object`

### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
| **name** | string|  | :white_check_mark: |
| **type** |  'adjunct'  , 'dry extract'  , 'extract'  , 'grain'  , 'sugar' |  | :white_check_mark: |
| **color** | [ColorType](measureable_units.json.md#colortype)|  | :white_check_mark: |
| **origin** | string|  |  |
| **supplier** | string|  |  |
| **group** |  'base'  , 'caramel'  , 'flakes'  , 'roasted'  , 'speciality'  , 'wheat' |  |  |

## FermentableType

FermentableType collects the attributes of a fermentable ingredient to store as record information

`FermentableType` type: `object`


## FermentableAdditionType

FermentableAdditionType collects the attributes of a fermentable ingredient for use in a recipe grain bill

`FermentableAdditionType` type: `array`


