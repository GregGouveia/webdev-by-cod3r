console.log('01)', '1' == 1) == // é igual porque a string tem o mesmo valor que o number
console.log('02)', '1' === 1) // === estritamente igual. Significa que o JS considera tanto o valor quanto o tipo do dado
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0) // representa a data base do JS que é 01/01/1970, também conhecido como Marco Zero
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())
console.log('12)', undefined == null)
console.log('13)', undefined === null)