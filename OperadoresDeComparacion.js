console.log(4<7);
console.log(4>8);
console.log(4==6);
console.log(4!=4);

console.log(3 === '3'); //estricto
console.log(3 == '3'); //true compara valores no importa el tipo de dato

var a = 1;
var b = 2;
var c = a = b; // de derecha a izquierda es igual a decir c = (a = b)
console.log(c);