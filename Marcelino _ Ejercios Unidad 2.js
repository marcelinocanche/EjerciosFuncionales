console.log("1------------------- Determina el resultado de un número x elevado a una potencia n.---");
// 1.	Determina el resultado de un número x elevado a una potencia n.

function potencia (x,y){
    return Math.pow(x,y);
}
console.log(potencia(5,3));

console.log("2------------------- Determina si un número n se encuentra en un rango determinado.---");
// 2.	Determina si un número n se encuentra en un rango determinado.

let number = 16;
if (number >= 2 && number <=20){
    console.log("El numero esta en el rango de 2 a 20");
}else{
    console.log("Numero fuera del rango 2 a 20");
}


console.log("3------------------- Dado un número entero en segundos, determinar la cantidad de horas, minutos y segundos que contiene.---");
// 3.	Dado un número entero en segundos, determinar la cantidad de horas, minutos y segundos que contiene.

function Tiempo(seconds)
 {
    var hour = Math.floor(seconds / 3600);
    hour = (hour < 10)? '0' + hour : hour;

    var minute = Math.floor((seconds / 60) % 60);
    minute = (minute < 10)? '0' + minute : minute;

    var second = seconds % 60;
    second = (second < 10)? '0' + second : second;

    return hour + ':' + minute + ':' + second;
  }

  var segundos = 600;
console.log(Tiempo(segundos));

console.log("4------------------- Determine el mayor de 4 enteros.---");
// 4.	Determine el mayor de 4 enteros.

function mayor (a,b,c,d){
    return Math.max(a,b,c,d);
}
console.log(mayor(5,3,20,10));
console.log("5------------------- Calcula la suma de una lista (arreglo) de elementos.---");
// 5.	Calcula la suma de una lista (arreglo) de elementos.

var numeros = [1, 2, 3, 4, 5], lista = 0;
    numeros.forEach (function(numero){
        lista += numero;
    });
    console.log(lista);
    console.log("6------------------- Determina si un elemento dado está contenido en una lista. Devuelve verdadero o falso.---");
// 6.	Determina si un elemento dado está contenido en una lista. Devuelve verdadero o falso.

const array1 = [1, 2, 3, 8, 10];

console.log(array1.includes(2));
console.log(array1.includes(6));
console.log("7------------------- Determina si dada una lista, ésta se encuentra ordenada. Se debe devolver verdadero o falso.---");
// 7.	Determina si dada una lista, ésta se encuentra ordenada. Se debe devolver verdadero o falso. 

const ordenada=()=>{
    var list=[10,12,13,114,81,90];
    var tem=0;

    for(let i=0; i<list.length;i++){
        if(tem<list[i]){
            tem=list[i];
            var listo=true;
        }else{
            var listo=false;
        }
    }
    return listo;
}
console.log(ordenada());

console.log("8------------------- Dadas dos listas, determine si son iguales. Devolver verdadeo o falso.---");
// 8.	Dadas dos listas, determine si son iguales. Devolver verdadeo o falso.


const comparar=()=> {
    var list1=[10,12,13,114,81,90];
    var list2=[10,12,13,114,81,90];
    for (let i = 0; i < list1.length; i++) {
        if (list1[i] == list2[i]) {
            if (list1[i] == list1[i]) 
                var listax = true;
            } else {
                var listax = false;
                break;
            }
        }
        return listax;
}
console.log(comparar());

console.log("9------------------- Realizar un función recursiva que retorne como salida el resultado de la suma 1 + 3 + 5 + 7 + 9 + N.---");
// 9.	Realizar un función recursiva que retorne como salida el resultado de la suma 1 + 3 + 5 + 7 + 9 + N.

const sum=num1=>{
    if(num1.length === 0){
        return 0;

    }else{
        let [first, ...rest] = num1;
        return first + sum(rest); 
    }
}

console.log (sum([1+3+5+7+9+11]));

console.log("10------------------- Realizar una función que reciba una lista y devuelva empleando recursividad otra lista de los elementos pares.---");
// 10.	Realizar una función que reciba una lista y devuelva empleando recursividad otra lista de los elementos pares. 
let num = [1,2,3,4,5,6,7,8];

const parlist = ls => {
    let result = [];
    if(ls.length === 0){
        return result;
    }
    if (ls[0] % 2 === 0){
        result.push(ls[0]);
    }
    return result.concat(parlist(ls.slice(1)));
};

console.log("Lista: " + num)
console.log("pares: " + parlist(num));

console.log("11------------------- Realiza una función que permita cargar calcular la unión, intersección y diferencia de dos conjuntos dados.---");
// 11.	Realiza una función que permita cargar calcular la unión, intersección y diferencia de dos conjuntos dados. 

let engineering = new Set(['1', '2', '3', '4', '5']);
let freelancers = new Set(['6','3', '7', '8', '5']);

let union = new Set([...engineering, ...freelancers]);
console.log(union);

let intersection = new Set([...engineering].filter(x => freelancers.has(x)));
console.log(intersection);

let difference = new Set([...engineering].filter(x => !freelancers.has(x)));
console.log(difference);



console.log("12------------------- Realiza una función que permita definir un mapa de datos y permita encontrar un valor a partir de su clave.---");
// 12.	Realiza una función que permita definir un mapa de datos y permita encontrar un valor a partir de su clave. 

var map = new Map();
 
map.set( 1,'one');
map.set(2,'two' );
map.set( 3,'three');
 
console.log( "map.get(2) =", map.get(2) );
 
map.delete(3);
 
console.log( "map.has(3) =", map.has(3) );