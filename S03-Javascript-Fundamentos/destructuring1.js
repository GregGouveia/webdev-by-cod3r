// novo recurso ES2015
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa // tire de dentro do objeto o atribudo nome e idade
console.log(nome, idade)

const {nome: n, idade: i } = pessoa
console.log(n,1)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)

// const { conta: {ag, num } } = pessoa           // ERRO!
// console.log(ag, num) // Preciso garantir que o dado esteja setado até eu chegar no último dado