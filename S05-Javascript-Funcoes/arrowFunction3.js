let comparaComThis = function (param) {
    console.log(this === param)  // Neste caso, estou chamado o this em um escoppo global
}

comparaComThis(global)

let obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports) // isso é devido ao contexto do Node.js

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)