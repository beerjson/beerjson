The schema defines the following types:

## EquipmentBase
  
The descriptive base type for brew day equipment. Provides unique properties to fully describe the recipe.
`EquipmentBase` type: `object`

### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
| **name** | string|  | :white_check_mark: |
| **type** | string|  | :white_check_mark: |
| **form** | string|  |  |
| **maximum_volume** | [VolumeType](measureable_units.json.md#volumetype)|  | :white_check_mark: |

## EquipmentType
  
EquipmentType provides necessary information for brewing equipment
`EquipmentType` type: `object`


