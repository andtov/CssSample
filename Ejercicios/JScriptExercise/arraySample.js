let arreglo = [
    true,
    "texto",
    {nombre: 'predro'}, 
    function(){
        console.log('Hola Mundo');
    }
]

let intArray = [2,4,15,18,20,25];

console.log(arreglo);
console.log(arreglo[3]());

let arreglito = intArray.filter((elemento) => {
    return elemento >= 18;
});

let total = intArray.reduce((acumulador, valorActual) =>{
    return acumulador + valorActual;
});

console.log(arreglito);
console.log(total);

let permisos = ['admin','user','admin','admin'];
let esUsuario = permisos.some((elemento) => {
    return elemento === 'user';
});

console.log(esUsuario);

let notas = [2,3,4,5,4.5];
let pasoMateria = notas.every((elemento) => {
    return elemento >= 3;
});

console.log(pasoMateria);

let nombres = ['pablo','pedro','juan','martha'];
let estaJuan = nombres.includes('Juan');

console.log(estaJuan);

let persona = {
    name: 'pedro',
    direccion: {
        ciudad: 'Bogota',
        pais: 'Colombia',
        telefono: 123456
    }
};

console.log(persona);

let {
    ciudad,
    pais,
    telefono
} = persona.direccion;

console.log(ciudad);
console.log(pais);
console.log(telefono);
