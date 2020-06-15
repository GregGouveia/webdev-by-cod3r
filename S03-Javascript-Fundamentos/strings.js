const escola = "Cod3r"

console.log(escola.charAt(4)) // Caracter que está no índice da String
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // Valor na tabela ASCII / Unicode
console.log(escola.indexOf('3'))

console.log(escola.substring(1)) // passando índice inicial
console.log(escola.substring(0,3)) // passando íncide incial e final

console.log('Escola '.concat(escola.concat("!")))
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\w/g, 'e')) // exemplo com regex com variável regular

console.log('Ana, Maria, Pedro'.split(','))
console.log('Ana, Maria, Pedro'.split(/,/)) // regex
