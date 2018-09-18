The schema defines the following types:

## FermentationStepType

FermentationStepType - a per step representation of a fermentation action

`FermentationStepType` type: `object`

### Properties

|                       | Type                                                         | Description | Required           |
| --------------------- | ------------------------------------------------------------ | ----------- | ------------------ |
| **name**              | string                                                       |             | :white_check_mark: |
| **description**       | string                                                       |             |                    |
| **start_temperature** | [TemperatureType](measureable_units.json.md#temperaturetype) |             |                    |
| **end_temperature**   | [TemperatureType](measureable_units.json.md#temperaturetype) |             |                    |
| **step_time**         | [TimeType](measureable_units.json.md#timetype)               |             |                    |
| **free_rise**         | boolean                                                      |             |                    |
| **start_gravity**     | [GravityType](measureable_units.json.md#gravitytype)         |             |                    |
| **end_gravity**       | [GravityType](measureable_units.json.md#gravitytype)         |             |                    |
| **start_ph**          | [AcidityType](measureable_units.json.md#aciditytype)         |             |                    |
| **end_ph**            | [AcidityType](measureable_units.json.md#aciditytype)         |             |                    |
| **vessel**            | string                                                       |             |                    |
