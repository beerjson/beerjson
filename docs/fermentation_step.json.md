The schema defines the following types:

## FermentationStepType 

FermentationStepType - a per step representation of a fermentation action.

**FermentationStepType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **name** | ✅ | string| Name of the fermentation step. |
| **description** |  | string| Free text description of the fermentation step. |
| **start_temperature** |  | [TemperatureType](measureable_units.json.md#temperaturetype)| The temperature of the beer at the start of the step. |
| **end_temperature** |  | [TemperatureType](measureable_units.json.md#temperaturetype)| The temperature of the beer at the end of the step. |
| **step_time** |  | [TimeType](measureable_units.json.md#timetype)| How long the step lasts. |
| **free_rise** |  | boolean| Free rise is used to indicate a fermentation step where the exothermic fermentation is allowed to raise the temperature without restriction This is either True or false. |
| **start_gravity** |  | [GravityType](measureable_units.json.md#gravitytype)| The gravity of the beer at the start of the step. |
| **end_gravity** |  | [GravityType](measureable_units.json.md#gravitytype)| The gravity of the beer at the end of the step. |
| **start_ph** |  | [AcidityType](measureable_units.json.md#aciditytype)| The pH of the beer at the start of the step. |
| **end_ph** |  | [AcidityType](measureable_units.json.md#aciditytype)| The pH of the beer at the end of the step. |
| **vessel** |  | string| Name of the vessel the step takes place in, which is how a transfer between vessels is recorded. |
| **vessel_pressure** |  | [PressureType](measureable_units.json.md#pressuretype)| The gauge pressure, meaning the pressure above atmospheric, at which the fermentation vessel is to be held during the step, for example by a spunding valve or regulator. It is a target for the step rather than a measured value. If absent, the vessel is vented to the atmosphere or the pressure is not known. |

