The schema defines the following types:

## MashProcedureType
  
MashProcedureType defines the procedure for performing unique mashing styles
`MashProcedureType` type: `object`

### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
| **name** | string|  | :white_check_mark: |
| **grain_temperature** | [TemperatureType](measureable_units.json.md#temperaturetype)|  | :white_check_mark: |
| **sparge_temperature** | [TemperatureType](measureable_units.json.md#temperaturetype)|  |  |
| **pH** | number|  |  |
| **notes** | string|  |  |
| **mash_steps** | array|  | :white_check_mark: |

