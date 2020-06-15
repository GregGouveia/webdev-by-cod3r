{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera) 
            }
        }
    }
}
console.log(sera) 
// var estrapola o escopo

function teste(){
    var local = 123
}

// teste()
// console.log(local) // Dá erro pois dentro a variável var dentro da function respeita o escopo, ou seja, só existe dentro do escopo local

// window seria a forma de criar variável global