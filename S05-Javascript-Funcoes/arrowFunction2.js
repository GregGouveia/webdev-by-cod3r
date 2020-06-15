function Pessoa () {
    this.idade= 0 

    setInterval(() => {
        this.idade++ // neste contexto de THIS Lexico, o this não varia de acordo com quem está chamando 
        console.log(this.idade)
    }, 1000)
}

new Pessoa