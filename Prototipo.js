// Prototipos, Mecanismo por el cual todos los objetos pueden extender sus propiedades y metodos
// i.e los arreglos o array, heredan cada vez que se crea un objeto, podemos usar .length en todos los arreglos
// extender propiedades y/o metodos se llama herencia
 
/* Array.prototype.mayoresQueTres = function(){
    var arregloModificado = [];

    for (let i = 0; i< this.length; i++){
        if (this[i]>3){
            arregloModificado.push(false);
        }
        else arregloModificado.push(this[i]);
    }
    return arregloModificado;
}

var arreglo = [1,2,3,4,5];
var nuevoArreglo = arreglo.mayoresQueTres();
console.log(nuevoArreglo); */

class LatinoAmerica {
    constructor(){
        this.paises = [];

    }
}

LatinoAmerica.prototype.agregarPais = function (pais){
    this.paises.push(pais);
}

var continente = new LatinoAmerica();
continente.agregarPais('Mexico');
console.log(continente.paises);