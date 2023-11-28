const menu = require('./mcDonalds');
const guestsDatabase = require('./data.json');

// =================================================
// PARTE 1
// =================================================

// Requisito 1 - Crie uma função que divida uma frase
function splitSentence(string) {
  const countWords = string.split(' ');

  return countWords;
}
// Requisito 2 - Crie uma função que calcula a quantidade de pontos em um campeonato de futebol
function footballPoints(wins, ties) {
  const points = wins * 3 + ties;

  return points;
}
// Requisito 3 - Crie uma função que adiciona músicas em uma playlist
const playlist = [];

function addMusics(artistName, musicName, musicTime) {
  // Cria um objeto com as informações da música
  const music = {
    artist: artistName,
    music: musicName,
    musicTime: musicTime,
  };

  // Adiciona o objeto à playlist
  playlist.push(music);

  return playlist;
}

// =================================================
// PARTE 2
// =================================================

// Requisito 4 - Crie uma função que retorna o produto mais caro de acordo com uma categoria
function moreExpensive(data, category) {
  let mostExpensiveProduct = null;
  const products = data[category]; // Assuming data is an object with categories and each category has an array of products

  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    if (!mostExpensiveProduct || product.price > mostExpensiveProduct.price) {
      mostExpensiveProduct = product;
    }
  }

  const outputString = `O produto mais caro é: ${mostExpensiveProduct.name}, que custa: R$${mostExpensiveProduct.price.toFixed(2)}.`;

  return outputString;
}
// Requisito 5 - Crie uma função que verifica se um determinado item já existe
function checkItem(data, category, item) {
  // Verifica se a categoria existe na base de dados
  if (!(category in data)) {
    return false;
  }

  // Verifica se o item existe na categoria
  const itemExists = data[category].some(product => product.name === item);

  return itemExists;
}
// Requisito 6 - Crie uma função que adiciona um novo item caso ele ainda não exista

// Requisito 7 - Crie uma função que conta a quantidade de pessoas por gênero

// =================================================
// PARTE 3
// =================================================

// Requisito 8 - Crie uma função que retorna os elementos de um determinado estado

// Requisito 9 - Crie uma função que altera a propriedade `picture`

// Requisito 10 - Crie um função que gera um relatório

// Não modifique as linhas abaixo
module.exports = {
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => { }),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => { }),
  addMusics: typeof addMusics === 'function' ? addMusics : (() => { }),
  playlist: typeof playlist === 'undefined' ? [] : playlist,
  moreExpensive: typeof moreExpensive === 'function' ? moreExpensive : (() => { }),
  checkItem: typeof checkItem === 'function' ? checkItem : (() => { }),
  addNewItem: typeof addNewItem === 'function' ? addNewItem : (() => { }),
  counterGender: typeof counterGender === 'function' ? counterGender : (() => { }),
  filterState: typeof filterState === 'function' ? filterState : (() => { }),
  changePicture: typeof changePicture === 'function' ? changePicture : (() => { }),
  generateReport: typeof generateReport === 'function' ? generateReport : (() => { }),
};
