The schema defines the following types:

## UseType

_no description yet_

`UseType` type: `string`

## TimingType

The timing object fully describes the timing of an addition with options for basis on time, gravity, or pH at any process step.

`TimingType` type: `object`

### Properties

|                      | Type                                                 | Description | Required |
| -------------------- | ---------------------------------------------------- | ----------- | -------- |
| **time**             | [TimeType](measureable_units.json.md#timetype)       |             |          |
| **duration**         | [TimeType](measureable_units.json.md#timetype)       |             |          |
| **continuous**       | boolean                                              |             |          |
| **specific_gravity** | [GravityType](measureable_units.json.md#gravitytype) |             |          |
| **pH**               | [AcidityType](measureable_units.json.md#aciditytype) |             |          |
| **step**             | integer                                              |             |          |
| **use**              | [UseType](#usetype)                                  |             |          |
