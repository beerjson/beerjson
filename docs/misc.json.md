The schema defines the following types:

## MiscellaneousBase 

MiscellaneousBase provides unique properties to identify individual records of ingredients that are neither hops, nor provide a contribution to the gravity of wort.

**MiscellaneousBase** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **name** | ✅ | string|  |
| **producer** |  | string|  |
| **type** | ✅ | `"spice"`<br/>`"fining"`<br/>`"water agent"`<br/>`"herb"`<br/>`"flavor"`<br/>`"wood"`<br/>`"other"`|  |

## MiscellaneousType 

MiscellaneousType collects the attributes of an ingredient to store as record information.

**MiscellaneousType** is an object with all properties from [MiscellaneousBase](#miscellaneousbase) and these additional properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **use_for** |  | string| Used to describe the purpose of the miscellaneous ingredient, e.g. whirlfloc is used for clarity. |
| **notes** |  | string|  |
| **inventory** |  | [MiscellaneousInventoryType](#miscellaneousinventorytype)|  |

## MiscellaneousAdditionType 

MiscellaneousAdditionType collects the attributes of each miscellaneous ingredient for use in a recipe.

**MiscellaneousAdditionType** is an object with all properties from [MiscellaneousBase](#miscellaneousbase) and these additional properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **timing** |  | [TimingType](timing.json.md#timingtype)| The timing object fully describes the timing of an addition with options for basis on time, gravity, or pH at any process step. |
| **amount** |  |  [VolumeType](measureable_units.json.md#volumetype) or  [MassType](measureable_units.json.md#masstype) or  [UnitType](measureable_units.json.md#unittype)|  |

## MiscellaneousInventoryType 

*no description yet*

**MiscellaneousInventoryType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **amount** | ✅ |  [VolumeType](measureable_units.json.md#volumetype) or  [MassType](measureable_units.json.md#masstype) or  [UnitType](measureable_units.json.md#unittype)|  |

