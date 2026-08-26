The schema defines the following types:

## MashProcedureType 

This defines the procedure for performing unique mashing processes.

**MashProcedureType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **name** | ✅ | string| Name of the mash procedure. |
| **grain_temperature** | ✅ | [TemperatureType](measureable_units.json.md#temperaturetype)| Initial grain temperature prior to the start of the mash. |
| **notes** |  | string| Free text notes about the mash procedure. |
| **mash_steps** | ✅ | array of [MashStepType](mash_step.json.md#mashsteptype)| The steps that make up the mash, in the order they are performed. |

