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
| **efficiency** | :white_check_mark: | [EfficiencyType](#efficiencytype)|  |
| **style** |  | [RecipeStyleType](style.json.md#recipestyletype)|  |
| **ingredients** | :white_check_mark: | [IngredientsType](#ingredientstype)|  |
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
| **taste** |  | [TasteType](#tastetype)|  |
| **calories_per_pint** |  | number|  |

## EfficiencyType 

*no description yet*

**EfficiencyType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **conversion** |  | [PercentType](measureable_units.json.md#percenttype)|  |
| **lauter** |  | [PercentType](measureable_units.json.md#percenttype)|  |
| **mash** |  | [PercentType](measureable_units.json.md#percenttype)|  |
| **brewhouse** | :white_check_mark: | [PercentType](measureable_units.json.md#percenttype)|  |

## IngredientsType 

*no description yet*

**IngredientsType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **fermentable_additions** | :white_check_mark: | array of [FermentableAdditionType](fermentable.json.md#fermentableadditiontype)| fermentable_additions collects all the fermentable ingredients for use in a recipe |
| **hop_additions** |  | array of [HopAdditionType](hop.json.md#hopadditiontype)| hop_additions collects all the hops for use in a recipe |
| **miscellaneous_additions** |  | array of [MiscellaneousAdditionType](misc.json.md#miscellaneousadditiontype)| miscellaneous_additions collects all the miscellaneous items for use in a recipe |
| **culture_additions** |  | array of [CultureAdditionType](culture.json.md#cultureadditiontype)| culture_additions collects all the culture items for use in a recipe |
| **water_additions** |  | array of [WaterAdditionType](water.json.md#wateradditiontype)| water_additions collects all the water items for use in a recipe |

## TasteType 

*no description yet*

**TasteType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **notes** | :white_check_mark: | string|  |
| **rating** | :white_check_mark: | number|  |

