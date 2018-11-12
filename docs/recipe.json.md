The schema defines the following types:

## RecipeType 

RecipeType composes the information stored in a beerjson recipe

**RecipeType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **name** | :white_check_mark: | string|  |
| **type** | :white_check_mark: | `"extract"`<br/>`"partial mash"`<br/>`"all grain"`|  |
| **author** | :white_check_mark: | string|  |
| **coauthor** |  | string|  |
| **created** |  | [DateType](measureable_units.json.md#datetype)|  |
| **batch_size** | :white_check_mark: | [VolumeType](measureable_units.json.md#volumetype)|  |
| **efficiency** | :white_check_mark: | object|  |
| **style** |  | [RecipeStyleType](style.json.md#recipestyletype)|  |
| **ingredients** | :white_check_mark: | object|  |
| **mash** |  | [MashProcedureType](mash.json.md#mashproceduretype)|  |
| **notes** |  | string|  |
| **original_gravity** |  | [GravityType](measureable_units.json.md#gravitytype)|  |
| **final_gravity** |  | [GravityType](measureable_units.json.md#gravitytype)|  |
| **alcohol_by_volume** |  | [PercentType](measureable_units.json.md#percenttype)|  |
| **ibu_estimate** |  | [IBUEstimateType](hop.json.md#ibuestimatetype)|  |
| **color_estimate** |  | [ColorType](measureable_units.json.md#colortype)|  |
| **beer_pH** |  | [AcidityType](measureable_units.json.md#aciditytype)|  |
| **carbonation** |  | number|  |
| **fermentation** |  | [FermentationProcedureType](fermentation.json.md#fermentationproceduretype)|  |
| **packaging** |  | [PackagingProcedureType](packaging.json.md#packagingproceduretype)|  |
| **boil** |  | [BoilProcedureType](boil.json.md#boilproceduretype)|  |
| **taste** |  | object|  |
| **calories_per_pint** |  | number|  |

