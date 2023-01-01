The schema defines the following types:

## FermentableBase 

FermentableBase provides unique properties to identify individual records of fermentable ingredients.

**FermentableBase** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **name** | ✅ | string|  |
| **type** | ✅ | `"dry extract"`<br/>`"extract"`<br/>`"grain"`<br/>`"sugar"`<br/>`"fruit"`<br/>`"juice"`<br/>`"honey"`<br/>`"other"`|  |
| **origin** |  | string|  |
| **producer** |  | string|  |
| **product_id** |  | string|  |
| **grain_group** |  | `"base"`<br/>`"caramel"`<br/>`"flaked"`<br/>`"roasted"`<br/>`"specialty"`<br/>`"smoked"`<br/>`"adjunct"`|  |
| **yield** | ✅ | [YieldType](#yieldtype)|  |
| **color** | ✅ | [ColorType](measureable_units.json.md#colortype)|  |

## FermentableType 

FermentableType collects the attributes of a fermentable ingredient to store as record information.

**FermentableType** is an object with all properties from [FermentableBase](#fermentablebase) and these additional properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **notes** |  | string|  |
| **moisture** |  | [PercentType](measureable_units.json.md#percenttype)|  |
| **alpha_amylase** |  | number| Where diastatic power gives the total amount of all enzymes, alpha amylase, also known as dextrinizing units, refers to only the total amount of alpa amylase in the malted grain. A value of 25-50 is desirable for base malt. |
| **diastatic_power** |  | [DiastaticPowerType](measureable_units.json.md#diastaticpowertype)| Diastatic power is a measurement of malted grains enzymatic content. A value of 35 Lintner is needed to self convert, while a value of 100 or more is desirable. |
| **protein** |  | [PercentType](measureable_units.json.md#percenttype)| The percentage of protein. Higher values may indicate a possibility of haze, or lautering issues. |
| **kolbach_index** |  | [PercentType](measureable_units.json.md#percenttype)| The Kolbach Index, also known as soluble to total ratio of nitrogen or protein, is used to indicate the degree of malt modification. A value above 35% is desired for simple single infusion mashing, undermodified malt may require multiple step mashes or decoction. |
| **max_in_batch** |  | [PercentType](measureable_units.json.md#percenttype)| The recommended maximum percentage to use in a grain bill.  |
| **recommend_mash** |  | boolean| True if the fermentable must be mashed, false if it can be steeped.  |
| **inventory** |  | [FermentableInventoryType](#fermentableinventorytype)|  |
| **glassy** |  | [PercentType](measureable_units.json.md#percenttype)| Used to indicate the 'crystallized' percentage of starches for crystal malts. |
| **plump** |  | [PercentType](measureable_units.json.md#percenttype)| The percentage of grain that masses through sieves with gaps of 7/64 and 6/64, desired values of 80% or higher which indicate plump kernels. |
| **half** |  | [PercentType](measureable_units.json.md#percenttype)|  |
| **mealy** |  | [PercentType](measureable_units.json.md#percenttype)| The opposite of glassy, a mealy kernel is one that is not glassy. Base malt should be at least 90%, single step mashes generally require 95% or higher. |
| **thru** |  | [PercentType](measureable_units.json.md#percenttype)| The Percentage of grain that makes it through a thin mesh screen, typically 5/64 inch. Values less than 3% are desired. |
| **friability** |  | [PercentType](measureable_units.json.md#percenttype)| Friability is the measure of a malts ability to crumble during the crush, and is used as an indicator for easy gelatinization of the grain and starches, as well as modification of the malt. Value of 85% of higher indicates a well modified malt and is suitable for single step mashes. Lower values may require a step mash. |
| **di_ph** |  | [AcidityType](measureable_units.json.md#aciditytype)| The pH of the resultant wort for 1 lb of grain mashed in 1 gallon of distilled water. Used in many water chemistry / mash pH prediction software. |
| **viscosity** |  | [ViscosityType](measureable_units.json.md#viscositytype)| The measure of wort viscosity, typically associated with the breakdown of beta-glucans. The higher the viscosity, the greater the need for a glucan rest and the less suitable for a fly sparge. |
| **dms_p** |  | [ConcentrationType](measureable_units.json.md#concentrationtype)| The amount of DMS precursors, namely S-methyl methionine (SMM) and dimethyl sulfoxide (DMSO) in the malt which convert to dimethyl sulfide (DMS). |
| **fan** |  | [ConcentrationType](measureable_units.json.md#concentrationtype)| Free Amino Nitrogen (FAN) is a critical yeast nutrient. Typical values for base malt is 170. |
| **fermentability** |  | [PercentType](measureable_units.json.md#percenttype)| Fermentability - Used in Extracts to indicate a baseline typical apparent attenuation for a typical medium attenuation yeast. |
| **beta_glucan** |  | [ConcentrationType](measureable_units.json.md#concentrationtype)| Values of 180 or more may suggest a glucan rest and avoiding fly sparging. |

## FermentableAdditionType 

FermentableAdditionType collects the attributes of each fermentable ingredient for use in a recipe fermentable bill.

**FermentableAdditionType** is an object with all properties from [FermentableBase](#fermentablebase) and these additional properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **timing** |  | [TimingType](timing.json.md#timingtype)| The timing object fully describes the timing of an addition with options for basis on time, gravity, or pH at any process step. |
| **amount** | ✅ |  [VolumeType](measureable_units.json.md#volumetype) or  [MassType](measureable_units.json.md#masstype)|  |

## YieldType 

The potential yield of the fermentable ingredient, supporting SG, or percentage. eg 1.037 or 80% are valid yield types.

**YieldType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **fine_grind** |  | [PercentType](measureable_units.json.md#percenttype)| Percentage yield, compared to sucrose, of a fine grind. eg 80% |
| **coarse_grind** |  | [PercentType](measureable_units.json.md#percenttype)| Percentage yield, compared to sucrose, of a coarse grind. eg 78% |
| **fine_coarse_difference** |  | [PercentType](measureable_units.json.md#percenttype)| The difference between fine and coarse grind, a difference more than 2 percent can indicate a protein or step mash may be desirable. eg 2%. |
| **potential** |  | [GravityType](measureable_units.json.md#gravitytype)| The potential yield of the fermentable ingredient for 1 lb of grain mashed in 1 gallon of water. eg 1.037 |

## FermentableInventoryType 

*no description yet*

**FermentableInventoryType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **amount** |  |  [VolumeType](measureable_units.json.md#volumetype) or  [MassType](measureable_units.json.md#masstype)|  |

