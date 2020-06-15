const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // não gera erro, só diz que é indefinido.

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, "test") // adicionar um elemento no array
console.log(valores)

console.log(valores.pop()) // retirar um elemento do array
delete valores[0] // deletar um elemento do array
console.log(valores)

console.log(typeof valores)