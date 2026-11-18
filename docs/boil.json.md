The schema defines the following types:

## BoilProcedureType 

BoilProcedureType defines the procedure for performing a boil. A boil procedure with no steps is the same as a standard single step boil.

**BoilProcedureType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **name** |  | string| Name of the boil procedure. |
| **description** |  | string| Free text description of the boil procedure. |
| **notes** |  | string| Free text notes about the boil procedure. |
| **pre_boil_size** |  | [VolumeType](measureable_units.json.md#volumetype)| The volume of wort in the kettle before the boil begins. |
| **boil_time** | ✅ | [TimeType](measureable_units.json.md#timetype)| The total length of the boil. |
| **boil_steps** |  | array of [BoilStepType](boil_step.json.md#boilsteptype)| The steps that make up the boil, in the order they are performed. |

