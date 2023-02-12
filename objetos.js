// puede guardar informacion y funcionalidades
// LOS OBJETOS TIENEN KEY (identificador) Y VALOR

var deportes = {
    conBalon:['futbol','basketball','Rugby'],
    sinBalon:['Boxeo','Surf','Trekking'],
}

var persona = {
    Nombre: 'Miguel',
    Edad : 26,
    Estudios : {esProgramador : true},
}

// HAY 2 FORMAS DE TRABAJARLOS CON DOT NOTATION Y BRACKET NOTATION

//DOT NOTATION, USAMOS UN PUNTO PARA ACCEDER A LAS PROPIEDADES

persona.Nombre = 'Angel';
console.log(persona.Nombre);
persona.Edad = 27;
console.log(persona.Edad);

// las keys NUNCA pueden ser vacias

var autos = {};
autos.marcas = ['Ford','Audi'];
console.log(autos.marcas);
delete persona.Edad;
console.log(persona);

var misFunciones = {
    saludar:
    function(){return console.log('hola');}
}

misFunciones.saludar();



var atuendos = { manos: ['guantes','anillos'], pies :[ 'Zapatos','Soquetes']}

//Bracket notation

atuendos['piernas'] = ['Bermudas', 'Pantalones']; //solo cambia la forma de escribir
console.log(atuendos.piernas);

 //diferencia

var comidas= {};
var diferenciaDeNotaciones = function (propUno, propDos){
    comidas.propUno = ['Frutas','Vegetales'];
    comidas[propDos] = ['Hamburguesa', 'Papas Fritas']
}
diferenciaDeNotaciones('saludable','No saludable');
console.log(comidas);

// notar que las keys para comidas se tomaron literalmente 'propUno'... esto solo se soluciona usando bracket notation

// objetos avanzados
 // OBJETO object


//hasOwnProperty pregunta si tiene una key o propiedad
var libro = {autor: 'Miguel', genero:'Terror', anio:1995};
var tienePropiedad = libro.hasOwnProperty('nombre');
var tienePropiedad2 = libro.hasOwnProperty('anio');
console.log(tienePropiedad);
console.log(tienePropiedad2);

// el objeto Keys, tiene un metodo Keys, que nos devuelve todas las keys del objeto que le pasemos
var todasLasPropiedades = Object.keys(libro);
console.log(todasLasPropiedades);

// for in --bucle en objetos --recorre propiedad por propiedad
//notese que usamos bracket notation para obtener el valor del key
var mundo = {continentes : 7, paises : 195, oceanos:5};
for(var prop in mundo){
    console.log('esta es la propiedad :' + prop +' Este es el valor :' + mundo[prop]);
}


 // OBJETO this -- tiene que ver con el contexto

 var mascota = {
    animal :'Perro',
    raza: 'Pitbull',
    amistoso: true,
    dueno: 'Miguel',
}
mascota.info = function (){
    console.log('Mi perro es una '+ this.raza); //con this estamos indicando que el contexto es el objeto mascota
}
mascota.info();