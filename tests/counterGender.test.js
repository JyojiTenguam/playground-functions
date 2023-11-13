const guestsDatabase = require('../src/data.json');
const { counterGender } = require('../src/challenges');

describe('7 - Crie uma função que conta a quantidade de pessoas por gênero', () => {
  it('Verifica se o valor retornado é um objeto', () => {
    expect(typeof counterGender(guestsDatabase)).toBe('object');
  });

  it('Retorne 49 homens e 55 mulheres', () => {
    expect(counterGender(guestsDatabase)).toStrictEqual({ male: 49, female: 55 });
  });
});
