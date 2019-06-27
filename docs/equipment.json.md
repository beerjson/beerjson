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

EquipmentType provides necessary information for individual brewing equipment.

**EquipmentItemType** is an object with all properties from [EquipmentBase](#equipmentbase) and these additional properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **loss** | ✅ | [VolumeType](measureable_units.json.md#volumetype)|  |
| **grain_absorption_rate** |  | [SpecificVolumeType](measureable_units.json.md#specificvolumetype)| The apparent volume absorbed by grain, typical values are 0.125 qt/lb (1.04 L/kg) for a mashtun, 0.08 gal/lb (0.66 L/kg) for BIAB. |
| **boil_rate_per_hour** |  | [VolumeType](measureable_units.json.md#volumetype)| The volume boiled off during 1 hour, measured before and after at room temperature. |
| **drain_rate_per_minute** |  | [VolumeType](measureable_units.json.md#volumetype)| The volume that leaves the kettle, especially important for non-immersion chillers that cool the wort as it leaves the kettle. |
| **weight** |  | [MassType](measureable_units.json.md#masstype)| The weight of the piece of equipment, especially important for when the mashtun is not preheated. |
| **specific_heat** |  | [SpecificHeatType](measureable_units.json.md#specificheattype)| The specific heat of the piece of equipment, expressed in Cal/(g*C), especially important for when the mashtun is not preheated. |
| **notes** |  | string|  |

## EquipmentType 

Provides necessary information for brewing equipment set.

**EquipmentType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **name** | ✅ | string|  |
| **equipment_items** | ✅ | array of [EquipmentItemType](equipment.json.md#equipmentitemtype)|  |

