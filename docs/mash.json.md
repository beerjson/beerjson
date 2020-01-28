The schema defines the following types:

## MashProcedureType 

This defines the procedure for performing unique mashing processes.

**MashProcedureType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **name** | ✅ | string|  |
| **grain_temperature** | ✅ | [TemperatureType](measureable_units.json.md#temperaturetype)| Initial grain temperature prior to the start of the mash. |
| **notes** |  | string|  |
| **mash_steps** | ✅ | array of [MashStepType](mash_step.json.md#mashsteptype)|  |

