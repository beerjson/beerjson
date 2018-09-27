The schema defines the following types:

## FermentationStepType

BoilStepType - a per step representation of a boil process, can be used to support preboil steps, non-boiling pasteurization steps, boiling, whirlpool steps, and chilling.

`FermentationStepType` type: `object`

### Properties

|                       | Type                                                         | Description | Required           |
| --------------------- | ------------------------------------------------------------ | ----------- | ------------------ |
| **name**              | string                                                       |             | :white_check_mark: |
| **description**       | string                                                       |             |                    |
| **start_temperature** | [TemperatureType](measureable_units.json.md#temperaturetype) |             |                    |
| **end_temperature**   | [TemperatureType](measureable_units.json.md#temperaturetype) |             |                    |
| **ramp_time**         | [TimeType](measureable_units.json.md#timetype)               |             |                    |
| **step_time**         | [TimeType](measureable_units.json.md#timetype)               |             |                    |
| **start_gravity**     | [GravityType](measureable_units.json.md#gravitytype)         |             |                    |
| **end_gravity**       | [GravityType](measureable_units.json.md#gravitytype)         |             |                    |
| **start_ph**          | [AcidityType](measureable_units.json.md#aciditytype)         |             |                    |
| **end_ph**            | [AcidityType](measureable_units.json.md#aciditytype)         |             |                    |
| **chilling_type**     | 'batch' , 'inline'                                           |             |                    |
