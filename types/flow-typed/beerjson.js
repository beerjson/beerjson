// @flow

     export type BeerJSON = {|
        version: VersionType,
        fermentables?: FermentableType[],
        miscellaneous_ingredients?: MiscellaneousType[],
        hop_varieties?: VarietyInformation[],
        cultures?: CultureInformation[],
        profiles?: WaterType[],
        styles?: StyleType[],
        mashes?: MashProcedureType[],
        fermentations?: FermentationProcedureType[],
        recipes?: RecipeType[],
        equipments?: EquipmentType[],
        boil?: BoilProcedureType[],
        packaging?: PackagingProcedureType[],
    |}
    export type BoilProcedureType = {|
        name?: string,
        description?: string,
        notes?: string,
        pre_boil_size?: VolumeType,
        boil_time: TimeType,
        boil_steps?: BoilStepType[],
    |}

    export type BoilStepType = {|
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
        chilling_type?:  | "batch" | "inline",
    |}

    export type CultureBase = {|
        name: string,
        type:  | "ale" | "bacteria" | "brett" | "champagne" | "kveik" | "lacto" | "lager" | "malolactic" | "mixed-culture" | "other" | "pedio" | "spontaneous" | "wine",
        form:  | "liquid" | "dry" | "slant" | "culture" | "dregs",
        producer?: string,
        product_id?: string,
    |}

    export type CultureInformation =  CultureBase & {|
        temperature_range?: TemperatureRangeType,
        flocculation?: QualitativeRangeType,
        attenuation_range?: PercentRangeType,
        alcohol_tolerance?: PercentType,
        notes?: string,
        best_for?: string,
        max_reuse?: number,
        inventory?: CultureInventoryType,
    |}

    export type CultureAdditionType =  CultureBase & {|
        attenuation?: PercentType,
        times_cultured?: number,
        timing?: TimingType,
        cell_count_billions?: number,
        amount?:  | VolumeType | MassType | UnitType,
    |}

    export type CultureInventoryType = {|
        liquid?: VolumeType,
        dry?: MassType,
        slant?: VolumeType,
        culture?: VolumeType,
    |}

    export type EquipmentBase = {|
        name: string,
        type?: string,
        form:  | "HLT" | "Mash Tun" | "Lauter Tun" | "Brew Kettle" | "Fermenter" | "Aging Vessel" | "Packaging Vessel",
        maximum_volume: VolumeType,
    |}

    export type EquipmentItemType =  EquipmentBase & {|
        loss: VolumeType,
        grain_absorption_rate?: SpecificVolumeType,
        boil_rate_per_hour?: VolumeType,
        drain_rate_per_minute?: VolumeType,
        weight?: MassType,
        specific_heat?: SpecificHeatType,
        notes?: string,
    |}

    export type EquipmentType = {|
        name: string,
        equipment_items: EquipmentItemType[],
    |}

    export type FermentableBase = {|
        name: string,
        type:  | "dry extract" | "extract" | "grain" | "sugar" | "fruit" | "juice" | "honey" | "other",
        origin?: string,
        producer?: string,
        grain_group?:  | "base" | "caramel" | "flaked" | "roasted" | "specialty" | "smoked" | "adjunct",
        yield: YieldType,
        color: ColorType,
    |}

    export type FermentableType =  FermentableBase & {|
        notes?: string,
        moisture?: PercentType,
        alpha_amylase?: number,
        diastatic_power?: DiastaticPowerType,
        protein?: PercentType,
        soluble_nitrogen_ratio?: number,
        max_in_batch?: PercentType,
        recommend_mash?: boolean,
        inventory?: FermentableInventoryType,
    |}

    export type FermentableAdditionType =  FermentableBase & {|
        timing?: TimingType,
        amount:  | VolumeType | MassType,
    |}

    export type YieldType = {|
        fine_grind?: PercentType,
        coarse_grind?: PercentType,
        fine_coarse_difference?: PercentType,
        potential?: GravityType,
    |}

    export type FermentableInventoryType = {|
        amount?:  | VolumeType | MassType,
    |}

    export type FermentationProcedureType = {|
        name: string,
        type?: string,
        description?: string,
        notes?: string,
        fermentation_steps: FermentationStepType[],
    |}

    export type FermentationStepType = {|
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
        vessel?: string,
    |}

    export type HopVarietyBase = {|
        name: string,
        producer?: string,
        origin?: string,
        year?: string,
        form?:  | "extract" | "leaf" | "leaf (wet)" | "pellet" | "powder" | "plug",
        alpha_acid: PercentType,
        beta_acid?: PercentType,
    |}

    export type VarietyInformation =  HopVarietyBase & {|
        type?:  | "aroma" | "bittering" | "flavor" | "aroma/bittering" | "bittering/flavor" | "aroma/flavor" | "aroma/bittering/flavor",
        notes?: string,
        percent_lost?: PercentType,
        substitutes?: string,
        oil_content?: OilContentType,
        inventory?: HopInventoryType,
    |}

    export type HopAdditionType =  HopVarietyBase & {|
        timing: TimingType,
        amount:  | VolumeType | MassType,
    |}

    export type IBUEstimateType = {|
        method?: IBUMethodType,
    |}

    export type IBUMethodType =  | "Rager" | "Tinseth" | "Garetz" | "Other"
    export type OilContentType = {|
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
        xanthohumol?: PercentType,
    |}

    export type HopInventoryType = {|
        amount?:  | VolumeType | MassType,
    |}

    export type MashProcedureType = {|
        name: string,
        grain_temperature: TemperatureType,
        sparge_temperature?: TemperatureType,
        pH?: AcidityType,
        notes?: string,
        mash_steps: MashStepType[],
    |}

    export type MashStepType = {|
        name: string,
        type:  | "infusion" | "temperature" | "decoction" | "souring mash" | "souring wort" | "drain mash tun" | "sparge",
        amount?: VolumeType,
        step_temperature: TemperatureType,
        step_time: TimeType,
        ramp_time?: TimeType,
        end_temperature?: TemperatureType,
        description?: string,
        water_grain_ratio?: SpecificVolumeType,
        infuse_temperature?: TemperatureType,
        start_pH?: AcidityType,
        end_pH?: AcidityType,
    |}

    export type VolumeType = {|
        unit: VolumeUnitType,
        value: number,
    |}

    export type MassType = {|
        unit: MassUnitType,
        value: number,
    |}

    export type DiastaticPowerType = {|
        unit: DiastaticPowerUnitType,
        value: number,
    |}

    export type TemperatureType = {|
        unit: TemperatureUnitType,
        value: number,
    |}

    export type PressureType = {|
        unit: PressureUnitType,
        value: number,
    |}

    export type AcidityType = {|
        unit: AcidityUnitType,
        value: number,
    |}

    export type TimeType = {|
        unit: TimeUnitType,
        value: number,
    |}

    export type ColorType = {|
        unit: ColorUnitType,
        value: number,
    |}

    export type CarbonationType = {|
        unit: CarbonationUnitType,
        value: number,
    |}

    export type BitternessType = {|
        unit: BitternessUnitType,
        value: number,
    |}

    export type GravityType = {|
        unit: GravityUnitType,
        value: number,
    |}

    export type SpecificHeatType = {|
        unit: SpecificHeatUnitType,
        value: number,
    |}

    export type ConcentrationType = {|
        unit: ConcentrationUnitType,
        value: number,
    |}

    export type SpecificVolumeType = {|
        unit: SpecificVolumeUnitType,
        value: number,
    |}

    export type UnitType = {|
        unit: UnitUnitType,
        value: number,
    |}

    export type CarbonationRangeType = {|
        minimum: CarbonationType,
        maximum: CarbonationType,
    |}

    export type BitternessRangeType = {|
        minimum: BitternessType,
        maximum: BitternessType,
    |}

    export type TemperatureRangeType = {|
        minimum: TemperatureType,
        maximum: TemperatureType,
    |}

    export type ColorRangeType = {|
        minimum: ColorType,
        maximum: ColorType,
    |}

    export type GravityRangeType = {|
        minimum: GravityType,
        maximum: GravityType,
    |}

    export type PercentRangeType = {|
        minimum: PercentType,
        maximum: PercentType,
    |}

    export type VolumeUnitType =  | "ml" | "l" | "tsp" | "tbsp" | "floz" | "cup" | "pt" | "qt" | "gal" | "bbl" | "ifloz" | "ipt" | "iqt" | "igal" | "ibbl"
    export type MassUnitType =  | "mg" | "g" | "kg" | "lb" | "oz"
    export type DiastaticPowerUnitType =  | "Lintner" | "WK"
    export type TemperatureUnitType =  | "C" | "F"
    export type AcidityUnitType =  | "pH"
    export type PressureUnitType =  | "kPa" | "psi" | "bar"
    export type TimeUnitType =  | "sec" | "min" | "hr" | "day" | "week" | "month" | "year"
    export type ColorUnitType =  | "EBC" | "Lovi" | "SRM"
    export type CarbonationUnitType =  | "vols"
    export type BitternessUnitType =  | "IBUs"
    export type GravityUnitType =  | "sg" | "plato" | "brix"
    export type DensityUnitType =  | "sg" | "plato" | "brix"
    export type ConcentrationUnitType =  | "ppm" | "ppb" | "mg/l"
    export type SpecificHeatUnitType =  | "Cal/(g C)" | "J/(kg K)" | "BTU/(lb F)"
    export type SpecificVolumeUnitType =  | "qt/lb" | "gal/lb" | "gal/oz" | "l/g" | "l/kg" | "floz/oz" | "m^3/kg" | "ft^3/lb"
    export type UnitUnitType =  | "1" | "unit" | "each" | "dimensionless"
    export type DateType = string
    export type PercentType = {|
        unit: PercentUnitType,
        value: number,
    |}

    export type PercentUnitType =  | "%"
    export type QualitativeRangeType =  | "very low" | "low" | "medium low" | "medium" | "medium high" | "high" | "very high"
    export type VersionType = number
    export type MiscellaneousBase = {|
        name: string,
        producer?: string,
        type:  | "spice" | "fining" | "water agent" | "herb" | "flavor" | "wood" | "other",
    |}

    export type MiscellaneousType =  MiscellaneousBase & {|
        use_for?: string,
        notes?: string,
        inventory?: MiscellaneousInventoryType,
    |}

    export type MiscellaneousAdditionType =  MiscellaneousBase & {|
        timing?: TimingType,
        amount?:  | VolumeType | MassType | UnitType,
    |}

    export type MiscellaneousInventoryType = {|
        amount:  | VolumeType | MassType | UnitType,
    |}

    export type PackagingProcedureType = {|
        name: string,
        packaged_volume?: VolumeType,
        description?: string,
        notes?: string,
        packaging_vessels?: PackagingVesselType[],
    |}

    export type PackagingVesselType = {|
        name: string,
        type?:  | "keg" | "bottle" | "cask" | "tank" | "firkin",
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
        vessel_quantity?: number,
    |}

    export type RecipeType = {|
        name: string,
        type:  | "extract" | "partial mash" | "all grain",
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
        apparent_attenuation?: PercentType,
        fermentation?: FermentationProcedureType,
        packaging?: PackagingProcedureType,
        boil?: BoilProcedureType,
        taste?: TasteType,
        calories_per_pint?: number,
    |}

    export type EfficiencyType = {|
        conversion?: PercentType,
        lauter?: PercentType,
        mash?: PercentType,
        brewhouse: PercentType,
    |}

    export type IngredientsType = {|
        fermentable_additions: FermentableAdditionType[],
        hop_additions?: HopAdditionType[],
        miscellaneous_additions?: MiscellaneousAdditionType[],
        culture_additions?: CultureAdditionType[],
        water_additions?: WaterAdditionType[],
    |}

    export type TasteType = {|
        notes: string,
        rating: number,
    |}

    export type StyleBase = {|
        name: string,
        category: string,
        category_number?: number,
        style_letter?: string,
        style_guide: string,
        type: StyleCategories,
    |}

    export type StyleType =  StyleBase & {|
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
        examples?: string,
    |}

    export type RecipeStyleType =  StyleBase 


    export type StyleCategories =  | "beer" | "cider" | "kombucha" | "mead" | "other" | "soda" | "wine"
    export type UseType =  | "add_to_mash" | "add_to_boil" | "add_to_fermentation" | "add_to_package"
    export type TimingType = {|
        time?: TimeType,
        duration?: TimeType,
        continuous?: boolean,
        specific_gravity?: GravityType,
        pH?: AcidityType,
        step?: number,
        use?: UseType,
    |}

    export type WaterBase = {|
        name: string,
        producer?: string,
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
        magnesium: ConcentrationType,
    |}

    export type WaterType =  WaterBase & {|
        pH?: number,
        notes?: string,
    |}

    export type WaterAdditionType =  WaterBase 


