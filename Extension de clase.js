// Nos permite tener una clase GENERAL que le hereda propiedades y metodos a otras
class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        console.log("Hola mi nombre es " + this.nombre + ' y tengo ' + this.edad);
    }
}

class Programador extends Persona {
    constructor(nombre,edad,experiencia){
         //para que las propiedades sean heredadas usamos super, dentro del parentesis se escriben las propiedades a heredar
         super(nombre,edad);
         this.experiencia = experiencia;
    }
    codear(){
        console.log(
            'Soy ' +
               this.nombre +
               ' . Codeo desde hace  ' +
               this.experiencia +
               ' años'
         );
    }
}

var Martin = new Persona('Miguel',27);
var programador = new Programador('Maria', 28, 4);
Martin.saludar();
programador.codear();
programador.saludar();

