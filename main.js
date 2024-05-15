
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




