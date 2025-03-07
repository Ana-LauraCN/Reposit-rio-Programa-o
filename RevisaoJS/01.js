//definindo

let antes = "palavra";
let letraAntiga = "a";
let letraNova = "3";

function palavra(plv, lentraAntiga, letraNova) {

    //1. Maiuscula
    let maiusculas = plv.toUpperCase();
    console.log("Conversão para maiúscula: ", maiusculas);

    //2. minuscula
    let minusculas = plv.toLowerCase();
    console.log("Conversão para minúsculas: ", minusculas);

    //3. Inverter
    let invertida = plv.split('').reverse().join('');
    console.log("Invertida:", invertida);

     // 4. Substituir
     let substituida = plv.split(letraAntiga).join(letraNova);
     console.log("Substituída:", substituida);
}

palavra(antes, letraAntiga, letraNova);