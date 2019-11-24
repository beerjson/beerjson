The schema defines the following types:

## PackagingProcedureType 

Describes the procedure for packaging your beverage.

**PackagingProcedureType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **name** | ✅ | string|  |
| **packaged_volume** |  | [VolumeType](measureable_units.json.md#volumetype)|  |
| **description** |  | string|  |
| **notes** |  | string|  |
| **packaging_vessels** |  | array of [PackagingVesselType](packaging_vessel.json.md#packagingvesseltype)|  |

