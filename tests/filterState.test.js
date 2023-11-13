const guestsDatabase = require('../src/data.json');
const { filterState } = require('../src/challenges');

describe('8 - Crie uma função que retorna os elementos de um determinado estado', () => {
  it('Verifica se o valor retornado é um array', () => {
    expect(Array.isArray(filterState(guestsDatabase, 'Wisconsin'))).toBe(true);
  });

  it('Verifica se, ao passar um valor de estado inexistente, retorna um array vazio', () => {
    expect(filterState(guestsDatabase, 'Xablau')).toStrictEqual([]);
  });

  it('Verifica se, ao passar o estado "Wisconsin", retorna um array com 2 elementos', () => {
    expect(filterState(guestsDatabase, 'Wisconsin')).toStrictEqual([
      {
        _id: '644aec92ba6db64320a60fa0',
        isActive: true,
        picture: 'LINK DA IMAGEM',
        age: 37,
        name: 'Frederick Howe',
        purchaseDate: '2023/04/01',
        gender: 'male',
        company: 'MATRIXITY',
        email: 'frederickhowe@matrixity.com',
        phone: '(865) 437-3767',
        country: 'Niue',
        address: {
          number: 498,
          street: 'Ralph Avenue',
          city: 'Chautauqua',
          state: 'Wisconsin'
        }
      },
      {
        _id: '644aec92d0ea040a787158dd',
        isActive: true,
        picture: 'LINK DA IMAGEM',
        age: 50,
        name: 'Ina House',
        purchaseDate: '2023/04/01',
        gender: 'female',
        company: 'ZOARERE',
        email: 'inahouse@zoarere.com',
        phone: '(902) 468-2001',
        country: 'Eritrea',
        address: {
          number: 168,
          street: 'Central Avenue',
          city: 'Allentown',
          state: 'Wisconsin'
        }
      }
    ]);
  });
});
