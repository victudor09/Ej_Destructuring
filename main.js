
// 1. EJERCICIOS DESTRUCTURING

const empleados=[
    {name:"Luis",email:"Luis@gmail.com"},
    {name:"Ana",email:"Ana@gmail.com"},
    {name:"Andrea",email:"Andrea@gmail.com"},
];

//Extrae la empleada Ana con todos sus datos personales:

const {name, email} = empleados
console.log (empleados [1]) //posicion 1 es Ana


// Extrae el email del empleado Luis

const [luis] = empleados;
const { email: email_luis } = luis;
console.log(email_luis); 


//
const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
    "primary": "Overgrow",
    "hidden": "Chlorophyll"
    },
    stats: {
    hp: 45,
    attack: 49,
    deffense: 59,
    speed: 45
    },
    moves: [
    "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}

// Cambiaelnombredelapropiedad“name”por“nombre
// ExtraeelnombredelPokemon
// Extraeel tipodePokemonquees
// Extraeelmovimiento“Tackle”

const {name: nombre, type, moves} = pokemon
console.log(nombre);
console.log(type);
console.log(moves[1]);

//2. EJERCICIOS SPREAD Y REST
// PDTES.
const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
    "primary": "Static",
    "hidden": "Lightning rod"
    },
    stats: {
    hp: 35,
    attack: 55,
    deffense: 40,
    speed: 90
    },
    moves: [
    "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}

const mergeObjets =  {...pokemon, ...pikachu}
console.log(mergeObjets);
   
//

function sumEveryOther(...numeros){
    let suma = 0
    numeros.forEach((numero) => {
        suma = suma + numero
    })      
    console.log(suma);
} 

sumEveryOther(6, 8, 2, 3, 1);
sumEveryOther(11, 3, 12);

//

function addOnlyNums(...parametros){
    let suma = 0
    parametros.forEach((parametro) => {
        if (+parametro){
            suma = suma + parametro
        }
    })      
    console.log(suma);
}
addOnlyNums(1, 'perro', 2, 4); 

//

function countTheArgs(...argumentos){
    let num_argumentos = 0
    argumentos.forEach((argumento) => {
        num_argumentos = num_argumentos + 1
    })
    console.log(num_argumentos);
}
countTheArgs('gato', 'perro'); //2
countTheArgs('gato', 'perro', 'pollo', 'oso'); //4

//

function combineTwoArrays(array1, array2) {
    const combineArrays = [...array1, ...array2];
    console.log(combineArrays);
}

const arrayComida = ['patata', 'tomate', 'lechuga']
const arrayRandom = [1, true, 'chocolate']

combineTwoArrays(arrayComida, arrayRandom)