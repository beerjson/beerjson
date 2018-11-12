The schema defines the following types:

## MashStepType 

MashStepType - a per step representation occurring within the mash

`MashStepType` type: `object`

### Propertiesw

|Name|Required|Type|Description|
|--|--|--|--|
| **name** | :white_check_mark: | string|  |
| **type** | :white_check_mark: | `"infusion"`<br/>`"temperature"`<br/>`"decoction"`<br/>`"souring mash"`<br/>`"souring wort"`<br/>`"drain mash tun"`<br/>`"sparge"`|  |
| **amount** |  | [VolumeType](measureable_units.json.md#volumetype)|  |
| **step_temperature** | :white_check_mark: | [TemperatureType](measureable_units.json.md#temperaturetype)|  |
| **step_time** | :white_check_mark: | [TimeType](measureable_units.json.md#timetype)|  |
| **ramp_time** |  | [TimeType](measureable_units.json.md#timetype)|  |
| **end_temperature** |  | [TemperatureType](measureable_units.json.md#temperaturetype)|  |
| **description** |  | string|  |
| **water_grain_ratio** |  | [SpecificVolumeType](measureable_units.json.md#specificvolumetype)|  |
| **infuse_temperature** |  | [TemperatureType](measureable_units.json.md#temperaturetype)|  |
| **start_pH** |  | [AcidityType](measureable_units.json.md#aciditytype)|  |
| **end_pH** |  | [AcidityType](measureable_units.json.md#aciditytype)|  |

