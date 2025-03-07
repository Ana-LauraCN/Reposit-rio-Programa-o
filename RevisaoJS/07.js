// Definindo 
let frutas = ["Maçã", "Banana", "Abacaxi", "Laranja"];

function manipular(array) {
    // 1. Converter todas as strings para maiúsculas
    let maiusculas = array.map(fruta => fruta.toUpperCase());
    console.log("--- Maiúsculas:", maiusculas);

    // 2. Filtrar as strings que começam com a letra 'A'
    let comA = array.filter(fruta => fruta.startsWith('A'));
    console.log("--- Começam com 'A':", comA);

    // 3. Criar um novo array com o comprimento de cada string
    let comprimentos = array.map(fruta => fruta.length);
    console.log("--- Comprimento de cada string:", comprimentos);
}

// Chama a função com o array de frutas
manipular(frutas);
