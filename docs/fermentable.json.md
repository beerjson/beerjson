The schema defines the following types:

## FermentableBase 

FermentableBase provides unique properties to identify individual records of fermentable ingredients.

**FermentableBase** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **name** | ✅ | string|  |
| **type** | ✅ | `"dry extract"`<br/>`"extract"`<br/>`"grain"`<br/>`"sugar"`<br/>`"fruit"`<br/>`"juice"`<br/>`"honey"`<br/>`"other"`|  |
| **origin** |  | string|  |
| **producer** |  | string|  |
| **grain_group** |  | `"base"`<br/>`"caramel"`<br/>`"flaked"`<br/>`"roasted"`<br/>`"specialty"`<br/>`"smoked"`<br/>`"adjunct"`|  |
| **yield** | ✅ | [YieldType](#yieldtype)|  |
| **color** | ✅ | [ColorType](measureable_units.json.md#colortype)|  |

## FermentableType 

FermentableType collects the attributes of a fermentable ingredient to store as record information.

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
| **recommend_mash** |  | boolean| True if the fermentable must be mashed, false if it can be steeped.  |
| **inventory** |  | [FermentableInventoryType](#fermentableinventorytype)|  |

## FermentableAdditionType 

FermentableAdditionType collects the attributes of each fermentable ingredient for use in a recipe fermentable bill.

**FermentableAdditionType** is an object with all properties from [FermentableBase](#fermentablebase) and these additional properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **timing** |  | [TimingType](timing.json.md#timingtype)| The timing object fully describes the timing of an addition with options for basis on time, gravity, or pH at any process step. |
| **amount** | ✅ |  [VolumeType](measureable_units.json.md#volumetype) or  [MassType](measureable_units.json.md#masstype)|  |

## YieldType 

The potential yield of the fermentable ingredient, supporting SG, or percentage. eg 1.037 or 80% are valid yield types.

**YieldType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **fine_grind** |  | [PercentType](measureable_units.json.md#percenttype)| Percentage yield compared to succrose of a fine grind. eg 80% |
| **coarse_grind** |  | [PercentType](measureable_units.json.md#percenttype)| Percentage yield compared to succrose of a coarse grind. eg 78% |
| **fine_coarse_difference** |  | [PercentType](measureable_units.json.md#percenttype)| The difference between fine and coarse grind, a difference more than 2 percent can indicate a protein or step mash may be desirable. eg 2%. |
| **potential** |  | [GravityType](measureable_units.json.md#gravitytype)| The potential yield of the fermentable ingredient for 1 lb of grain mashed in 1 gallon of water. eg 1.037 |

## FermentableInventoryType 

*no description yet*

**FermentableInventoryType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **amount** |  |  [VolumeType](measureable_units.json.md#volumetype) or  [MassType](measureable_units.json.md#masstype)|  |

