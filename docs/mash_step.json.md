The schema defines the following types:

## MashStepType 

MashStepType - a per step representation occurring during the mash.

**MashStepType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **name** | ✅ | string|  |
| **type** | ✅ | `"infusion"`<br/>`"temperature"`<br/>`"decoction"`<br/>`"souring mash"`<br/>`"souring wort"`<br/>`"drain mash tun"`<br/>`"sparge"`|  |
| **amount** |  | [VolumeType](measureable_units.json.md#volumetype)|  |
| **step_temperature** | ✅ | [TemperatureType](measureable_units.json.md#temperaturetype)|  |
| **step_time** | ✅ | [TimeType](measureable_units.json.md#timetype)|  |
| **ramp_time** |  | [TimeType](measureable_units.json.md#timetype)| The amount of time  that passes before this step begins. eg moving from a mash step (step 1) of 148F, to a new temperature step of 156F (step 2) may take 8 minutes to heat the mash. Step 2 would have a ramp time of 8 minutes. |
| **end_temperature** |  | [TemperatureType](measureable_units.json.md#temperaturetype)|  |
| **description** |  | string|  |
| **water_grain_ratio** |  | [SpecificVolumeType](measureable_units.json.md#specificvolumetype)| Also known as the mash thickness. eg 1.75 qt/lb or 3.65 L/kg. |
| **infuse_temperature** |  | [TemperatureType](measureable_units.json.md#temperaturetype)| Temperature of the water for an infusion step. |
| **start_ph** |  | [AcidityType](measureable_units.json.md#aciditytype)|  |
| **end_ph** |  | [AcidityType](measureable_units.json.md#aciditytype)|  |

