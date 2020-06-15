const funcs = []

for (let i=0; i<10; i++)
{
    funcs.push(function(){
        console.log(i)
    })
}
// nesse caso, a variável let i tem "memória" e respeita o escopo de onde ela foi definida.
// conceito de clojure
funcs[2]()
funcs[8]()
