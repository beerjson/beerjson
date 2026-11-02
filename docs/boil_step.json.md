The schema defines the following types:

## BoilStepType 

BoilStepType - a per step representation of a boil process, can be used to support preboil steps, non-boiling pasteurization steps, boiling, whirlpool steps, and chilling.

**BoilStepType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **name** | ✅ | string| Name of the boil step. |
| **description** |  | string| Free text description of the boil step. |
| **start_temperature** |  | [TemperatureType](measureable_units.json.md#temperaturetype)| The temperature of the wort at the start of the step. |
| **end_temperature** |  | [TemperatureType](measureable_units.json.md#temperaturetype)| The temperature of the wort at the end of the step. |
| **ramp_time** |  | [TimeType](measureable_units.json.md#timetype)| The amount of time that passes before this step begins. eg moving from a boiling step (step 1) to a whirlpool step (step 2) may take 5 minutes. Step 2 would have a ramp time of 5 minutes, hop isomerization and bitterness calculations will need to account for this accordingly. |
| **step_time** |  | [TimeType](measureable_units.json.md#timetype)| How long the step lasts. |
| **start_gravity** |  | [GravityType](measureable_units.json.md#gravitytype)| The gravity of the wort at the start of the step. |
| **end_gravity** |  | [GravityType](measureable_units.json.md#gravitytype)| The gravity of the wort at the end of the step. |
| **start_ph** |  | [AcidityType](measureable_units.json.md#aciditytype)| The pH of the wort at the start of the step. |
| **end_ph** |  | [AcidityType](measureable_units.json.md#aciditytype)| The pH of the wort at the end of the step. |
| **chilling_type** |  | `"batch"`<br/>`"inline"`| Chilling type seperates batch chilling, eg immersion chillers, where the entire volume of wort is brought down in temperture as a whole, vs inline chilling where the wort is chilled while it is being drained, which can leave a significant amount of hop isomerization occuring in the boil kettle. |

