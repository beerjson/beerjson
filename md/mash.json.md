The schema defines the following properties:

---

# Sub Schemas

The schema defines the following additional types:

## `MashProcedureType` (object)

MashProcedureType defines the procedure for performing unique mashing styles

Properties of the `MashProcedureType` object:

* [name](#name)
* [grain_temperature](#grain_temperature)
* [sparge_temperature](#sparge_temperature)
* [pH](#pH)
* [notes](#notes)
* [mash_steps](#mash_steps)

### name
 `name` (string, required)

### grain_temperature
 `grain_temperature` (, required)

### sparge_temperature
 `sparge_temperature`

### pH
 `pH` (number)

### notes
 `notes` (string)

### mash_steps
 `mash_steps` (object, required)

Properties of the `mash_steps` object:

* [step](#step)

#### step
 `step` (, required)