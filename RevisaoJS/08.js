// Definindo 
let pessoa = { nome: "Carlos", idade: 28, cidade: "São Paulo" };

function manipularObjeto(obj) {
    // 1. Adicionar 
    obj.profissao = "Desenvolvedor"; 
    console.log("Objeto após adicionar nova propriedade:", obj);

    // 2. Remover 
    delete obj.idade; 
    console.log("Objeto após remover a propriedade 'idade':", obj);

    // 3. Listar 
    let propriedades = Object.keys(obj); 
    console.log("Propriedades do objeto:", propriedades);
}

// Chama 
manipularObjeto(pessoa);
