// Definindo 
let livro = { titulo: "O Senhor dos Anéis", autor: "J.R. Tolkien", ano: 1954 };

function manipularLivro(obj) {
    // 1. Desestruturar
    const { titulo, autor } = obj;
    console.log("Título:", titulo);
    console.log("Autor:", autor);

    // 2. Função e retorna
    function obterInfoLivro({ titulo, autor }) {
        return `Título: ${titulo}, Autor: ${autor}`;
    }

    // Exibe a string com as informações do livro
    console.log(obterInfoLivro(obj));
}

// Chama a função 
manipularLivro(livro);
