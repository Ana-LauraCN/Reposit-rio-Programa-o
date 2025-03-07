// Definindo 
let numeros = [10, 20, 30, 40, 50];

function manipular(num) {

    // 1. Adicionar 
    let numeroAdicionar = 60; 
    num.push(numeroAdicionar);
    console.log("--- Array após adicionar o número:", num);

    // 2. Remover o primeiro 
    num.shift();
    console.log("--- Array após remover o primeiro número:", num);

    // 3. Encontrar o maior 
    let maiorNumero = Math.max(...num);
    console.log("--- Maior número do array:", maiorNumero);

    // 4. Encontrar o menor 
    let menorNumero = Math.min(...num);
    console.log("--- Menor número do array:", menorNumero);
}


manipular(numeros);
