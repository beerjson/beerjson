The schema defines the following types:

## BoilProcedureType

BoilProcedureType defines the procedure for performing a boil. A boil procedure with no steps is the same as a standard single step boil.

`BoilProcedureType` type: `object`

### Properties

|                   | Type                                               | Description | Required           |
| ----------------- | -------------------------------------------------- | ----------- | ------------------ |
| **name**          | string                                             |             |                    |
| **description**   | string                                             |             |                    |
| **notes**         | string                                             |             |                    |
| **pre_boil_size** | [VolumeType](measureable_units.json.md#volumetype) |             | :white_check_mark: |
| **boil_time**     | [TimeType](measureable_units.json.md#timetype)     |             | :white_check_mark: |
| **boil_steps**    | array                                              |             |                    |
