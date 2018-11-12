The schema defines the following types:

## BoilProcedureType 

BoilProcedureType defines the procedure for performing a boil. A boil procedure with no steps is the same as a standard single step boil.

`BoilProcedureType` type: `object`

### Properties

|Name|Required|Type|Description|
|--|--|--|--|
| **name** |  | string|  |
| **description** |  | string|  |
| **notes** |  | string|  |
| **pre_boil_size** | :white_check_mark: | [VolumeType](measureable_units.json.md#volumetype)|  |
| **boil_time** | :white_check_mark: | [TimeType](measureable_units.json.md#timetype)|  |
| **boil_steps** |  | array|  |

