The schema defines the following types:

## MiscellaneousBase 

MiscellaneousBase provides unique properties to identify individual records of ingredients

`MiscellaneousBase` type: `object`

### Propertiesw

|Name|Required|Type|Description|
|--|--|--|--|
| **name** | :white_check_mark: | string|  |
| **type** | :white_check_mark: | `"spice"`<br/>`"fining"`<br/>`"water agent"`<br/>`"herb"`<br/>`"flavor"`<br/>`"wood"`<br/>`"other"`|  |

## MiscellaneousType 

MiscellaneousType collects the attributes of an ingredient to store as record information

`MiscellaneousType` type: `object`

Parent: [MiscellaneousBase](#miscellaneousbase)

### Propertiesw

|Name|Required|Type|Description|
|--|--|--|--|
| **use_for** |  | string|  |
| **notes** |  | string|  |
| **inventory** |  | object|  |

## MiscellaneousAdditionType 

MiscellaneousAdditionType collects the attributes of each miscellaneous ingredient for use in a recipe

`MiscellaneousAdditionType` type: `object`

Parent: [MiscellaneousBase](#miscellaneousbase)

### Propertiesw

|Name|Required|Type|Description|
|--|--|--|--|
| **timing** |  | [TimingType](timing.json.md#timingtype)|  |
| **amount** |  | undefined|  |

