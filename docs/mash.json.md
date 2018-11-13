The schema defines the following types:

## MashProcedureType 

MashProcedureType defines the procedure for performing unique mashing styles

**MashProcedureType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **name** | ✅ | string|  |
| **grain_temperature** | ✅ | [TemperatureType](measureable_units.json.md#temperaturetype)|  |
| **sparge_temperature** |  | [TemperatureType](measureable_units.json.md#temperaturetype)|  |
| **pH** |  | [AcidityType](measureable_units.json.md#aciditytype)|  |
| **notes** |  | string|  |
| **mash_steps** | ✅ | array of [MashStepType](mash_step.json.md#mashsteptype)|  |

