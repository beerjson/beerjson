The schema defines the following types:

## PackagingVesselType 

PackagingVesselType - a per vessel representation of a packaging process.

**PackagingVesselType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **name** | ✅ | string| Name of the packaging vessel. |
| **type** |  | `"keg"`<br/>`"bottle"`<br/>`"cask"`<br/>`"tank"`<br/>`"firkin"`<br/>`"other"`| The kind of vessel the beer is packaged into. |
| **description** |  | string| Free text description of the packaging vessel. |
| **package_date** |  | [DateType](measureable_units.json.md#datetype)|  |
| **start_temperature** |  | [TemperatureType](measureable_units.json.md#temperaturetype)|  |
| **end_temperature** |  | [TemperatureType](measureable_units.json.md#temperaturetype)|  |
| **step_time** |  | [TimeType](measureable_units.json.md#timetype)|  |
| **start_gravity** |  | [GravityType](measureable_units.json.md#gravitytype)|  |
| **end_gravity** |  | [GravityType](measureable_units.json.md#gravitytype)|  |
| **start_ph** |  | [AcidityType](measureable_units.json.md#aciditytype)|  |
| **end_ph** |  | [AcidityType](measureable_units.json.md#aciditytype)|  |
| **carbonation** |  | number| The carbonation of the beer in this vessel, in volumes of CO2. |
| **vessel_volume** |  | [VolumeType](measureable_units.json.md#volumetype)|  |
| **vessel_quantity** |  | number| How many vessels of this kind were filled. |
| **graphics** |  | array of [PackagingGraphicType](packaging_graphic.json.md#packaginggraphictype)| Artwork applied to the vessel, such as labels and cap prints. |

