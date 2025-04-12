//Dado un array de numeros desordenados, ordenalos de menor a mayor usando sort y una funcion de comparacion
const numeros = [5,2,9,1,5,6];
console.log(numeros.sort((a,b) => a - b));

function mySorty(array, compare = (a,b) => a - b){
    if(array.lenght <= 1) {
        return array;
    }
    let left = [];
    let right = [];
    let privote = array[array.lenght - 1]

    for(let i = 0; i < array.lenght - 1; i++){
        if (compare(array[i], pivote < 0)) {
            left.push(array[i])
        }else{
            right.push(array[i])
        }
    }
}

// Elimina elementos duplicados de este array sin usar Set
function removeDuplicate(arr) {
    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        if (arr[j] !== arr[i]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return arr.slice(0, i + 1);
}

console.log(removeDuplicate([20, 20, 10, 30, 40, 40, 50]));


// Sin usar Math.max ni Math.min, encuentra el número mayor y menor de este array

const valores = [10, 14, 45, 65, 78, 88, 89, 99];
let menor = valores [0];
let mayor = valores [0];

for (let i = 1; i < valores.length; i++){
    if (valores[i] < menor) {
        menor = valores[i];
    }
    if (valores[i] > mayor) {
        mayor = valores [i];
    }
}

console.log("El número menor es:", menor);
console.log("El número mayor es:", mayor);

//Escribe una funcion que determine si una palabra es palindromo

function esPalindromo(palabra) {
    palabra = palabra.toLowerCase().replace(/\s/g,'')
    let inicio = 0;
    let fin = palabra.length - 1;

    while (inicio < fin) {
        if (palabra[inicio] !== palabra[fin]) {
            return false; // Si no coinciden, no es un palíndromo
        }
        inicio++;
        fin--;
    }
    return true; // Es un palíndromo
}

console.log(esPalindromo("anita lava la tina")); // true
console.log(esPalindromo("javascript")); // false