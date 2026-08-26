The schema defines the following types:

## FermentationStepType 

FermentationStepType - a per step representation of a fermentation action.

**FermentationStepType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **name** | ✅ | string| Name of the fermentation step. |
| **description** |  | string| Free text description of the fermentation step. |
| **start_temperature** |  | [TemperatureType](measureable_units.json.md#temperaturetype)|  |
| **end_temperature** |  | [TemperatureType](measureable_units.json.md#temperaturetype)|  |
| **step_time** |  | [TimeType](measureable_units.json.md#timetype)|  |
| **free_rise** |  | boolean| Free rise is used to indicate a fermentation step where the exothermic fermentation is allowed to raise the temperature without restriction This is either True or false. |
| **start_gravity** |  | [GravityType](measureable_units.json.md#gravitytype)|  |
| **end_gravity** |  | [GravityType](measureable_units.json.md#gravitytype)|  |
| **start_ph** |  | [AcidityType](measureable_units.json.md#aciditytype)|  |
| **end_ph** |  | [AcidityType](measureable_units.json.md#aciditytype)|  |
| **vessel** |  | string| Name of the vessel the step takes place in, which is how a transfer between vessels is recorded. |
| **vessel_pressure** |  | [PressureType](measureable_units.json.md#pressuretype)| Vessel pressure indicates the pressure applied within the fermentation vessel. |

