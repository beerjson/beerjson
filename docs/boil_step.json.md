The schema defines the following types:

## BoilStepType 

BoilStepType - a per step representation of a boil process, can be used to support preboil steps, non-boiling pasteurization steps, boiling, whirlpool steps, and chilling.

`BoilStepType` type: `object`

### Propertiesw

|Name|Required|Type|Description|
|--|--|--|--|
| **name** | :white_check_mark: | string|  |
| **description** |  | string|  |
| **start_temperature** |  | [TemperatureType](measureable_units.json.md#temperaturetype)|  |
| **end_temperature** |  | [TemperatureType](measureable_units.json.md#temperaturetype)|  |
| **ramp_time** |  | [TimeType](measureable_units.json.md#timetype)|  |
| **step_time** |  | [TimeType](measureable_units.json.md#timetype)|  |
| **start_gravity** |  | [GravityType](measureable_units.json.md#gravitytype)|  |
| **end_gravity** |  | [GravityType](measureable_units.json.md#gravitytype)|  |
| **start_ph** |  | [AcidityType](measureable_units.json.md#aciditytype)|  |
| **end_ph** |  | [AcidityType](measureable_units.json.md#aciditytype)|  |
| **chilling_type** |  | `"batch"`<br/>`"inline"`| Chilling type seperates batch chilling, ie immersion chillers, where the entire volume of wort is brought down in temperture as a whole, vs inline chilling where the wort is chilled while it is being drained, which can leave a significant amount of hop isomerization and hop oils isomerizing in the boil kettle. |

