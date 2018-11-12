The schema defines the following types:

## MashProcedureType 

MashProcedureType defines the procedure for performing unique mashing styles

`MashProcedureType` type: `object`

### Propertiesw

|Name|Required|Type|Description|
|--|--|--|--|
| **name** | :white_check_mark: | string|  |
| **grain_temperature** | :white_check_mark: | [TemperatureType](measureable_units.json.md#temperaturetype)|  |
| **sparge_temperature** |  | [TemperatureType](measureable_units.json.md#temperaturetype)|  |
| **pH** |  | [AcidityType](measureable_units.json.md#aciditytype)|  |
| **notes** |  | string|  |
| **mash_steps** | :white_check_mark: | array|  |

