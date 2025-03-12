//código

//importar um módulo

import {calcuIMC, tabelaIMC} from "./CalculadoraIMC.js"

console.log(">>> Calculadra IMC <<<")
console.table(tabelaIMC)

const peso = 80
const altura = 1.70

const resultado = calcuIMC(peso,altura)

console.log("Resultado IMC: ")
console.log(resultado)

import moment from "moment";

const hoje = moment().locale('pt-br')

console.log("Data:")
console.log(hoje.format("DD/MM/YYYY"))