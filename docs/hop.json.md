The schema defines the following types:

## HopVarietyBase 

Identifies a hop and carries what a recipe must know to calculate with it, which is why `alpha_acid` is required: bitterness cannot be derived without it. `VarietyInformation` extends it into a full catalogue record, and `HopAdditionType` extends it with an amount and a timing.

**HopVarietyBase** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **name** | ✅ | string| Name of the hop variety. |
| **producer** |  | string| The grower or company that supplied the hops. |
| **product_id** |  | string| The producer's catalogue or lot number for the hops. |
| **origin** |  | string| The country or region the hops were grown in. |
| **year** |  | string| The harvest year of the crop. |
| **form** |  | `"extract"`<br/>`"leaf"`<br/>`"leaf (wet)"`<br/>`"pellet"`<br/>`"powder"`<br/>`"plug"`| The physical form the hops are supplied in. |
| **alpha_acid** | ✅ | [BoundedPercentType](measureable_units.json.md#boundedpercenttype)| The alpha acid content of the hop, as a percentage by weight. Alpha acids are the main source of bitterness. |
| **beta_acid** |  | [BoundedPercentType](measureable_units.json.md#boundedpercenttype)| The beta acid content of the hop, as a percentage by weight. |

## VarietyInformation 

The full catalogue record for a hop variety: `HopVarietyBase` plus the properties a supplier publishes, such as oil content and substitutes. This is the form used in the `hop_varieties` list at the document root.

**VarietyInformation** is an object with all properties from [HopVarietyBase](#hopvarietybase) and these additional properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **type** |  | `"aroma"`<br/>`"bittering"`<br/>`"flavor"`<br/>`"aroma/bittering"`<br/>`"bittering/flavor"`<br/>`"aroma/flavor"`<br/>`"aroma/bittering/flavor"`| What the variety is typically used for, given its aroma and bittering character. |
| **notes** |  | string| Free text notes about the variety. |
| **percent_lost** |  | [BoundedPercentType](measureable_units.json.md#boundedpercenttype)| The percentage of hop alpha acid lost in six months of storage, also known as the Hop Stability Index. |
| **substitutes** |  | string| Other varieties that can be used in place of this one. |
| **oil_content** |  | [OilContentType](#oilcontenttype)| Oil Content information object. |
| **inventory** |  | [HopInventoryType](#hopinventorytype)| The quantity of the hop held in stock. |

## HopAdditionType 

A hop as used in a recipe: `HopVarietyBase` plus how much and when. Catalogue detail belongs in a `VarietyInformation` record at the document root, not here.

**HopAdditionType** is an object with all properties from [HopVarietyBase](#hopvarietybase) and these additional properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **timing** | ✅ | [TimingType](timing.json.md#timingtype)| The timing object fully describes the timing of an addition with options for a basis on time, gravity, or pH at any process step. |
| **amount** | ✅ |  [VolumeType](measureable_units.json.md#volumetype) or  [MassType](measureable_units.json.md#masstype)| The quantity added: by mass for whole, pellet or powdered hops, or by volume for an extract. |

## IBUEstimateType 

Stores the IBU formula used in a recipe and, when available, the resulting estimated bitterness. If the formula is modified in any way, e.g. to support whirlpool/flameout additions, then please use `Other` for transparency.

**IBUEstimateType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **method** |  | [IBUMethodType](#ibumethodtype)| The formula the bitterness value was estimated with. |
| **value** |  | [BitternessType](measureable_units.json.md#bitternesstype)| The estimated bitterness of the recipe. |

## IBUMethodType 

The formula used to estimate bitterness.

`"Rager"`<br/>`"Tinseth"`<br/>`"Garetz"`<br/>`"Other"`
## OilContentType 

The oil content of a hop variety, and related compounds. Each oil is a percentage of total oil, the amount of which is total_oil_ml_per_100g. cohumulone is a percentage of total alpha acids, and polyphenols and xanthohumol are percentages of hop weight.

**OilContentType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **total_oil_ml_per_100g** |  | number| The total amount of oil, including hydrocarbons, esters, and terpene alcohols in units of ml of oil per 100g of hop mass. |
| **humulene** |  | [BoundedPercentType](measureable_units.json.md#boundedpercenttype)| Humulene, as a percentage of total hop oil. |
| **caryophyllene** |  | [BoundedPercentType](measureable_units.json.md#boundedpercenttype)| Caryophyllene, as a percentage of total hop oil. |
| **cohumulone** |  | [BoundedPercentType](measureable_units.json.md#boundedpercenttype)| Cohumulone, as a percentage of total alpha acids. Unlike the other members it is an alpha acid, not an oil. |
| **myrcene** |  | [BoundedPercentType](measureable_units.json.md#boundedpercenttype)| Myrcene, as a percentage of total hop oil. |
| **farnesene** |  | [BoundedPercentType](measureable_units.json.md#boundedpercenttype)| Farnesene, as a percentage of total hop oil. |
| **geraniol** |  | [BoundedPercentType](measureable_units.json.md#boundedpercenttype)| Geraniol, as a percentage of total hop oil. |
| **b_pinene** |  | [BoundedPercentType](measureable_units.json.md#boundedpercenttype)| Beta-pinene, as a percentage of total hop oil. |
| **linalool** |  | [BoundedPercentType](measureable_units.json.md#boundedpercenttype)| Linalool, as a percentage of total hop oil. |
| **limonene** |  | [BoundedPercentType](measureable_units.json.md#boundedpercenttype)| Limonene, as a percentage of total hop oil. |
| **nerol** |  | [BoundedPercentType](measureable_units.json.md#boundedpercenttype)| Nerol, as a percentage of total hop oil. |
| **pinene** |  | [BoundedPercentType](measureable_units.json.md#boundedpercenttype)| Alpha-pinene, as a percentage of total hop oil. Beta-pinene is recorded separately as b_pinene. |
| **polyphenols** |  | [BoundedPercentType](measureable_units.json.md#boundedpercenttype)| Polyphenols, as a percentage of hop weight. Unlike the oils, not measured relative to total oil. |
| **xanthohumol** |  | [BoundedPercentType](measureable_units.json.md#boundedpercenttype)| Xanthohumol, as a percentage of hop weight. Unlike the oils, not measured relative to total oil. |

## HopInventoryType 

The quantity of a hop held in stock.

**HopInventoryType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **amount** |  |  [VolumeType](measureable_units.json.md#volumetype) or  [MassType](measureable_units.json.md#masstype)| The quantity held in stock: by mass for whole, pellet or powdered hops, or by volume for an extract. |

