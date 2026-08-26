The schema defines the following types:

## PackagingProcedureType 

Describes the procedure for packaging your beverage.

**PackagingProcedureType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **name** | ✅ | string| Name of the packaging procedure. |
| **packaged_volume** |  | [VolumeType](measureable_units.json.md#volumetype)|  |
| **description** |  | string| Free text description of the packaging procedure. |
| **notes** |  | string| Free text notes about the packaging procedure. |
| **packaging_vessels** |  | array of [PackagingVesselType](packaging_vessel.json.md#packagingvesseltype)| The vessels the beer is packaged into. |

