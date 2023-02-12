//for

for (var i = 0; i<10; i++){
    console.log(i);
}

var suma = 0;

//while

while (suma<3){
    suma = suma+1;
    console.log(suma);
}

suma = 15;

// switch case

switch (suma) {
    case 0:
        console.log('cero');
        break;
    case 1:
        console.log('uno');
        break;
    default:
        console.log('no es booleano');
        break;
  }

// do while
let result = '';
i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);
console.log(result);

// continue , se usa para omitir parte del codigo y seguir con la siguiente iteracion

i = 0;
n = 0;
while (i < 5) {
   i++;
   if (i == 3)
      continue;
   n += i;
   console.log(n);
}

//break

function comprobarBreak(x) {
    var i = 0;
    while (i < 6) {
       if (i == 3)
          break;
       i++;
    }
    console.log(i * x);
 }
 comprobarBreak(3);