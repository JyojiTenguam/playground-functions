const guestsDatabase = require('../src/data.json');
const { generateReport } = require('../src/challenges');

describe('10 - Crie um função que gera um relatório', () => {
  it('Verifica se o valor retornado é um objeto', () => {
    expect(typeof generateReport(guestsDatabase)).toBe('object');
  });

  it('Verifica se o objeto retornado possui as propriedades: "totalGuests", "totalGender", "avgAge" e "countries"', () => {
    expect(generateReport(guestsDatabase)).toHaveProperty('totalGuests');
    expect(generateReport(guestsDatabase)).toHaveProperty('totalGender');
    expect(generateReport(guestsDatabase)).toHaveProperty('avgAge');
    expect(generateReport(guestsDatabase)).toHaveProperty('countries');
  });

  it('Verifica se os valores das propriedades estão corretos', () => {
    expect(generateReport(guestsDatabase).totalGuests).toBe(104);
    expect(generateReport(guestsDatabase).totalGender).toStrictEqual({ male: 49, female: 55 });
    expect(generateReport(guestsDatabase).avgAge).toBe(32.94);
    expect(generateReport(guestsDatabase).countries).toStrictEqual([
      'Albania',
      'Algeria',
      'Anguilla',
      'Argentina',
      'Aruba',
      'Azerbaijan',
      'Bahrain',
      'Bangladesh',
      'Benin',
      'Bermuda',
      'Bolivia',
      'Botswana',
      'Bouvet Island',
      'Brazil',
      'Brunei Darussalam',
      'Bulgaria',
      'Burundi',
      'Cayman Islands',
      'Central African Republic',
      'Chad',
      'Chile',
      'China',
      'Cocos (Keeling Islands)',
      'Colombia',
      'Comoros',
      "Cote D'Ivoire (Ivory Coast)",
      'Croatia (Hrvatska)',
      'Eritrea',
      'Faroe Islands',
      'French Guiana',
      'French Southern Territories',
      'Germany',
      'Greenland',
      'Guatemala',
      'Guinea',
      'Heard and McDonald Islands',
      'Hong Kong',
      'Iceland',
      'India',
      'Iraq',
      'Ireland',
      'Israel',
      'Italy',
      'Jamaica',
      'Japan',
      'Kazakhstan',
      'Kuwait',
      'Laos',
      'Lesotho',
      'Liberia',
      'Lithuania',
      'Malaysia',
      'Maldives',
      'Malta',
      'Mauritania',
      'Mayotte',
      'Mozambique',
      'Netherlands Antilles',
      'New Zealand',
      'Nicaragua',
      'Niue',
      'Panama',
      'Papua New Guinea',
      'Poland',
      'Puerto Rico',
      'Russian Federation',
      'Saint Kitts and Nevis',
      'Slovenia',
      'Sweden',
      'Switzerland',
      'Syria',
      'Tajikistan',
      'Uganda',
      'United Arab Emirates',
      'Uruguay',
      'Uzbekistan',
      'Vanuatu',
      'Vatican City State (Holy See)',
      'Venezuela',
      'Virgin Islands (British)',
      'Virgin Islands (US)',
      'Yugoslavia',
      'Zambia',
      'Zimbabwe'
    ]);
  });
});
