The schema defines the following types:

## EquipmentBase 

The descriptive base type for brew day equipment. Provides unique properties to fully describe the recipe.

**EquipmentBase** is an object with these properties:
|Name|Required|Type|Description|
|--|--|--|--|
| **name** | :white_check_mark: | string|  |
| **type** | :white_check_mark: | string|  |
| **form** |  | `"HLT"`<br/>`"Mash Tun"`<br/>`"Lauter Tun"`<br/>`"Brew Kettle"`<br/>`"Fermenter"`<br/>`"Aging Vessel"`<br/>`"Packaging Vessel"`|  |
| **maximum_volume** | :white_check_mark: | [VolumeType](measureable_units.json.md#volumetype)|  |

## EquipmentType 

EquipmentType provides necessary information for brewing equipment

**EquipmentType** is an object with all properties from [EquipmentBase](#equipmentbase) and these additional properties:
|Name|Required|Type|Description|
|--|--|--|--|
| **loss** | :white_check_mark: | [VolumeType](measureable_units.json.md#volumetype)|  |
| **grain_absorption_rate** |  | [SpecificVolumeType](measureable_units.json.md#specificvolumetype)|  |
| **boil_rate_per_hour** |  | [VolumeType](measureable_units.json.md#volumetype)|  |
| **drain_rate_per_minute** |  | [VolumeType](measureable_units.json.md#volumetype)|  |
| **weight** |  | [MassType](measureable_units.json.md#masstype)|  |
| **specific_heat** |  | [SpecificHeatType](measureable_units.json.md#specificheattype)|  |
| **notes** |  | string|  |

