// @flow

type BeerJSON = {
  version: VersionType,
  fermentables?: [FermentableType],
  miscellaneous_ingredients?: [MiscellaneousType],
  hop_varieties?: [VarietyInformation],
  cultures?: [CultureInformation],
  profiles?: [WaterType],
  styles?: [StyleType],
  mashes?: [MashProcedureType],
  fermentations?: [FermentationProcedureType],
  recipes?: [RecipeType],
  equipments?: [EquipmentType],
  boil?: [BoilProcedureType],
  packaging?: [PackagingProcedureType]
}
type BoilProcedureType = {
  name?: string,
  description?: string,
  notes?: string,
  pre_boil_size: VolumeType,
  boil_time: TimeType,
  boil_steps?: [BoilStepType]
}

type BoilStepType = {
  name: string,
  description?: string,
  start_temperature?: TemperatureType,
  end_temperature?: TemperatureType,
  ramp_time?: TimeType,
  step_time?: TimeType,
  start_gravity?: GravityType,
  end_gravity?: GravityType,
  start_ph?: AcidityType,
  end_ph?: AcidityType,
  chilling_type?: 'batch' | 'inline'
}

type CultureBase = {
  name: string,
  type:
    | 'ale'
    | 'bacteria'
    | 'brett'
    | 'champagne'
    | 'kveik'
    | 'lacto'
    | 'lager'
    | 'malolactic'
    | 'mixed-culture'
    | 'other'
    | 'pedio'
    | 'spontaneous'
    | 'wine',
  form: 'liquid' | 'dry' | 'slant' | 'culture' | 'dregs',
  laboratory?: string,
  product_id?: string
}

type CultureInformation = CultureBase & {
  temperature_range?: TemperatureRangeType,
  flocculation?: QualitativeRangeType,
  attenuation?: PercentRangeType,
  alcohol_tolerance?: PercentType,
  notes?: string,
  best_for?: string,
  max_reuse?: integer,
  inventory?: CultureInventoryType
}

type CultureAdditionType = CultureBase & {
  attenuation?: PercentType,
  times_cultured?: integer,
  timing?: TimingType,
  cell_count_billions?: integer,
  amount?: VolumeType | MassType | UnitType
}

type CultureInventoryType = {
  liquid?: VolumeType,
  dry?: MassType,
  slant?: VolumeType,
  culture?: VolumeType
}

type EquipmentBase = {
  name: string,
  type: string,
  form?:
    | 'HLT'
    | 'Mash Tun'
    | 'Lauter Tun'
    | 'Brew Kettle'
    | 'Fermenter'
    | 'Aging Vessel'
    | 'Packaging Vessel',
  maximum_volume: VolumeType
}

type EquipmentType = EquipmentBase & {
  loss: VolumeType,
  grain_absorption_rate?: SpecificVolumeType,
  boil_rate_per_hour?: VolumeType,
  drain_rate_per_minute?: VolumeType,
  weight?: MassType,
  specific_heat?: SpecificHeatType,
  notes?: string
}

type FermentableBase = {
  name: string,
  type:
    | 'dry extract'
    | 'extract'
    | 'grain'
    | 'sugar'
    | 'fruit'
    | 'juice'
    | 'honey'
    | 'other',
  origin?: string,
  supplier?: string,
  grain_group?:
    | 'base'
    | 'caramel'
    | 'flaked'
    | 'roasted'
    | 'specialty'
    | 'smoked'
    | 'adjunct',
  yield: YieldType,
  color: ColorType
}

type FermentableType = FermentableBase & {
  notes?: string,
  moisture?: PercentType,
  alpha_amylase?: number,
  diastatic_power?: DiastaticPowerType,
  protein?: PercentType,
  soluble_nitrogen_ratio?: number,
  max_in_batch?: PercentType,
  recommend_mash?: boolean,
  inventory?: FermentableInventoryType
}

type FermentableAdditionType = FermentableBase & {
  timing?: TimingType,
  amount?: VolumeType | MassType
}

type YieldType = {
  fine_grind?: PercentType,
  coarse_grind?: PercentType,
  fine_coarse_difference?: PercentType,
  potential?: GravityType
}

type FermentableInventoryType = {
  amount?: VolumeType | MassType
}

type FermentationProcedureType = {
  name: string,
  type?: string,
  description?: string,
  notes?: string,
  fermentation_steps: [FermentationStepType]
}

type FermentationStepType = {
  name: string,
  description?: string,
  start_temperature?: TemperatureType,
  end_temperature?: TemperatureType,
  step_time?: TimeType,
  free_rise?: boolean,
  start_gravity?: GravityType,
  end_gravity?: GravityType,
  start_ph?: AcidityType,
  end_ph?: AcidityType,
  vessel?: string
}

type HopVarietyBase = {
  name: string,
  origin?: string,
  form?: 'extract' | 'leaf' | 'leaf (wet)' | 'pellet' | 'powder' | 'plug',
  alpha_acid_units: number,
  beta_acid_units?: number
}

type VarietyInformation = HopVarietyBase & {
  type?:
    | 'aroma'
    | 'bittering'
    | 'flavor'
    | 'aroma/bittering'
    | 'bittering/flavor'
    | 'aroma/flavor'
    | 'aroma/bittering/flavor',
  notes?: string,
  percent_lost?: PercentType,
  substitutes?: string,
  oil_content?: OilContentType,
  inventory?: HopInventoryType
}

type HopAdditionType = HopVarietyBase & {
  timing?: TimingType,
  amount?: VolumeType | MassType
}

type IBUEstimateType = {
  method?: IBUMethodType
}

type IBUMethodType = 'Rager' | 'Tinseth' | 'Garetz' | 'Other'
type OilContentType = {
  total_oil_ml_per_100g?: number,
  humulene?: PercentType,
  caryophyllene?: PercentType,
  cohumulone?: PercentType,
  myrcene?: PercentType,
  farnesene?: PercentType,
  geraniol?: PercentType,
  b_pinene?: PercentType,
  linalool?: PercentType,
  limonene?: PercentType,
  nerol?: PercentType,
  pinene?: PercentType,
  polyphenols?: PercentType,
  xanthohumol?: PercentType
}

type HopInventoryType = {
  amount?: VolumeType | MassType
}

type MashProcedureType = {
  name: string,
  grain_temperature: TemperatureType,
  sparge_temperature?: TemperatureType,
  pH?: AcidityType,
  notes?: string,
  mash_steps: [MashStepType]
}

type MashStepType = {
  name: string,
  type:
    | 'infusion'
    | 'temperature'
    | 'decoction'
    | 'souring mash'
    | 'souring wort'
    | 'drain mash tun'
    | 'sparge',
  amount?: VolumeType,
  step_temperature: TemperatureType,
  step_time: TimeType,
  ramp_time?: TimeType,
  end_temperature?: TemperatureType,
  description?: string,
  water_grain_ratio?: SpecificVolumeType,
  infuse_temperature?: TemperatureType,
  start_pH?: AcidityType,
  end_pH?: AcidityType
}

type VolumeType = {
  unit: VolumeUnitType,
  value: number
}

type MassType = {
  unit: MassUnitType,
  value: number
}

type DiastaticPowerType = {
  unit: DiastaticPowerUnitType,
  value: number
}

type TemperatureType = {
  unit: TemperatureUnitType,
  value: number
}

type PressureType = {
  unit: PressureUnitType,
  value: number
}

type AcidityType = {
  unit: AcidityUnitType,
  value: number
}

type TimeType = {
  unit: TimeUnitType,
  value: number
}

type ColorType = {
  unit: ColorUnitType,
  value: number
}

type CarbonationType = {
  unit: CarbonationUnitType,
  value: number
}

type BitternessType = {
  unit: BitternessUnitType,
  value: number
}

type GravityType = {
  unit: GravityUnitType,
  value: number
}

type SpecificHeatType = {
  unit: SpecificHeatUnitType,
  value: number
}

type ConcentrationType = {
  unit: ConcentrationUnitType,
  value: number
}

type SpecificVolumeType = {
  unit: SpecificVolumeUnitType,
  value: number
}

type UnitType = {
  unit: UnitUnitType,
  value: number
}

type CarbonationRangeType = {
  minimum: CarbonationType,
  maximum: CarbonationType
}

type BitternessRangeType = {
  minimum: BitternessType,
  maximum: BitternessType
}

type TemperatureRangeType = {
  minimum: TemperatureType,
  maximum: TemperatureType
}

type ColorRangeType = {
  minimum: ColorType,
  maximum: ColorType
}

type GravityRangeType = {
  minimum: GravityType,
  maximum: GravityType
}

type PercentRangeType = {
  minimum: PercentType,
  maximum: PercentType
}

type VolumeUnitType =
  | 'ml'
  | 'l'
  | 'tsp'
  | 'tbsp'
  | 'floz'
  | 'cup'
  | 'pt'
  | 'qt'
  | 'gal'
  | 'bbl'
  | 'ifloz'
  | 'ipt'
  | 'iqt'
  | 'igal'
  | 'ibbl'
type MassUnitType = 'mg' | 'g' | 'kg' | 'lb' | 'oz'
type DiastaticPowerUnitType = 'Lintner' | 'WK'
type TemperatureUnitType = 'C' | 'F'
type AcidityUnitType = 'pH'
type PressureUnitType = 'kPa' | 'psi' | 'bar'
type TimeUnitType = 'sec' | 'min' | 'hr' | 'day' | 'week' | 'month' | 'year'
type ColorUnitType = 'EBC' | 'Lovi' | 'SRM'
type CarbonationUnitType = 'vols'
type BitternessUnitType = 'IBUs'
type GravityUnitType = 'sg' | 'plato' | 'brix'
type DensityUnitType = 'sg' | 'plato' | 'brix'
type ConcentrationUnitType = 'ppm' | 'ppb' | 'mg/l'
type SpecificHeatUnitType = 'Cal/(g C)' | 'J/(kg K)' | 'BTU/(lb F)'
type SpecificVolumeUnitType =
  | 'qt/lb'
  | 'gal/lb'
  | 'gal/oz'
  | 'l/g'
  | 'l/kg'
  | 'floz/oz'
  | 'm^3/kg'
  | 'ft^3/lb'
type UnitUnitType = '1' | 'unit' | 'each' | 'dimensionless'
type DateType = string
type PercentType = {
  unit: PercentUnitType,
  value: number
}

type PercentUnitType = '%'
type QualitativeRangeType =
  | 'very low'
  | 'low'
  | 'medium low'
  | 'medium'
  | 'medium high'
  | 'high'
  | 'very high'
type VersionType = number
type MiscellaneousBase = {
  name: string,
  type:
    | 'spice'
    | 'fining'
    | 'water agent'
    | 'herb'
    | 'flavor'
    | 'wood'
    | 'other'
}

type MiscellaneousType = MiscellaneousBase & {
  use_for?: string,
  notes?: string,
  inventory?: MiscellaneousInventoryType
}

type MiscellaneousAdditionType = MiscellaneousBase & {
  timing?: TimingType,
  amount?: VolumeType | MassType | UnitType
}

type MiscellaneousInventoryType = {
  amount: VolumeType | MassType | UnitType
}

type PackagingProcedureType = {
  name: string,
  packaged_volume?: VolumeType,
  description?: string,
  notes?: string,
  packaging_vessels?: [PackagingVesselType]
}

type PackagingVesselType = {
  name: string,
  type?: 'keg' | 'bottle' | 'cask' | 'tank' | 'firkin',
  description?: string,
  package_date?: DateType,
  start_temperature?: TemperatureType,
  end_temperature?: TemperatureType,
  step_time?: TimeType,
  start_gravity?: GravityType,
  end_gravity?: GravityType,
  start_ph?: AcidityType,
  end_ph?: AcidityType,
  carbonation?: number,
  vessel_volume?: VolumeType,
  vessel_quantity?: number
}

type RecipeType = {
  name: string,
  type: 'extract' | 'partial mash' | 'all grain',
  author: string,
  coauthor?: string,
  created?: DateType,
  batch_size: VolumeType,
  efficiency: EfficiencyType,
  style?: RecipeStyleType,
  ingredients: IngredientsType,
  mash?: MashProcedureType,
  notes?: string,
  original_gravity?: GravityType,
  final_gravity?: GravityType,
  alcohol_by_volume?: PercentType,
  ibu_estimate?: IBUEstimateType,
  color_estimate?: ColorType,
  beer_pH?: AcidityType,
  carbonation?: number,
  fermentation?: FermentationProcedureType,
  packaging?: PackagingProcedureType,
  boil?: BoilProcedureType,
  taste?: TasteType,
  calories_per_pint?: number
}

type EfficiencyType = {
  conversion?: PercentType,
  lauter?: PercentType,
  mash?: PercentType,
  brewhouse: PercentType
}

type IngredientsType = {
  fermentable_additions: [FermentableAdditionType],
  hop_additions?: [HopAdditionType],
  miscellaneous_additions?: [MiscellaneousAdditionType],
  culture_additions?: [CultureAdditionType],
  water_additions?: [WaterAdditionType]
}

type TasteType = {
  notes: string,
  rating: number
}

type StyleBase = {
  name: string,
  category: string,
  category_number?: integer,
  style_letter?: string,
  style_guide: string,
  type: StyleCategories
}

type StyleType = StyleBase & {
  original_gravity?: GravityRangeType,
  final_gravity?: GravityRangeType,
  international_bitterness_units?: BitternessRangeType,
  color?: ColorRangeType,
  carbonation?: CarbonationRangeType,
  alcohol_by_volume?: PercentRangeType,
  notes?: string,
  aroma?: string,
  appearance?: string,
  flavor?: string,
  mouthfeel?: string,
  overall_impression?: string,
  ingredients?: string,
  examples?: string
}

type RecipeStyleType = StyleBase

type StyleCategories =
  | 'beer'
  | 'cider'
  | 'kombucha'
  | 'mead'
  | 'other'
  | 'soda'
  | 'wine'
type UseType =
  | 'add_to_mash'
  | 'add_to_boil'
  | 'add_to_fermentation'
  | 'add_to_package'
type TimingType = {
  time?: TimeType,
  duration?: TimeType,
  continuous?: boolean,
  specific_gravity?: GravityType,
  pH?: AcidityType,
  step?: integer,
  use?: UseType
}

type WaterBase = {
  name: string,
  calcium: ConcentrationType,
  bicarbonate: ConcentrationType,
  carbonate?: ConcentrationType,
  potassium?: ConcentrationType,
  iron?: ConcentrationType,
  nitrate?: ConcentrationType,
  nitrite?: ConcentrationType,
  flouride?: ConcentrationType,
  sulfate: ConcentrationType,
  chloride: ConcentrationType,
  sodium: ConcentrationType,
  magnesium: ConcentrationType
}

type WaterType = WaterBase & {
  pH?: number,
  notes?: string
}

type WaterAdditionType = WaterBase
