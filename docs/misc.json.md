The schema defines the following types:

## MiscellaneousBase 

Identifies an ingredient that is neither a hop nor a contributor to the gravity of the wort. Nothing is calculated from it, so it carries identity alone. `MiscellaneousType` extends it into a full catalogue record, and `MiscellaneousAdditionType` extends it with an amount and a timing.

**MiscellaneousBase** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **name** | ✅ | string| Name of the ingredient. |
| **producer** |  | string| The company that produced the ingredient. |
| **product_id** |  | string| The producer's catalogue number for the ingredient. |
| **type** | ✅ | `"spice"`<br/>`"fining"`<br/>`"water agent"`<br/>`"herb"`<br/>`"flavor"`<br/>`"wood"`<br/>`"other"`| The kind of ingredient, which indicates what it is used for. |

## MiscellaneousType 

The full catalogue record for a miscellaneous ingredient: `MiscellaneousBase` plus what it is used for and what is in stock. This is the form used in the `miscellaneous_ingredients` list at the document root.

**MiscellaneousType** is an object with all properties from [MiscellaneousBase](#miscellaneousbase) and these additional properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **use_for** |  | string| Used to describe the purpose of the miscellaneous ingredient, e.g. whirlfloc is used for clarity. |
| **notes** |  | string| Free text notes about the ingredient. |
| **inventory** |  | [MiscellaneousInventoryType](#miscellaneousinventorytype)|  |

## MiscellaneousAdditionType 

A miscellaneous ingredient as used in a recipe: `MiscellaneousBase` plus how much and when. Catalogue detail belongs in a `MiscellaneousType` record at the document root, not here.

**MiscellaneousAdditionType** is an object with all properties from [MiscellaneousBase](#miscellaneousbase) and these additional properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **timing** |  | [TimingType](timing.json.md#timingtype)| The timing object fully describes the timing of an addition with options for basis on time, gravity, or pH at any process step. |
| **amount** |  |  [VolumeType](measureable_units.json.md#volumetype) or  [MassType](measureable_units.json.md#masstype) or  [UnitType](measureable_units.json.md#unittype)| The quantity added: by mass, by volume, or by unit for a countable item such as a tablet. |

## MiscellaneousInventoryType 

The quantity of a miscellaneous ingredient held in stock.

**MiscellaneousInventoryType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **amount** | ✅ |  [VolumeType](measureable_units.json.md#volumetype) or  [MassType](measureable_units.json.md#masstype) or  [UnitType](measureable_units.json.md#unittype)| The quantity held in stock: by mass, by volume, or by unit for a countable item. |

