The schema defines the following types:

## EquipmentBase 

The descriptive base type for brew day equipment. Provides unique properties to fully describe the recipe.

**EquipmentBase** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **name** | ✅ | string|  |
| **type** |  | string|  |
| **form** | ✅ | `"HLT"`<br/>`"Mash Tun"`<br/>`"Lauter Tun"`<br/>`"Brew Kettle"`<br/>`"Fermenter"`<br/>`"Aging Vessel"`<br/>`"Packaging Vessel"`|  |
| **maximum_volume** | ✅ | [VolumeType](measureable_units.json.md#volumetype)|  |

## EquipmentItemType 

EquipmentType provides necessary information for individual brewing equipment

**EquipmentItemType** is an object with all properties from [EquipmentBase](#equipmentbase) and these additional properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **loss** | ✅ | [VolumeType](measureable_units.json.md#volumetype)|  |
| **grain_absorption_rate** |  | [SpecificVolumeType](measureable_units.json.md#specificvolumetype)|  |
| **boil_rate_per_hour** |  | [VolumeType](measureable_units.json.md#volumetype)|  |
| **drain_rate_per_minute** |  | [VolumeType](measureable_units.json.md#volumetype)|  |
| **weight** |  | [MassType](measureable_units.json.md#masstype)|  |
| **specific_heat** |  | [SpecificHeatType](measureable_units.json.md#specificheattype)|  |
| **notes** |  | string|  |

## EquipmentType 

Provides necessary information for brewing equipment set.

**EquipmentType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **name** | ✅ | string|  |
| **equipment_items** | ✅ | array of [EquipmentItemType](equipment.json.md#equipmentitemtype)|  |

