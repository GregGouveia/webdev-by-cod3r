 //dot notation
 console.log(Math.ceil(6.1))

 const obj1 = {}
 obj1.nome = 'Bola'
 //obj1['nome' = 'Bola2']
 console.log(obj1.nome)

 function Obj (nome){
     this.nome = nome // exponho esse atributo de maneira pública
     this.exec = function(){
         console.log('Exec...')
     }
 }

 const Obj2 = new Obj('Cadeira')
 const objt3 = new Obj('Mesa')
console.log(Obj2.nome)
console.log(objt3.nome)
objt3.exec()