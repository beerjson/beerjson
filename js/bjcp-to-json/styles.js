const styles = [
  {
    name: 'American Light Lager',
    category: 'Standard American Beer',
    category_id: '1',
    style_id: '1A'
  },
  {
    name: 'American Lager',
    category: 'Standard American Beer',
    category_id: '1',
    style_id: '1B'
  },
  {
    name: 'Cream Ale',
    category: 'Standard American Beer',
    category_id: '1',
    style_id: '1C'
  },
  {
    name: 'American Wheat Beer',
    category: 'Standard American Beer',
    category_id: '1',
    style_id: '1D'
  },
  {
    name: 'International Pale Lager',
    category: 'International Lager',
    category_id: '2',
    style_id: '2A'
  },
  {
    name: 'International Amber Lager',
    category: 'International Lager',
    category_id: '2',
    style_id: '2B'
  },
  {
    name: 'International Dark Lager',
    category: 'International Lager',
    category_id: '2',
    style_id: '2C'
  },
  {
    name: 'Czech Pale Lager',
    category: 'Czech Lager',
    category_id: '3',
    style_id: '3A'
  },
  {
    name: 'Czech Premium Pale Lager',
    category: 'Czech Lager',
    category_id: '3',
    style_id: '3B'
  },
  {
    name: 'Czech Amber Lager',
    category: 'Czech Lager',
    category_id: '3',
    style_id: '3C'
  },
  {
    name: 'Czech Dark Lager',
    category: 'Czech Lager',
    category_id: '3',
    style_id: '3D'
  },

  {
    name: 'Munich Helles',
    category: 'Pale Malty European Lager',
    category_id: '4',
    style_id: '4A'
  },
  {
    name: 'Festbier',
    category: 'Pale Malty European Lager',
    category_id: '4',
    style_id: '4B'
  },
  {
    name: 'Helles Bock',
    category: 'Pale Malty European Lager',
    category_id: '4',
    style_id: '4C'
  },

  {
    name: 'German Leichtbier',
    category: 'Pale Bitter European Beer',
    category_id: '5',
    style_id: '5A'
  },
  {
    name: 'Kölsch',
    category: 'Pale Bitter European Beer',
    category_id: '5',
    style_id: '5B'
  },
  {
    name: 'German Helles Exportbier',
    category: 'Pale Bitter European Beer',
    category_id: '5',
    style_id: '5C'
  },
  {
    name: 'German Pils',
    category: 'Pale Bitter European Beer',
    category_id: '5',
    style_id: '5D'
  },
  {
    name: 'Märzen',
    category: 'Amber Malty European Lager',
    category_id: '6',
    style_id: '6A'
  },
  {
    name: 'Rauchbier',
    category: 'Amber Malty European Lager',
    category_id: '6',
    style_id: '6B'
  },
  {
    name: 'Dunkles Bock',
    category: 'Amber Malty European Lager',
    category_id: '6',
    style_id: '6C'
  },
  {
    name: 'Vienna Lager',
    category: 'Amber Bitter European Beer',
    category_id: '7',
    style_id: '7A'
  },
  {
    name: 'Altbier',
    category: 'Amber Bitter European Beer',
    category_id: '7',
    style_id: '7B'
  },
  {
    name: 'Munich Dunkel',
    category: 'Dark European Lager',
    category_id: '8',
    style_id: '8A'
  },
  {
    name: 'Schwarzbier',
    category: 'Dark European Lager',
    category_id: '8',
    style_id: '8B'
  },
  {
    name: 'Doppelbock',
    category: 'Strong European Beer',
    category_id: '9',
    style_id: '9A'
  },
  {
    name: 'Eisbock',
    category: 'Strong European Beer',
    category_id: '9',
    style_id: '9B'
  },
  {
    name: 'Baltic Porter',
    category: 'Strong European Beer',
    category_id: '9',
    style_id: '9C'
  },
  {
    name: 'Weissbier',
    category: 'German Wheat Beer',
    category_id: '10',
    style_id: '10A'
  },
  {
    name: 'Dunkles Weissbier',
    category: 'German Wheat Beer',
    category_id: '10',
    style_id: '10B'
  },
  {
    name: 'Weizenbock',
    category: 'German Wheat Beer',
    category_id: '10',
    style_id: '10C'
  },
  {
    name: 'Ordinary Bitter',
    category: 'British Bitter',
    category_id: '11',
    style_id: '11A'
  },
  {
    name: 'Best Bitter',
    category: 'British Bitter',
    category_id: '11',
    style_id: '11B'
  },
  {
    name: 'Strong Bitter',
    category: 'British Bitter',
    category_id: '11',
    style_id: '11C'
  },
  {
    name: 'British Golden Ale',
    category: 'Pale Commonwealth Beer',
    category_id: '12',
    style_id: '12A'
  },
  {
    name: 'Australian Sparkling Ale',
    category: 'Pale Commonwealth Beer',
    category_id: '12',
    style_id: '12B'
  },
  {
    name: 'English IPA',
    category: 'Pale Commonwealth Beer',
    category_id: '12',
    style_id: '12C'
  },
  {
    name: 'Dark Mild',
    category: 'Brown British Beer',
    category_id: '13',
    style_id: '13A'
  },
  {
    name: 'British Brown Ale',
    category: 'Brown British Beer',
    category_id: '13',
    style_id: '13B'
  },
  {
    name: 'English Porter',
    category: 'Brown British Beer',
    category_id: '13',
    style_id: '13C'
  },

  {
    name: 'Scottish Light',
    category: 'Scottish Ale',
    category_id: '14',
    style_id: '14A'
  },
  {
    name: 'Scottish Heavy',
    category: 'Scottish Ale',
    category_id: '14',
    style_id: '14B'
  },
  {
    name: 'Scottish Export',
    category: 'Scottish Ale',
    category_id: '14',
    style_id: '14C'
  },

  {
    name: 'Irish Red Ale',
    category: 'Irish Beer',
    category_id: '15',
    style_id: '15A'
  },
  {
    name: 'Irish Stout',
    category: 'Irish Beer',
    category_id: '15',
    style_id: '15B'
  },
  {
    name: 'Irish Extra Stout',
    category: 'Irish Beer',
    category_id: '15',
    style_id: '15C'
  },
  {
    name: 'Sweet Stout',
    category: 'Dark British Beer',
    category_id: '16',
    style_id: '16A'
  },
  {
    name: 'Oatmeal Stout',
    category: 'Dark British Beer',
    category_id: '16',
    style_id: '16B'
  },
  {
    name: 'Tropical Stout',
    category: 'Dark British Beer',
    category_id: '16',
    style_id: '16C'
  },
  {
    name: 'Foreign Extra Stout',
    category: 'Dark British Beer',
    category_id: '16',
    style_id: '16D'
  },
  {
    name: 'British Strong Ale',
    category: 'Strong British Ale',
    category_id: '17',
    style_id: '17A'
  },
  {
    name: 'Old Ale',
    category: 'Strong British Ale',
    category_id: '17',
    style_id: '17B'
  },
  {
    name: 'Wee Heavy',
    category: 'Strong British Ale',
    category_id: '17',
    style_id: '17C'
  },
  {
    name: 'English Barley Wine',
    category: 'Strong British Ale',
    category_id: '17',
    style_id: '17D'
  },
  {
    name: 'Blonde Ale',
    category: 'Pale American Ale',
    category_id: '18',
    style_id: '18A'
  },
  {
    name: 'American Pale Ale',
    category: 'Pale American Ale',
    category_id: '18',
    style_id: '18B'
  },
  {
    name: 'American Amber Ale',
    category: 'Amber and Brown American Beer',
    category_id: '19',
    style_id: '19A'
  },
  {
    name: 'California Common',
    category: 'Amber and Brown American Beer',
    category_id: '19',
    style_id: '19B'
  },
  {
    name: 'American Brown Ale',
    category: 'Amber and Brown American Beer',
    category_id: '19',
    style_id: '19C'
  },
  {
    name: 'American Porter',
    category: 'American Porter and Stout',
    category_id: '20',
    style_id: '20A'
  },
  {
    name: 'American Stout',
    category: 'American Porter and Stout',
    category_id: '20',
    style_id: '20B'
  },
  {
    name: 'Imperial Stout',
    category: 'American Porter and Stout',
    category_id: '20',
    style_id: '20C'
  },
  {
    name: 'American IPA',
    category: 'IPA',
    category_id: '21',
    style_id: '21A'
  },
  {
    name: 'Specialty IPA',
    category: 'IPA',
    category_id: '21',
    style_id: '21B'
  },
  {
    name: 'Hazy IPA',
    category: 'IPA',
    category_id: '21',
    style_id: '21C'
  },
  //'Specialty IPA: Belgian IPA',
  //'Specialty IPA: Black IPA',
  //'Specialty IPA: Brown IPA',
  //'Specialty IPA: Red IPA',
  //'Specialty IPA: Rye IPA',
  //'Specialty IPA: White IPA',
  //'Specialty IPA: Brut IPA',
  {
    name: 'Double IPA',
    category: 'Strong American Ale',
    category_id: '22',
    style_id: '22A'
  },
  {
    name: 'American Strong Ale',
    category: 'Strong American Ale',
    category_id: '22',
    style_id: '22B'
  },
  {
    name: 'American Barleywine',
    category: 'Strong American Ale',
    category_id: '22',
    style_id: '22C'
  },
  {
    name: 'Wheatwine',
    category: 'Strong American Ale',
    category_id: '22',
    style_id: '22D'
  },
  {
    name: 'Berliner Weisse',
    category: 'European Sour Ale',
    category_id: '23',
    style_id: '23A'
  },
  {
    name: 'Flanders Red Ale',
    category: 'European Sour Ale',
    category_id: '23',
    style_id: '23B'
  },
  {
    name: 'Oud Bruin',
    category: 'European Sour Ale',
    category_id: '23',
    style_id: '23C'
  },
  {
    name: 'Lambic',
    category: 'European Sour Ale',
    category_id: '23',
    style_id: '23D'
  },
  {
    name: 'Gueuze',
    category: 'European Sour Ale',
    category_id: '23',
    style_id: '23E'
  },
  {
    name: 'Fruit Lambic',
    category: 'European Sour Ale',
    category_id: '23',
    style_id: '23F'
  },
  {
    name: 'Gose',
    category: 'European Sour Ale',
    category_id: '23',
    style_id: '23G'
  },
  {
    name: 'Witbier',
    category: 'Belgian Ale',
    category_id: '24',
    style_id: '24A'
  },
  {
    name: 'Belgian Pale Ale',
    category: 'Belgian Ale',
    category_id: '24',
    style_id: '24B'
  },
  {
    name: 'Bière de Garde',
    category: 'Belgian Ale',
    category_id: '24',
    style_id: '24C'
  },
  {
    name: 'Belgian Blond Ale',
    category: 'Strong Belgian Ale',
    category_id: '25',
    style_id: '25A'
  },
  {
    name: 'Saison',
    category: 'Strong Belgian Ale',
    category_id: '25',
    style_id: '25B'
  },
  {
    name: 'Belgian Golden Strong Ale',
    category: 'Strong Belgian Ale',
    category_id: '25',
    style_id: '25C'
  },

  {
    name: 'Belgian Single',
    category: 'Monastic Ale',
    category_id: '26',
    style_id: '26A'
  },
  {
    name: 'Belgian Dubbel',
    category: 'Monastic Ale',
    category_id: '26',
    style_id: '26B'
  },
  {
    name: 'Belgian Tripel',
    category: 'Monastic Ale',
    category_id: '26',
    style_id: '26C'
  },
  {
    name: 'Belgian Dark Strong Ale',
    category: 'Monastic Ale',
    category_id: '26',
    style_id: '26D'
  },

  //'27. Historical Beer',
  //'Historical Beer: Kellerbier',
  //'Historical Beer: Kentucky Common',
  //'Historical Beer: Lichtenhainer',
  //'Historical Beer: London Brown Ale',
  //'Historical Beer: Piwo Grodziskie',
  //'Historical Beer: Pre-Prohibition Lager',
  //'Historical Beer: Pre-Prohibition Porter',
  //'Historical Beer: Roggenbier',
  //'Historical Beer: Sahti',
  //'Introduction to Specialty-Type Beer',
  //'Entering Specialty-Type Beers',
  //'Entry Instructions',
  //'Base Style',
  //'Specialty Ingredients',
  //'Best Fit',
  //'Judging Specialty-Type Beers',
  //'Overall Assessment',
  //'Base Style',
  //'Multiple Ingredients',
  //'Balance Effects of Specialty-Type Ingredients',

  {
    name: 'Brett Beer',
    category: 'American Wild Ale',
    category_id: '28',
    style_id: '28A'
  },
  {
    name: 'Mixed-Fermentation Sour Beer',
    category: 'American Wild Ale',
    category_id: '28',
    style_id: '28B'
  },
  {
    name: 'Wild Specialty Beer',
    category: 'American Wild Ale',
    category_id: '28',
    style_id: '28C'
  },
  {
    name: 'Straight Sour Beer',
    category: 'American Wild Ale',
    category_id: '28',
    style_id: '28D'
  },
  {
    name: 'Fruit Beer',
    category: 'Fruit Beer',
    category_id: '29',
    style_id: '29A'
  },
  {
    name: 'Fruit and Spice Beer',
    category: 'Fruit Beer',
    category_id: '29',
    style_id: '29B'
  },
  {
    name: 'Specialty Fruit Beer',
    category: 'Fruit Beer',
    category_id: '29',
    style_id: '29C'
  },
  {
    name: 'Grape Ale',
    category: 'Fruit Beer',
    category_id: '29',
    style_id: '29D'
  },
  {
    name: 'Spice, Herb, or Vegetable Beer',
    category: 'Spiced Beer',
    category_id: '30',
    style_id: '30A'
  },
  {
    name: 'Autumn Seasonal Beer',
    category: 'Spiced Beer',
    category_id: '30',
    style_id: '30B'
  },
  {
    name: 'Winter Seasonal Beer',
    category: 'Spiced Beer',
    category_id: '30',
    style_id: '30C'
  },
  {
    name: 'Specialty Spice Beer',
    category: 'Spiced Beer',
    category_id: '30',
    style_id: '30D'
  },
  {
    name: 'Alternative Grain Beer',
    category: 'Alternative Fermentables Beer',
    category_id: '31',
    style_id: '31A'
  },
  {
    name: 'Alternative Sugar Beer',
    category: 'Alternative Fermentables Beer',
    category_id: '31',
    style_id: '31B'
  },
  {
    name: 'Classic Style Smoked Beer',
    category: 'Smoked Beer',
    category_id: '32',
    style_id: '32A'
  },
  {
    name: 'Specialty Smoked Beer',
    category: 'Smoked Beer',
    category_id: '32',
    style_id: '32B'
  },
  //  {
  //    name: 'Wood-Aged Beer',
  //    category: 'Wood Beer',
  //    category_id: '33',
  //    style_id: '33A'
  //  },
  //  {
  //    name: 'Specialty Wood-Aged Beer',
  //    category: 'Wood Beer',
  //    category_id: '33',
  //    style_id: '33B'
  //  },
  {
    name: 'Commercial Specialty Beer',
    category: 'Specialty Beer',
    category_id: '34',
    style_id: '34A'
  },
  {
    name: 'Mixed-Style Beer',
    category: 'Specialty Beer',
    category_id: '34',
    style_id: '34B'
  },
  {
    name: 'Experimental Beer',
    category: 'Specialty Beer',
    category_id: '34',
    style_id: '34C'
  },
  {
    name: 'Dorada Pampeana',
    category: 'Argentine Styles',
    category_id: 'X',
    style_id: 'X1'
  },
  {
    name: 'IPA Argenta',
    category: 'Argentine Styles',
    category_id: 'X',
    style_id: 'X2'
  },
  //'Argentine IPA',
  {
    name: 'Italian Grape Ale',
    category: 'Italian Styles',
    category_id: 'X',
    style_id: 'X3'
  },
  {
    name: 'Catharina Sour',
    category: 'Brazilian Styles',
    category_id: 'X',
    style_id: 'X4'
  },
  {
    name: 'New Zealand Pilsner',
    category: 'New Zealand Styles',
    category_id: 'X',
    style_id: 'X5'
  }
]
module.exports = styles
