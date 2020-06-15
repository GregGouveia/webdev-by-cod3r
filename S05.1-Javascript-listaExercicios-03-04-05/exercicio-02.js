/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */

function classificaTriangulo (lado1, lado2, lado3) {
    if(lado1 == lado2 && lado2 == lado3){
        return 'Este é um triângulo do tipo Equilátero, pois todos os seus lados são iguais.'
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'Este é um triângulo do tipo Isósceles, pois apenas dois de seus lados são iguais.'        
    }else { 
        return 'Este é um triângulo do tipo Escaleno, pois nenhum de seus lados são iguais.'
    }
}

console.log(classificaTriangulo(2, 2, 2));
console.log(classificaTriangulo(2, 3, 3));
console.log(classificaTriangulo(2, 3, 4));

