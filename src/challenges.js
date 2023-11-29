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

  for (let index = 0; index < products.length; index += 1) {
    const product = products[index];

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
  const itemExists = data[category].some((product) => product.name === item);

  return itemExists;
}
// Requisito 6 - Crie uma função que adiciona um novo item caso ele ainda não exista

// Requisito 7 - Crie uma função que conta a quantidade de pessoas por gênero

function counterGender(data) {
  let maleCount = 0;
  let femaleCount = 0;

  for (let index = 0; index < data.guests.length; index += 1) {
    const person = data.guests[index];

    if (person.gender === 'male') {
      maleCount += 1;
    } else if (person.gender === 'female') {
      femaleCount += 1;
    }
  }

  return { male: maleCount, female: femaleCount };
}
// =================================================
// PARTE 3
// =================================================

// Requisito 8 - Crie uma função que retorna os elementos de um determinado estado
function filterState(data, state) {
  // Filtra os elementos com o estado desejado
  const filteredData = data.guests.filter((element) => element.address.state === state);

  return filteredData;
}
// Requisito 9 - Crie uma função que altera a propriedade `picture`
function changePicture(data, link) {
  // Mapeia sobre todos os elementos da base de dados
  const newData = data.guests.map((item) => {
    // Cria um novo objeto para evitar modificar o original
    const newItem = { ...item };

    // Altera a propriedade "picture" para o novo link
    newItem.picture = link;

    // Retorna o novo objeto
    return newItem;
  });

  return newData;
}
// Requisito 10 - Crie um função que gera um relatório
// Função para calcular a média de idade
function calculateAverageAge(data) {
  const totalAge = data.guests.reduce((acc, person) => acc + person.age, 0);
  return totalAge / data.guests.length;
}

// Função para gerar o relatório
function generateReport(data) {
  // Calcula o total de convidados
  const totalGuests = data.guests.length;

  // Calcula a quantidade de pessoas por gênero
  const totalGender = data.guests.reduce((acc, person) => {
    acc[person.gender] = (acc[person.gender] || 0) + 1;
    return acc;
  }, {});

  // Calcula a média de idade com 2 casas decimais
  const avgAge = calculateAverageAge(data);

  // Obtém a lista de países sem repetições e ordenada
  const countries = [...new Set(data.guests.map((person) => person.country))].sort();

  // Cria o objeto de relatório
  const report = {
    totalGuests,
    totalGender,
    avgAge: Number(avgAge.toFixed(2)),
    countries,
  };

  return report;
}

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
