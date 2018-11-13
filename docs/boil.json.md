The schema defines the following types:

## BoilProcedureType 

BoilProcedureType defines the procedure for performing a boil. A boil procedure with no steps is the same as a standard single step boil.

**BoilProcedureType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **name** |  | string|  |
| **description** |  | string|  |
| **notes** |  | string|  |
| **pre_boil_size** | ✅ | [VolumeType](measureable_units.json.md#volumetype)|  |
| **boil_time** | ✅ | [TimeType](measureable_units.json.md#timetype)|  |
| **boil_steps** |  | array of [BoilStepType](boil_step.json.md#boilsteptype)|  |

