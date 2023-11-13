const { addMusics, playlist } = require('../src/challenges');

describe('3 - Crie uma função que adiciona músicas em uma playlist', () => {
  it('Verifica se o array playlist existe e está vazio', () => {
    expect(playlist).toEqual([]);
  });

  it('Retorne o array playlist com 1 objeto depois de chamar a função addMusics 1 vez', () => {
    addMusics('Survivor', 'Eye of the Tiger', 2.62);
    expect(playlist).toEqual([ { artist: 'Survivor', music: 'Eye of the Tiger', musicTime: 2.62 } ]);
  });

  it('Retorne o array playlist com 2 objetos depois de chamar a função addMusics 2 vezes', () => {
    addMusics('Roy Orbison', 'Pretty Woman', 2.73);
    expect(playlist).toEqual([
      { artist: 'Survivor', music: 'Eye of the Tiger', musicTime: 2.62 },
      { artist: 'Roy Orbison', music: 'Pretty Woman', musicTime: 2.73 }
    ]);
  });

  it('Retorne o array playlist com 3 objetos depois de chamar a função addMusics 3 vezes', () => {
    addMusics('Lady Gaga', 'Just Dance', 2.66);
    expect(playlist).toEqual([
      { artist: 'Survivor', music: 'Eye of the Tiger', musicTime: 2.62 },
      { artist: 'Roy Orbison', music: 'Pretty Woman', musicTime: 2.73 },
      { artist: 'Lady Gaga', music: 'Just Dance', musicTime: 2.66 }
    ]);
  });
});
