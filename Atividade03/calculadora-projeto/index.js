
// Atividade 1: Criando um Módulo de Calculadora

import { soma, subtracao, multiplicacao, divisao } from './calculadora.js';

console.log("Soma:: ", soma(10, 5));
console.log("Subtração:: ", subtracao(10, 5));
console.log("Multiplicação:: ", multiplicacao(10, 5));
console.log("Divisão:: ", divisao(10, 5));

//Atividade 2: Utilizando Moment.js para Calcular Idade

import moment from 'moment';

function calcularIdade(anoNascimento) {
 return  anoAtual - anoNascimento
}
const anoAtual = moment().year();
const anoNascimento = 1990;
const idade = calcularIdade(anoNascimento, anoAtual);
console.log(`Idade: ${idade} anos`);