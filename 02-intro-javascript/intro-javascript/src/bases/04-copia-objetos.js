const libro = {
    nombre: 'El cuento de la criada',
    precio: 299,
    cantidadPaginas: 1000,
}

// Copia de objetos
const libroDos =  {...libro}
libroDos.nombre = 'Harry potter';


console.log(libro);
console.log(libroDos);