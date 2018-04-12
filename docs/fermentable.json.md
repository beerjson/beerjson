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
| **group** |  'base'  , 'caramel'  , 'flaked'  , 'roasted'  , 'speciality'  , 'wheat' |  |  |

## FermentableType 

FermentableType collects the attributes of a fermentable ingredient to store as record information

`FermentableType` type: `object`

Parent: [FermentableBase](#fermentablebase)

### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
| **yield_dry_basis** | object|  | :white_check_mark: |
| **notes** | string|  |  |
| **moisture** | [PercentType](measureable_units.json.md#percenttype)|  |  |
| **diastatic_power** | number|  |  |
| **protein** | [PercentType](measureable_units.json.md#percenttype)|  |  |
| **soluble_nitrogen_ratio** | number|  |  |
| **max_in_batch** | [PercentType](measureable_units.json.md#percenttype)|  |  |
| **recommend_mash** | boolean|  |  |
| **ibu_gal_per_lb** | number|  |  |
| **potential** | [DensityType](measureable_units.json.md#densitytype)|  |  |
| **inventory** | [MassType](measureable_units.json.md#masstype)|  |  |

## FermentableAdditionType 

FermentableAdditionType collects the attributes of each fermentable ingredient for use in a recipe fermentable bill

`FermentableAdditionType` type: `object`

Parent: [FermentableBase](#fermentablebase)

### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
| **amount** | [MassType](measureable_units.json.md#masstype)|  |  |
| **yield** | number|  |  |
| **add_after_boil** | boolean|  |  |

