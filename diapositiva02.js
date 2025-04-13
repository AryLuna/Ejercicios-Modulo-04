//Encuentra el segundo numero mas grande de un array sin usar sort
const nums = [12, 35, 1, 10, 34, 1];

function segundoMasGrande(nums) {
    let max = -Infinity;
    let segundoMax = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (num > max) {
            segundoMax = max;
            max = num;
        } else if (num > segundoMax && num < max) {
            segundoMax = num;
        }
    }

    return segundoMax === -Infinity
        ? "No hay un segundo número más grande válido"
        : segundoMax;
}

console.log(segundoMasGrande(nums));

//Convierte el siguiente string en un objeto "nombre:, edad:, ciudad:"
const str = "nombre: Ary, edad: 25, ciudad: JRZ";

function convertirAObjeto(cadena) {
    const pares = cadena.split(', '); 
    const objeto = {};

    for (let i = 0; i < pares.length; i++) {
        const [clave, valor] = pares[i].split(': ');
        objeto[clave] = valor; 
    }

    return objeto;
}

const resultado = convertirAObjeto(str);
console.log(resultado);


// Filtra los elementos "falsy" (false, 0, null, undefined, NaN)
const mezcla = [120, "Hello", false, 45, "", undefined, "JS"];
const elementosFalsy = mezcla.filter(elemento => !elemento);
console.log("Elementos falsy:", elementosFalsy);


//Filtra los usuarios que tengan edad mayor o igual a 18
const usuarios = [
    {nombre: "Ana", edad: 17},
    {nombre: "Luis", edad: 22},
    {nombre: "Carlos", edad: 15},
    {nombre: "Lucero", edad: 30}
]

let menoresEdad = usuarios.filter(usuarios => usuarios.edad <=18)
console.log(menoresEdad);
