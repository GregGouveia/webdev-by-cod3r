const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar() // Nesse momento está usando o THIS do metodo falar dentro da funcao saudacao
const falar = pessoa.falar
falar() // Há um conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

