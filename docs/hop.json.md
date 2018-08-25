The schema defines the following types:

## HopVarietyBase 

HopVarietyBase provides unique properties to identify individual records of a hop variety

`HopVarietyBase` type: `object`

### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
| **name** | string|  | :white_check_mark: |
| **origin** | string|  |  |
| **form** |  'extract'  , 'leaf'  , 'leaf (wet)'  , 'pellet'  , 'powder'  , 'plug' |  |  |
| **alpha_acid_units** | number|  | :white_check_mark: |
| **beta_acid_units** | number|  |  |

## VarietyInformation 

VarietyInformation collects the attributes of a hop variety to store as record information

`VarietyInformation` type: `object`

Parent: [HopVarietyBase](#hopvarietybase)

### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
| **type** |  'aroma'  , 'bittering'  , 'flavor'  , 'aroma/bittering'  , 'bittering/flavor'  , 'aroma/flavor'  , 'aroma/bittering/flavor' |  |  |
| **notes** | string|  |  |
| **percent_lost** | [PercentType](measureable_units.json.md#percenttype)|  |  |
| **substitutes** | string|  |  |
| **humulene** | number|  |  |
| **caryophyllene** | number|  |  |
| **cohumulone** | number|  |  |
| **myrcene** | number|  |  |
| **farnesene** | number|  |  |
| **inventory** | object|  |  |

## HopAdditionType 

HopAdditionType collects the attributes of each hop ingredient for use in a recipe hop bil

`HopAdditionType` type: `object`

Parent: [HopVarietyBase](#hopvarietybase)


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


