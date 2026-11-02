The schema defines the following types:

## PackagingVesselType 

PackagingVesselType - a per vessel representation of a packaging process.

**PackagingVesselType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **name** | ✅ | string| Name of the packaging vessel. |
| **type** |  | `"keg"`<br/>`"bottle"`<br/>`"cask"`<br/>`"tank"`<br/>`"firkin"`<br/>`"other"`| The kind of vessel the beer is packaged into. |
| **description** |  | string| Free text description of the packaging vessel. |
| **package_date** |  | [DateType](measureable_units.json.md#datetype)| The date the beer was packaged into this vessel. |
| **start_temperature** |  | [TemperatureType](measureable_units.json.md#temperaturetype)| The temperature of the beer at the start of the step. |
| **end_temperature** |  | [TemperatureType](measureable_units.json.md#temperaturetype)| The temperature of the beer at the end of the step. |
| **step_time** |  | [TimeType](measureable_units.json.md#timetype)| How long the beer spends in this vessel, such as a conditioning period. |
| **start_gravity** |  | [GravityType](measureable_units.json.md#gravitytype)| The gravity of the beer at the start of the step. |
| **end_gravity** |  | [GravityType](measureable_units.json.md#gravitytype)| The gravity of the beer at the end of the step. |
| **start_ph** |  | [AcidityType](measureable_units.json.md#aciditytype)| The pH of the beer at the start of the step. |
| **end_ph** |  | [AcidityType](measureable_units.json.md#aciditytype)| The pH of the beer at the end of the step. |
| **carbonation** |  | number| The carbonation of the beer in this vessel, in volumes of CO2. |
| **vessel_volume** |  | [VolumeType](measureable_units.json.md#volumetype)| The capacity of one vessel of this kind. |
| **vessel_quantity** |  | number| How many vessels of this kind were filled. |
| **graphics** |  | array of [PackagingGraphicType](packaging_graphic.json.md#packaginggraphictype)| Artwork applied to the vessel, such as labels and cap prints. |

