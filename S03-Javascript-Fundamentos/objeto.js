const prod1 = { } // forma literal de criar um objeto vazio 
// OBJETO em JS é uma coleção de Chaves e Valores / Key Value Pair
prod1.nome = "Celular Ultra Mega"
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}
console.log(prod2)


'{ "nome": "Camisa Polo", "prece" 79.90}' // formato JSON, que não é um OBJETO 
// Embora JSON seja Javascript Object Notation, JSON é textual e Objeto são atributos, comportamentos, código etc 
