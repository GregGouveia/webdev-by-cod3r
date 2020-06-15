const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Break faz um desvio de fluxo para fora do bloco IF enquanto o CONTINUE faz um desvio de fluxo para dentro do bloco IF.

for (x in nums){
    if (x == 5) {
    break // Break ae em cima do bloco mais próximo dele, sendo FOR, WHILE ou SWITCH
}
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue // passa para a próxima estrutura de laço 
    }
    console.log(`${y} = ${nums[y]}`)
}

// evitar fazer da forma a seguir >> rótulos
externo: for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}

