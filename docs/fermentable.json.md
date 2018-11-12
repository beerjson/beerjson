The schema defines the following types:

## FermentableBase 

FermentableBase provides unique properties to identify individual records of fermentable ingredients

**FermentableBase** is an object with these properties:
|Name|Required|Type|Description|
|--|--|--|--|
| **name** | :white_check_mark: | string|  |
| **type** | :white_check_mark: | `"dry extract"`<br/>`"extract"`<br/>`"grain"`<br/>`"sugar"`<br/>`"fruit"`<br/>`"juice"`<br/>`"honey"`<br/>`"other"`|  |
| **origin** |  | string|  |
| **supplier** |  | string|  |
| **grain_group** |  | `"base"`<br/>`"caramel"`<br/>`"flaked"`<br/>`"roasted"`<br/>`"specialty"`<br/>`"smoked"`<br/>`"adjunct"`|  |
| **yield** | :white_check_mark: | object|  |
| **color** | :white_check_mark: | [ColorType](measureable_units.json.md#colortype)|  |

## FermentableType 

FermentableType collects the attributes of a fermentable ingredient to store as record information

**FermentableType** is an object with all properties from [FermentableBase](#fermentablebase) and these additional properties:
|Name|Required|Type|Description|
|--|--|--|--|
| **notes** |  | string|  |
| **moisture** |  | [PercentType](measureable_units.json.md#percenttype)|  |
| **alpha_amylase** |  | number|  |
| **diastatic_power** |  | [DiastaticPowerType](measureable_units.json.md#diastaticpowertype)|  |
| **protein** |  | [PercentType](measureable_units.json.md#percenttype)|  |
| **soluble_nitrogen_ratio** |  | number|  |
| **max_in_batch** |  | [PercentType](measureable_units.json.md#percenttype)|  |
| **recommend_mash** |  | boolean|  |
| **inventory** |  | object|  |

## FermentableAdditionType 

FermentableAdditionType collects the attributes of each fermentable ingredient for use in a recipe fermentable bill

**FermentableAdditionType** is an object with all properties from [FermentableBase](#fermentablebase) and these additional properties:
|Name|Required|Type|Description|
|--|--|--|--|
| **timing** |  | [TimingType](timing.json.md#timingtype)|  |
| **amount** |  | undefined|  |

