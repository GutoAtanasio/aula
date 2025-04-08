// Objetos em JavaScript

// Informações do Civic G10

// function LigarCarro() {
//     console.log("Carro ligado!")
// }

const carro = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2020,
    cor: "branco",
    corDoInterior: "bege",
    cambio: "automatico",
    ePremio: true,
    preco: 120000,
    precoDeRevenda: 80000,
    ligar: () => {
        console.log ("Ligar carro");
    },
    cliente: {
        nome: "Gabriel",
        cpf: "123.456.789-00",
        idade: 18,
        dataDaCompra: "05/04/2025",
    }
};

console.log (carro);

// Acessando o preco do carro
console.log(carro.preco);

console.log (carro["preco"], carro["modelo"]);

// Acessando o nome do cliente
console.log (carro.cliente.nome);

// Vamos criar uma mensagem alertando que o carro ja esta pronto para ser retirado
const mensagem = "Olá, " + carro.cliente.nome + " seu carro: " + carro.marca + " " + carro.modelo + " está pronto para retirada"

const mensagem2 = `Olá, ${carro.cliente.nome}, seu carro ${carro.marca} ${carro.modelo} está pronto para retirada.`

console.log(mensagem)

console.log(mensagem2)

// Ligando o carro
carro.ligar()


//...................................................................................
// Exercicio
const livro = {
    titulo: "Senhor dos aneis",
    editora: "Gutão",
    ano: 2020,
    tipoDeCapa: "dura",
    numeroDePaginas: 250,
    preco: 300,
    locado: () => {
        console.log ("Disponivel");
    },
};

// Vamos criar uma mensagem alertando que o livro está disponivel
const mensagemlivro = `Olá, o ${livro.titulo}, da editora ${livro.editora}, está pronto para retirada.`

console.log(mensagemlivro)

livro.locado()
//..................................................................................


