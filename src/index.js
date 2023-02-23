// --------------------------------------------------//
//Template Strings


const nombre = 'Alejandro';
const apellido = 'Solis';

//const nombreCompleto = nombre + ' ' + apellido;

 //console.log(nombreCompleto);

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(`Hola mi nombre es ${nombre} ${apellido}`)
console.log(getSaludo(nombre));

// --------------------------------------------------//


//Objetos Literales
const persona = {
    nombre: 'Kurco',
    apellido: 'Vayne',
    edad: 23,
    direccion:{
        ciudad:'Rosarito',
        zip:112232
    }
};
console.log(persona)


 const persona2 = persona;
//No se copia el valor, se hace una referencia
persona2.nombre = 'Victor'
console.log(persona2);

//Creamos un nuevo objeto
const persona2= { nombre: 'Victor', apellido:'Campos', edad:40}

// Creamos nuevo objeto con operador spread
const persona2 = {...persona}

console.log(persona2);


