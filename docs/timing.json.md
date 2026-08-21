The schema defines the following types:

## UseType 

Differentiates the specific process type when this ingredient addition is used.

`"add_to_mash"`<br/>`"add_to_boil"`<br/>`"add_to_fermentation"`<br/>`"add_to_package"`
## TimingType 

The timing object fully describes the timing of an addition with options for basis on time, gravity, or pH at any process step.

**TimingType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **time** |  | [TimeType](measureable_units.json.md#timetype)| When during the process step the addition happens. The reference point depends on use: for add_to_fermentation, add_to_mash and add_to_package it is measured forwards from the start of the step, so 2 days for a dry hop means 2 days after fermentation began; for add_to_boil it is measured backwards from the end of the step, following brewing convention, so 40 min means 40 minutes before the end of the boil. |
| **duration** |  | [TimeType](measureable_units.json.md#timetype)| How long an ingredient addition remains, this was referred to as time in the BeerXML standard. E.G. A 40 minute hop boil additions means to boil for 40 minutes, and a 2 day duration for a dry hop means to remove it after 2 days. |
| **continuous** |  | boolean| A continuous addition is spread out evenly and added during the entire process step, eg 60 minute IPA by dogfish head takes all ofthe hop additions and adds them throughout the entire boil. |
| **specific_gravity** |  | [GravityType](measureable_units.json.md#gravitytype)| Used to indicate when an addition is added based on a desired specific gravity. E.G. Add dry hop at when SG is 1.018. |
| **pH** |  | [AcidityType](measureable_units.json.md#aciditytype)| Used to indicate when an addition is added based on a desired specific pH. eg Add brett when pH is 3.4. |
| **step** |  | integer| Used to indicate what step this ingredient timing addition is referencing. EG A value of 2 for add_to_fermentation would mean to add during the second fermentation step. |
| **use** |  | [UseType](#usetype)|  |

