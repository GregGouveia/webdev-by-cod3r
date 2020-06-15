console.log(typeof Object)
console.log(typeof new Object) // Instanciando uma objeto a partir de uma instancia de uma função chamando o construtor. Poderia usar os () se quisesse

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} // ES  (ES6)
console.log(typeof Produto)
console.log(typeof new Produto()) // Posso deixar sem () tbm

// Eu posso criar um objeto em JS a partir de uma função.