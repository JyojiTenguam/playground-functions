const menu = require('../src/mcDonalds');
const { checkItem } = require('../src/challenges');

describe('5 - Crie uma função que verifica se um determinado item já existe', () => {
  it('Retorne "true" quando a categoria for "drinks" e o elemento for "Coca-Cola 300ml"', () => {
    expect(checkItem(menu, 'drinks', 'Coca-Cola 300ml')).toBe(true);
  });

  it('Retorne "true" quando a categoria for "sandwiches" e o elemento for "Big Tasty"', () => {
    expect(checkItem(menu, 'sandwiches', 'Big Tasty')).toBe(true);
  });

  it('Retorne "false" quando a categoria for "sideDishes" e o elemento for "Legumes no Vapor"', () => {
    expect(checkItem(menu, 'sideDishes', 'Legumes no Vapor')).toBe(false);
  });
});
