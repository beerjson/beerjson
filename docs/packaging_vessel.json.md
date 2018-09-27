The schema defines the following types:

## PackagingVesselType

PackagingVesselType - a per vessel representation of a packaging process

`PackagingVesselType` type: `object`

### Properties

|                       | Type                                                         | Description | Required           |
| --------------------- | ------------------------------------------------------------ | ----------- | ------------------ |
| **name**              | string                                                       |             | :white_check_mark: |
| **type**              | 'keg' , 'bottle' , 'cask' , 'tank' , 'firkin'                |             |                    |
| **description**       | string                                                       |             |                    |
| **package_date**      | [DateType](measureable_units.json.md#datetype)               |             |                    |
| **start_temperature** | [TemperatureType](measureable_units.json.md#temperaturetype) |             |                    |
| **end_temperature**   | [TemperatureType](measureable_units.json.md#temperaturetype) |             |                    |
| **step_time**         | [TimeType](measureable_units.json.md#timetype)               |             |                    |
| **start_gravity**     | [GravityType](measureable_units.json.md#gravitytype)         |             |                    |
| **end_gravity**       | [GravityType](measureable_units.json.md#gravitytype)         |             |                    |
| **start_ph**          | [AcidityType](measureable_units.json.md#aciditytype)         |             |                    |
| **end_ph**            | [AcidityType](measureable_units.json.md#aciditytype)         |             |                    |
| **carbonation**       | number                                                       |             |                    |
| **vessel_volume**     | [VolumeType](measureable_units.json.md#volumetype)           |             |                    |
| **vessel_quantity**   | number                                                       |             |                    |
