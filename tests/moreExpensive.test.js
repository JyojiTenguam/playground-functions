const menu = require('../src/mcDonalds');
const { moreExpensive } = require('../src/challenges');

describe('4 - Crie uma função que retorna o produto mais caro de acordo com uma categoria', () => {
  it('Retorne "Duplo Quarterão" quando a categoria for "sandwiches"', () => {
    expect(moreExpensive(menu, 'sandwiches')).toBe('O produto mais caro é: Duplo Quarterão, que custa: R$41.90.');
  });

  it('Retorne "Chicken McNuggets - 10 unidades" quando a categoria for "sideDishes"', () => {
    expect(moreExpensive(menu, 'sideDishes')).toBe('O produto mais caro é: Chicken McNuggets - 10 unidades, que custa: R$16.90.');
  });

  it('Retorne "McFlurry Ovomaltine Caramelo" quando a categoria for "desserts"', () => {
    expect(moreExpensive(menu, 'desserts')).toBe('O produto mais caro é: McFlurry Ovomaltine Caramelo, que custa: R$13.90.');
  });
});
