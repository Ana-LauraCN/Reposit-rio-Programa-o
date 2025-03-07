let idade = 70;

//menor de idade

function verifIdade(idade){

    //menor de idade
    if (idade < 18){
        console.log ("---- A pessoa é menor de idade");

    //maioe de idade
    } else if (idade >= 18 && idade < 65){
        console.log ("---- A pessoa é maior de idade");

    //idosa
    } else if (idade >= 65){
        console.log ("---- A pessoa é idosa");
    }
}

verifIdade(idade);