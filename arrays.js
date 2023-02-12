var listaDeCompras = [];
listaDeCompras[3] = 'tomates';

listaDeCompras[1] = 'lechuga';

console.log(listaDeCompras.length);

var elementoArray = listaDeCompras[1];
console.log(elementoArray);

//metodos
// los arreglos son un objeto, por tanto tienen metodos

var colores = ['amarillo','azul'];
colores.push('rojo');  //agrega un elemento al final
colores.unshift('verde'); //agrega un elemento al inicio
colores.pop(); //elimina y devuelve el ultimo elemento
colores.shift(); //elimina y devuelve el primer elemento
var incluye = colores.includes('azul'); //pregunta si hay un elemento

console.log(colores);

var numeros = [1,3,5,7,9];
var mayorCinco = numeros.every( (num)=> {return num%2!=0;}) //every comprueba si todos los elementos de una lista cumplen cierta condicion, en este casi si son impares
console.log(mayorCinco);

//metodos split y join convertir string en arrewglo y visceversa

var palabra = 'Henri';
var palabraSeparada = palabra.split('');
console.log(palabraSeparada);
palabraSeparada.pop();
palabraSeparada.push('y');
console.log(palabraSeparada);

var palabraArreglada = palabraSeparada.join('');
console.log(palabraArreglada);

//metodo foreach ME DEJA RECORRER TODOS LOS ELEMENTOS DE UN ARREGLO, no modifica el arreglo, para modificar esta map
var nums = [1,2,3,4];
nums.forEach((num)=>console.log(num));
nums.forEach((varr)=> {
    if (varr>2){
        console.log(varr);
    }    
}
);

// metodo map  va por todos los elementos de un array, crea una copia del arreglo original y le puede realizar cambios
var masUno= nums.map((xd)=> {
    return xd+1;
})

console.log(masUno);

// bucles en arreglos

//for 
var arr = [1,2,3,4,5];
for (var i = 0; i<arr.length;i++) {
    console.log(arr[i]);
}

function encontrarLetraP(string){
    var letras = string.split('');
    for (var i = 0; i<letras.length;i++) {
        if (letras[i]==='p'){
            return console.log('Si contiene a P');
        }
    }
}

encontrarLetraP('Henry');
encontrarLetraP('papa');

// while

var arre=[];
while (arre.length<5){
    arre.push('boom');
}
console.log(arre);