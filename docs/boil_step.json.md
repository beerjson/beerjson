The schema defines the following types:

## BoilStepType 

BoilStepType - a per step representation of a boil process, can be used to support preboil steps, non-boiling pasteurization steps, boiling, whirlpool steps, and chilling.

**BoilStepType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **name** | ✅ | string|  |
| **description** |  | string|  |
| **start_temperature** |  | [TemperatureType](measureable_units.json.md#temperaturetype)|  |
| **end_temperature** |  | [TemperatureType](measureable_units.json.md#temperaturetype)|  |
| **ramp_time** |  | [TimeType](measureable_units.json.md#timetype)| The amount of time that passes before this step begins. eg moving from a boiling step (step 1) to a whirlpool step (step 2) may take 5 minutes. Step 2 would have a ramp time of 5 minutes, hop isomerization and bitterness calculations will need to account for this accordingly. |
| **step_time** |  | [TimeType](measureable_units.json.md#timetype)|  |
| **start_gravity** |  | [GravityType](measureable_units.json.md#gravitytype)|  |
| **end_gravity** |  | [GravityType](measureable_units.json.md#gravitytype)|  |
| **start_ph** |  | [AcidityType](measureable_units.json.md#aciditytype)|  |
| **end_ph** |  | [AcidityType](measureable_units.json.md#aciditytype)|  |
| **chilling_type** |  | `"batch"`<br/>`"inline"`| Chilling type seperates batch chilling, eg immersion chillers, where the entire volume of wort is brought down in temperture as a whole, vs inline chilling where the wort is chilled while it is being drained, which can leave a significant amount of hop isomerization occuring in the boil kettle. |

