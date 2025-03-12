export function calcuIMC(peso, altura){
    return peso / (altura * altura)
}

export const tabelaIMC = [
    {Limite: 18.5, classificacao: "Magreza"},
    {Limite: 24.9, classificacao: "Normal"},
    {Limite: 29.9, classificacao: "Sobrepeso"},
    {Limite: 34.9, classificacao: "Obesidade Grau I"},
    {Limite: 39.9, classificacao: "Obesidade Grau II"},
    {Limite: 40.00, classificacao: "Obesidade Grau III"},
]