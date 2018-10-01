The schema defines the following types:

## EquipmentBase

The descriptive base type for brew day equipment. Provides unique properties to fully describe the recipe.

`EquipmentBase` type: `object`

### Properties

|                    | Type                                                                                                  | Description | Required           |
| ------------------ | ----------------------------------------------------------------------------------------------------- | ----------- | ------------------ |
| **name**           | string                                                                                                |             | :white_check_mark: |
| **type**           | string                                                                                                |             | :white_check_mark: |
| **form**           | 'HLT' , 'Mash Tun' , 'Lauter Tun' , 'Brew Kettle' , 'Fermenter' , 'Aging Vessel' , 'Packaging Vessel' |             |                    |
| **maximum_volume** | [VolumeType](measureable_units.json.md#volumetype)                                                    |             | :white_check_mark: |

## EquipmentType

EquipmentType provides necessary information for brewing equipment

`EquipmentType` type: `object`

Parent: [EquipmentBase](#equipmentbase)

### Properties

|                           | Type                                                               | Description | Required           |
| ------------------------- | ------------------------------------------------------------------ | ----------- | ------------------ |
| **loss**                  | [VolumeType](measureable_units.json.md#volumetype)                 |             | :white_check_mark: |
| **grain_absorption_rate** | [SpecificVolumeType](measureable_units.json.md#specificvolumetype) |             |                    |
| **boil_rate_per_hour**    | [VolumeType](measureable_units.json.md#volumetype)                 |             |                    |
| **drain_rate_per_minute** | [VolumeType](measureable_units.json.md#volumetype)                 |             |                    |
| **weight**                | [MassType](measureable_units.json.md#masstype)                     |             |                    |
| **specific_heat**         | [SpecificHeatType](measureable_units.json.md#specificheattype)     |             |                    |
| **notes**                 | string                                                             |             |                    |
