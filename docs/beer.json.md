**beerjson** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **version** | ✅ | [VersionType](measureable_units.json.md#versiontype)| Explicitly encode beerjson version within list of records. |
| **timing_object** |  | [TimingType](timing.json.md#timingtype)| The timing object fully describes the timing of an addition with options for basis on time, gravity, or pH at any process step. |
| **fermentables** |  | array of [FermentableType](fermentable.json.md#fermentabletype)| Records for any ingredient that contributes to the gravity of the beer. |
| **miscellaneous_ingredients** |  | array of [MiscellaneousType](misc.json.md#miscellaneoustype)| Records for adjuncts which do not contribute to the gravity of the beer. |
| **hop_varieties** |  | array of [VarietyInformation](hop.json.md#varietyinformation)| Records detailing the many properties of unique hop varieties. |
| **cultures** |  | array of [CultureInformation](culture.json.md#cultureinformation)| Records detailing the wide array of unique cultures. |
| **profiles** |  | array of [WaterBase](water.json.md#waterbase)| Records for water profiles used in brewing. |
| **styles** |  | array of [StyleType](style.json.md#styletype)| Records detailing the characteristics of the beer styles for which judging guidelines have been established. |
| **mashes** |  | array of [MashProcedureType](mash.json.md#mashproceduretype)| A collection of steps providing process information for common mashing procedures. |
| **fermentations** |  | array of [FermentationProcedureType](fermentation.json.md#fermentationproceduretype)| A collection of steps providing process information for common fermentation procedures. |
| **recipes** |  | array of [RecipeType](recipe.json.md#recipetype)| Records containing a minimal collection of the description of ingredients, procedures and other required parameters necessary to recreate a batch of beer. |
| **equipments** |  | array of [EquipmentType](equipment.json.md#equipmenttype)| Provides necessary information for brewing equipment. |
| **boil** |  | array of [BoilProcedureType](boil.json.md#boilproceduretype)| A collection of steps providing process information for common boil procedures. |
| **packaging** |  | array of [PackagingProcedureType](packaging.json.md#packagingproceduretype)| A collection of steps providing process information for common packaging procedures. |
