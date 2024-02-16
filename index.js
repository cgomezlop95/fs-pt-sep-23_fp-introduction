// Aquí van los ejercicios básicos y avanzados!

//1. **toUpper:** función que recibe un string y devuelve el string en mayúscula

const toUpper = (str) => str.toUpperCase();

console.info(toUpper("hello"));

//2. **concat:** función que recibe dos argumentos. Devuelve la concatenación del primero con el segundo.

const concat = (str1, str2) => str1.concat(str2);

console.info(concat("hello", "world"));

//3. **capitalize:** función que recibe un string. Separa el string en dos strings (primer caracter y el resto). Pone en mayúscula el primero y luego concatena todo.

const capitalize = (str) => concat(str[0].toUpperCase(), str.slice(1));

console.info(capitalize("hello"));

//4. **reverse:** función que recibe una lista. Devuelve una nueva lista del revés

const reverse = (array) => array.reverse();

console.info(reverse([1, 2, 3, 4]));

//5. **toArray:** función que recibe un string y devuelve un array donde cada elemento es cada carácter del string

const toArray = (str) => str.split("");

console.info(toArray("hello"));

//6. **toStr:** función que recibe una lista y devuelve un string

const toStr = (array) => array.join("");

console.info(toStr(["h", "e", "l", "l", "o"]));

//7. **tap:** función que recibe una serie de argumentos. Muestra por consola el contenido de los argumentos y luego los devuelve sin hacer cambios

const tap = (arg1, arg2, arg3) => {
  console.log(arg1, arg2, arg3);
  return arg1, arg2, arg3;
};

console.info(tap(1, 2, 3));

//8. **delDuplicates:** función que recibe una lista y devuelve una nueva lista sin elementos repetidos

const delDuplicates = (array) => [...new Set(array)];

console.info(delDuplicates([1, 1, 1, 3, 5]));

//9. **areEqual:** función que recibe dos argumentos. Devuelve true si son iguales y false en caso contrario.

const areEqual = (arg1, arg2) => (arg1 === arg2 ? true : false);

console.info(areEqual(3, 3));

//10. **len:** función que recibe una lista. Devuelve la longitud de dicha lista.

const len = (array) => array.length;

console.info(len([1, 2, 3, 4]));

//11. **divBy:** función que recibe 2 números. Devuelve el segundo dividido entre el primero

const divBy = (num1, num2) => num2 / num1;

console.info(divBy(10, 2));

//12. **range:** función que recibe 2 números. Devuelve una lista que contenga todos los números consecutivos entre el primero y el segundo (inclusives)

//13. **map:** función que recibe una función y una lista. Debe devolver una nueva lista donde cada elemento sea la respuesta de la función recibida (igual que la función map de JS)
//14. **filter:** función que recibe una función y una lista. Debe devolver una nueva lista con aquellos elementos cuya ejecución de la función recibida sea evaluada como truthy (igual que la función filter de JS)
//15. **and:** función que recibe dos argumentos. Devolverá true si ambos son verdaderas. False en caso contrario.

const and = (arg1, arg2) => (arg1 && arg2 ? true : false);

//16. **or:** función que recibe dos argumentos. Devolverá true si alguno de los es verdadero. False si ninguno lo es.

const or = (arg1, arg2) => (arg1 || arg2 ? true : false);

//16. **or:** función que recibe dos argumentos. Devolverá true si alguno de los es verdadero. False si ninguno lo es.

//17. **isPair:** función que recibe un número. Devolverá true si el número es par, false en caso contrario.
//18. **not:** función recibirá un argumento. Devolverá dicho argumento negado.
//19. **gt:** función que recibirá dos argumentos. Devolverá si el segundo argumento es mayor que el primero.
//20. **tuple:** función que recibirá dos argumentos. Devolverá un array con los dos elementos.
