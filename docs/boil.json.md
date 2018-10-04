The schema defines the following types:

## FermentationProcedureType

BoilProcedureType defines the procedure for performing a boil. An boil procedure with no steps is the same as a standard single step boil.

`FermentationProcedureType` type: `object`

### Properties

|                 | Type                                               | Description | Required           |
| --------------- | -------------------------------------------------- | ----------- | ------------------ |
| **name**        | string                                             |             | :white_check_mark: |
| **description** | string                                             |             |                    |
| **notes**       | string                                             |             |                    |
| **boil_size**   | [VolumeType](measureable_units.json.md#volumetype) |             | :white_check_mark: |
| **boil_time**   | [TimeType](measureable_units.json.md#timetype)     |             | :white_check_mark: |
| **boil_steps**  | array                                              |             |                    |
