The schema defines the following types:

## PackagingProcedureType

PackagingProcedureType describes the procedure for packaging your beverage

`PackagingProcedureType` type: `object`

### Properties

|                      | Type                                               | Description | Required           |
| -------------------- | -------------------------------------------------- | ----------- | ------------------ |
| **name**             | string                                             |             | :white_check_mark: |
| **packaged_volume**  | [VolumeType](measureable_units.json.md#volumetype) |             |                    |
| **description**      | string                                             |             |                    |
| **notes**            | string                                             |             |                    |
| **packaging_vessel** | array                                              |             |                    |
