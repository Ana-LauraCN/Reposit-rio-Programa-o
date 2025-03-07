//defindindo

let num1 = 15;
let num2 = 5;

function operecao(num1, num2){

    //soma
    let soma = num1 + num2;
    console.log (`---- A soma de ${num1} + ${num2} é:`, soma);

    //subtração
    let sub = num1 - num2;
    console.log (`---- A subtração de ${num1} - ${num2} é:`, sub);

    //multiplicação
    let mul = num1 * num2;
    console.log (`---- A multiplicação de ${num1} * ${num2} é:`, mul);

    //divisão
    let div = num1 / num2;
    console.log (`---- A divisão de ${num1} por ${num2} é:`, div);

    let maiorQue = num1 > num2;
    console.log(`O primeiro número (${num1}) é maior que o segundo número (${num2})? ${maiorQue}`);
}

operecao(num1, num2);