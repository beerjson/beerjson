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
| **start_gravity**     | [GravityUnitType](measureable_units.json.md#gravityunittype) |             |                    |
| **end_gravity**       | [GravityUnitType](measureable_units.json.md#gravityunittype) |             |                    |
| **start_ph**          | [AcidityUnitType](measureable_units.json.md#acidityunittype) |             |                    |
| **end_ph**            | [AcidityUnitType](measureable_units.json.md#acidityunittype) |             |                    |
| **carbonation**       | number                                                       |             |                    |
| **vessel_volume**     | [VolumeType](measureable_units.json.md#volumetype)           |             |                    |
| **vessel_quantity**   | number                                                       |             |                    |
