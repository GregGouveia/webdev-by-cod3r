let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 // 1 = true  e 0 = false
console.log(!!isAtivo)
console.log(!isAtivo)

console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!![])
console.log({})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))

let nome = ''
console.log(nome || 'Desconhecido') // fazer uma operação lógica em cima de uma String

let nome1 = 'Greg'
console.log(nome1 || 'Desconhecido') // fazer uma operação lógica em cima de uma String
