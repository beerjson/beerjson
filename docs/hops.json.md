The schema defines the following types:

## HopVarietyBase

HopVarietyBase provides unique properties to identify individual records of a hop variety

`HopVarietyBase` type: `object`

### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
| **name** | string|  | :white_check_mark: |
| **origin** | string|  | :white_check_mark: |
| **form** | string|  |  |
| **alpha_acid_units** | number|  | :white_check_mark: |
| **beta_acid_units** | number|  |  |

## VarietyInformation

VarietyInformation collects the attributes of a hop variety to store as record information

`VarietyInformation` type: `object`


## HopAdditionType

HopAdditionType collects the attributes of a hop ingredient for use in a recipe hop bil

`HopAdditionType` type: `array`


## IBUEstimateType

*no description yet*

`IBUEstimateType` type: `undefined`

### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
| **method** | [IBUMethodType](#ibumethodtype)|  |  |

## IBUMethodType

*no description yet*

`IBUMethodType` type: `string`


