let idade = 70;

//menor de idade

function verifIdade(idade){
    if (idade < 18){
        console.log ("---- A pessoa é menor de idade");
    } else if (idade >= 18 && idade < 65){
        console.log ("---- A pessoa é maior de idade");
    } else if (idade >= 65){
        console.log ("---- A pessoa é idosa");
    }
}

verifIdade(idade);