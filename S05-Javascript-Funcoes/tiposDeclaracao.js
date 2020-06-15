console.log(soma(3, 4))

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function(x, y){
    return x - y
}
console.log(sub(3, 4)) // ao contrário de function declaration, sub e named só podem ser chamadas depois de instanciadas.

// named function expression (Bom para o caso de querer o nome da função no stack trace ou enquanto debugo a aplicação)
const mult = function mult(x,y){
    return x * y
}

console.log(mult(3, 4))