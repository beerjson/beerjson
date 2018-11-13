The schema defines the following types:

## MashStepType 

MashStepType - a per step representation occurring within the mash

**MashStepType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **name** | ✅ | string|  |
| **type** | ✅ | `"infusion"`<br/>`"temperature"`<br/>`"decoction"`<br/>`"souring mash"`<br/>`"souring wort"`<br/>`"drain mash tun"`<br/>`"sparge"`|  |
| **amount** |  | [VolumeType](measureable_units.json.md#volumetype)|  |
| **step_temperature** | ✅ | [TemperatureType](measureable_units.json.md#temperaturetype)|  |
| **step_time** | ✅ | [TimeType](measureable_units.json.md#timetype)|  |
| **ramp_time** |  | [TimeType](measureable_units.json.md#timetype)|  |
| **end_temperature** |  | [TemperatureType](measureable_units.json.md#temperaturetype)|  |
| **description** |  | string|  |
| **water_grain_ratio** |  | [SpecificVolumeType](measureable_units.json.md#specificvolumetype)|  |
| **infuse_temperature** |  | [TemperatureType](measureable_units.json.md#temperaturetype)|  |
| **start_pH** |  | [AcidityType](measureable_units.json.md#aciditytype)|  |
| **end_pH** |  | [AcidityType](measureable_units.json.md#aciditytype)|  |

