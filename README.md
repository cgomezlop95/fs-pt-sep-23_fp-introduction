## Ejercicios FP ✨🦄

Recomendación: Haz cada ejercicio de manera imperativa y cuando lo tengas resuelto, refactorízalo para hacerlo funcional!

### Funcionalidades básicas!

1. toUpper: función que recibe un string y devuelve el string en mayúscula
2. concat: función que recibe dos argumentos. Devuelve la concatenación del primero con el segundo.
3. capitalize: función que recibe un string. Separa el string en dos strings (primer caracter y el resto). Pone en mayúscula el primero y luego concatena todo.
4. reverse: función que recibe una lista. Devuelve una nueva lista del revés
5. toArray: función que recibe un string y devuelve un array donde cada elemento es cada carácter del string
6. toStr: función que recibe una lista y devuelve un string
7. tap: función que recibe una serie de argumentos. Muestra por consola el contenido de los argumentos y luego los devuelve sin hacer cambios
8. delDuplicates: función que recibe una lista y devuelve una nueva lista sin elementos repetidos
9. areEqual: función que recibe dos argumentos. Devuelve true si son iguales y false en caso contrario.
10. len: función que recibe una lista. Devuelve la longitud de dicha lista.
11. divBy: función que recibe 2 números. Devuelve el segundo dividido entre el primero
12. range: función que recibe 2 números. Devuelve una lista que contenga todos los números consecutivos entre el primero y el segundo (inclusives)
13. map: función que recibe una función y una lista. Debe devolver una nueva lista donde cada elemento sea la respuesta de la función recibida (igual que la función map de JS)
14. filter: función que recibe una función y una lista. Debe devolver una nueva lista con aquellos elementos cuya ejecución de la función recibida sea evaluada como truthy (igual que la función filter de JS)
15. and: función que recibe dos argumentos. Devolverá true si ambos son verdaderas. False en caso contrario.
16. or: función que recibe dos argumentos. Devolverá true si alguno de los es verdadero. False si ninguno lo es.
17. isPair: función que recibe un número. Devolverá true si el número es par, false en caso contrario.
18. not: función recibirá un argumento. Devolverá dicho argumento negado.
19. gt: función que recibirá dos argumentos. Devolverá si el segundo argumento es mayor que el primero.
20. tuple: función que recibirá dos argumentos. Devolverá un array con los dos elementos.

### Ejercicios!

1. Capitalizar primera y última letra de un string:
Crea una función que reciba un string y devuelva el mismo string del revés con la primera letra y la última en mayúsculas

2. Eliminar elementos duplicados de un array:
Crea una función que tome un array y devuelva un nuevo array con los elementos únicos, sin duplicados.

3. Calcular media de un array de números:
Crea una función que tome un array de números y devuelva la media de todos los elementos (recursiva).

4. Encontrar números primos en un rango:
Crea una función que tome un número como argumento y devuelva un array de todos los números primos hasta ese número.

5. Filtrar palabras por longitud:
Crea una función que tome un array de palabras y un número como argumentos, y devuelva un nuevo array con solo las palabras que tienen una longitud mayor que el número dado.

6. Capitalizar la primera letra de cada palabra en un string:
Crea una función que tome un string y devuelva el mismo string con la primera letra de cada palabra en mayúscula.

7. Comprobar si un string es un palíndromo:
Crea una función que tome un string y devuelva true si es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda), o false en caso contrario.

8. Eliminar valores falsy de un array:
Crea una función que tome un array y devuelva un nuevo array con todos los valores "truthy" (valores que no son falsy en JavaScript).

9. Haz la kata fizzbuzz funcional.
Crea una función que, dada una lista con números, devuelve otra list que contenga lo siguiente:
  1- Para todos aquellos números que sean múltiplos de 3 devuelve 'fizz'
  2- ara todos lo múltiplos de 5 devuelve 'buzz
  3- Para los múltiplos de 3 y 5 'fizzbuzz'.
  4- En caso de no ser múltiplo, devuelve el número.

### Ejercicios avanzados!

1. Devuelve una lista con aquellos números menores de 30 que sean pares en una lista del 1 al 100

2. Dadas dos listas, la primera del 1 al 50 y la segunda del 51 al 80, recibidas como argumentos, crea una función que devuelva un array compuesto de tuplas entre ambas listas => [[1, 51], [2, 52], [3, 53], ...] En caso de no ser iguales, ignoraremos los elementos sobrantes.

3. Dada la respuesta del ejercicio anterior, devuelve solo el primer número de las tuplas en posición impar cuya suma del par sea mayor de 70