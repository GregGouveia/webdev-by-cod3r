const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()
// a funcao carrega consigo o local onde ela foi definida, logo, nesse caso acha apenas o Global e não o Local.