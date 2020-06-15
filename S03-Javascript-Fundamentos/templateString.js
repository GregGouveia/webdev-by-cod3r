const nome = 'Rebeca'
const concatenacao = "Olá " + nome + "!"
// usar crase / back chick 
// usar ${} para abrir e fechar a interpolação
const template = ` 
    Olá
    ${nome}!`
console.log(concatenacao, template)

// expressions...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() // função arrow para transformar tudo em MAIÚSCULO
console.log(`Ei... ${up('cuidado')}!`) //