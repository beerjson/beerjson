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
| **yield** | :white_check_mark: | [YieldType](#yieldtype)|  |
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
| **inventory** |  | [FermentableInventoryType](#fermentableinventorytype)|  |

## FermentableAdditionType 

FermentableAdditionType collects the attributes of each fermentable ingredient for use in a recipe fermentable bill

**FermentableAdditionType** is an object with all properties from [FermentableBase](#fermentablebase) and these additional properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **timing** |  | [TimingType](timing.json.md#timingtype)|  |
| **amount** |  |  [VolumeType](measureable_units.json.md#volumetype) or  [MassType](measureable_units.json.md#masstype)|  |

## YieldType 

*no description yet*

**YieldType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **fine_grind** |  | [PercentType](measureable_units.json.md#percenttype)|  |
| **coarse_grind** |  | [PercentType](measureable_units.json.md#percenttype)|  |
| **fine_coarse_difference** |  | [PercentType](measureable_units.json.md#percenttype)|  |
| **potential** |  | [GravityType](measureable_units.json.md#gravitytype)|  |

## FermentableInventoryType 

*no description yet*

**FermentableInventoryType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **amount** |  |  [VolumeType](measureable_units.json.md#volumetype) or  [MassType](measureable_units.json.md#masstype)|  |

