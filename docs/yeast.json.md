The schema defines the following types:

## CultureBase

The descriptive base type for both yeast culture records and yeast recipe additions. Provides unique properties to identify individual records of a yeast culture

`CultureBase` type: `object`

### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
| **name** | string|  | :white_check_mark: |
| **type** | string|  | :white_check_mark: |
| **form** | string|  | :white_check_mark: |
| **laboratory** | string|  | :white_check_mark: |
| **product_id** | string|  | :white_check_mark: |

## CultureInformation

CultureInformation collects the attributes of a yeast culture to store as record information

`CultureInformation` type: `object`


## YeastAdditionType

YeastAdditionType collects the attributes of a yeast ingredient for use in a recipe

`YeastAdditionType` type: `array`


