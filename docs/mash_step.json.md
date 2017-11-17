The schema defines the following properties:

---

# Sub Schemas

The schema defines the following additional types:

## MashStepType
`MashStepType` (object)

MashStepType - a per step representation occuring within the mash

Properties of the `MashStepType` object:

* [name](#name)
* [type](#type)
* [infuse_amount](#infuse_amount)
* [step_temperature](#step_temperature)
* [step_time](#step_time)
* [ramp_time](#ramp_time)
* [end_temperature](#end_temperature)
* [description](#description)
* [water_grain_ratio](#water_grain_ratio)
* [decoction_amount](#decoction_amount)
* [infuse_temperature](#infuse_temperature)

### name
 `name` (string, required)

### type
 `type` (string, enum, required)

This element must be one of the following enum values:

* `infusion`
* `temperature`
* `decoction`

### infuse_amount
 `infuse_amount` ([VolumeType](measureable_units.json.md/#volumetype))

### step_temperature
 `step_temperature` ([TemperatureType](measureable_units.json.md/#temperaturetype), required)

### step_time
 `step_time` ([TimeType](measureable_units.json.md/#timetype), required)

### ramp_time
 `ramp_time` ([TimeType](measureable_units.json.md/#timetype))

### end_temperature
 `end_temperature` ([TemperatureType](measureable_units.json.md/#temperaturetype))

### description
 `description` (string)

### water_grain_ratio
 `water_grain_ratio` (number)

### decoction_amount
 `decoction_amount` ([VolumeType](measureable_units.json.md/#volumetype))

### infuse_temperature
 `infuse_temperature` ([TemperatureType](measureable_units.json.md/#temperaturetype))