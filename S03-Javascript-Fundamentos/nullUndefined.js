/*
    Conceitualmente, referencia aponta para um lugar na memória,
    enquanto passagem de valor, aponta para um conteúdo de algo
    null faz com que a variável não aponte para nenhum lugar.
    Se quero zerar uma referência, posso usar o NULL.
*/

let valor // nao incializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)