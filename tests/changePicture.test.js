const guestsDatabase = require('../src/data.json');
const { changePicture } = require('../src/challenges');

describe('9 - Crie uma função que altera a propriedade `picture`', () => {
  it('Verifica se o valor retornado é um array', () => {
    expect(Array.isArray(changePicture(guestsDatabase, 'https://picsum.photos/200/300'))).toBe(true);
  });
  
  it('Verifica se todos os elementos possuem o valor "https://picsum.photos/200/300" para a chave "picture"', () => {
    const newArray = changePicture(guestsDatabase, 'https://picsum.photos/200/300');
    const verifyPictures = () => {
      for (let index = 0; index < newArray.length; index += 1) {
        if (newArray[index].picture !== 'https://picsum.photos/200/300') {
          return false;
        }
      }
      return true;
    }
    expect(verifyPictures()).toBe(true);
    newArray[12].picture = 'wow';
    expect(verifyPictures()).toBe(false);
  });
});
