The schema defines the following types:

## RecipeType 

RecipeType composes the information stored in a beerjson recipe.

**RecipeType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **name** | ✅ | string|  |
| **type** | ✅ | `"cider"`<br/>`"kombucha"`<br/>`"soda"`<br/>`"other"`<br/>`"mead"`<br/>`"wine"`<br/>`"extract"`<br/>`"partial mash"`<br/>`"all grain"`|  |
| **author** | ✅ | string|  |
| **coauthor** |  | string|  |
| **created** |  | [DateType](measureable_units.json.md#datetype)|  |
| **batch_size** | ✅ | [VolumeType](measureable_units.json.md#volumetype)| The volume into the fermenter. |
| **efficiency** | ✅ | [EfficiencyType](#efficiencytype)| Used to store each efficiency component, including conversion, and brewhouse. |
| **style** |  | [RecipeStyleType](style.json.md#recipestyletype)|  |
| **ingredients** | ✅ | [IngredientsType](#ingredientstype)| A collection of all ingredients used for the recipe. |
| **mash** |  | [MashProcedureType](mash.json.md#mashproceduretype)| This defines the procedure for performing unique mashing processes. |
| **notes** |  | string|  |
| **original_gravity** |  | [GravityType](measureable_units.json.md#gravitytype)| The gravity of wort when transffered to the fermenter. |
| **final_gravity** |  | [GravityType](measureable_units.json.md#gravitytype)| The gravity of beer at the end of fermentation. |
| **alcohol_by_volume** |  | [PercentType](measureable_units.json.md#percenttype)|  |
| **ibu_estimate** |  | [IBUEstimateType](hop.json.md#ibuestimatetype)| Used to differentiate which IBU formula is being used in a recipe. If formula is modified in any way, eg to support whirlpool/flameout additions etc etc, please use `Other` for transparency. |
| **color_estimate** |  | [ColorType](measureable_units.json.md#colortype)| The color of the finished beer, using SRM or EBC. |
| **beer_pH** |  | [AcidityType](measureable_units.json.md#aciditytype)| The final beer pH at the end of fermentation. |
| **carbonation** |  | number| The final carbonation of the beer when packaged or served. |
| **apparent_attenuation** |  | [PercentType](measureable_units.json.md#percenttype)| The total apparent attenuation of the finished beer after fermentation. |
| **fermentation** |  | [FermentationProcedureType](fermentation.json.md#fermentationproceduretype)| FermentationProcedureType defines the procedure for performing fermentation. |
| **packaging** |  | [PackagingProcedureType](packaging.json.md#packagingproceduretype)| Describes the procedure for packaging your beverage. |
| **boil** |  | [BoilProcedureType](boil.json.md#boilproceduretype)| Defines the procedure for performing a boil. A boil procedure with no steps is the same as a standard single step boil. |
| **taste** |  | [TasteType](#tastetype)| Used to store subjective tasting notes, and rating. |
| **calories_per_pint** |  | number|  |

## EfficiencyType 

The efficiencyType stores each efficiency component.

**EfficiencyType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **conversion** |  | [PercentType](measureable_units.json.md#percenttype)| The percentage of sugar from the grain yield that is extracted and converted during the mash. |
| **lauter** |  | [PercentType](measureable_units.json.md#percenttype)| The percentage of sugar that makes it from the mash tun to the kettle. |
| **mash** |  | [PercentType](measureable_units.json.md#percenttype)| The percentage of sugar that makes it from the grain to the kettle. |
| **brewhouse** | ✅ | [PercentType](measureable_units.json.md#percenttype)| The percentage of sugar that makes it from the grain to the fermenter. |

## IngredientsType 

*no description yet*

**IngredientsType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **fermentable_additions** | ✅ | array of [FermentableAdditionType](fermentable.json.md#fermentableadditiontype)| fermentable_additions collects all the fermentable ingredients for use in a recipe |
| **hop_additions** |  | array of [HopAdditionType](hop.json.md#hopadditiontype)| hop_additions collects all the hops for use in a recipe |
| **miscellaneous_additions** |  | array of [MiscellaneousAdditionType](misc.json.md#miscellaneousadditiontype)| miscellaneous_additions collects all the miscellaneous items for use in a recipe |
| **culture_additions** |  | array of [CultureAdditionType](culture.json.md#cultureadditiontype)| culture_additions collects all the culture items for use in a recipe |
| **water_additions** |  | array of [WaterAdditionType](water.json.md#wateradditiontype)| water_additions collects all the water items for use in a recipe |

## TasteType 

*no description yet*

**TasteType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **notes** | ✅ | string|  |
| **rating** | ✅ | number|  |

