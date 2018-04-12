The schema defines the following types:

## MiscellaneousBase 

MiscellaneousBase provides unique properties to identify individual records of ingredients

`MiscellaneousBase` type: `object`

### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
| **name** | string|  | :white_check_mark: |
| **type** |  'spice'  , 'fining'  , 'water agent'  , 'herb'  , 'fruit'  , 'flavor'  , 'wood'  , 'other' |  | :white_check_mark: |
| **use** |  'boil'  , 'mash'  , 'fermentation'  , 'packaging' |  | :white_check_mark: |

## MiscellaneousType 

MiscellaneousType collects the attributes of an ingredient to store as record information

`MiscellaneousType` type: `object`

Parent: [MiscellaneousBase](#miscellaneousbase)

### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
| **use_for** | string|  |  |
| **notes** | string|  |  |
| **inventory** | object|  |  |

## MiscellaneousAdditionType 

MiscellaneousAdditionType collects the attributes of each miscellaneous ingredient for use in a recipe

`MiscellaneousAdditionType` type: `object`

Parent: [MiscellaneousBase](#miscellaneousbase)

### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
| **time** | [TimeType](measureable_units.json.md#timetype)|  |  |
| **amount** | undefined|  |  |

