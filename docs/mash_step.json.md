The schema defines the following types:

## MashStepType

MashStepType - a per step representation occurring within the mash

`MashStepType` type: `object`

### Properties

|                        | Type                                                                                                     | Description | Required           |
| ---------------------- | -------------------------------------------------------------------------------------------------------- | ----------- | ------------------ |
| **name**               | string                                                                                                   |             | :white_check_mark: |
| **type**               | 'infusion' , 'temperature' , 'decoction' , 'souring mash' , 'souring wort' , 'drain mash tun' , 'sparge' |             | :white_check_mark: |
| **amount**             | [VolumeType](measureable_units.json.md#volumetype)                                                       |             |                    |
| **step_temperature**   | [TemperatureType](measureable_units.json.md#temperaturetype)                                             |             | :white_check_mark: |
| **step_time**          | [TimeType](measureable_units.json.md#timetype)                                                           |             | :white_check_mark: |
| **ramp_time**          | [TimeType](measureable_units.json.md#timetype)                                                           |             |                    |
| **end_temperature**    | [TemperatureType](measureable_units.json.md#temperaturetype)                                             |             |                    |
| **description**        | string                                                                                                   |             |                    |
| **water_grain_ratio**  | [SpecificVolumeType](measureable_units.json.md#specificvolumetype)                                       |             |                    |
| **infuse_temperature** | [TemperatureType](measureable_units.json.md#temperaturetype)                                             |             |                    |
| **initial_pH**         | [AcidityType](measureable_units.json.md#aciditytype)                                                     |             |                    |
| **final_pH**           | [AcidityType](measureable_units.json.md#aciditytype)                                                     |             |                    |
