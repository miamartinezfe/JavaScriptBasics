function cuidadoLog (nombre){
    console.log(nombre);
    return nombre;
}

function otraFuncion (){
    console.log('el resultado de la funcion Cuidado Log es: ' + cuidadoLog('Miguel'));
}





function mesesDelAño(array) { //2
    // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
    // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
    // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
    // Tu código:
    var meses = [];
    
    array.map((mes)=> {
       if (mes == 'Enero' || mes =='Marzo' || mes == 'Noviembre' ){
          meses.push(mes);
       }
    })
    if (meses.length===3) return console.log(meses);
    else return console.log("No se encontraron los meses pedidos");
 }

 mesesDelAño(['Marzo', 'Noviembre', 'Enero']);