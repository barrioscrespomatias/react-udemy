// Se reciben dos tipos de exportaciones.
// heroes importacion por defecto
// owners importacion individual mediante desestructuración.

import heroes, {owners} from './data/heroes';


const getHeroeById = (id) =>{
    return heroes.find( (element) => element.id === id);
}   

// console.log(getHeroeById(3));

const getHeroeByOwner = (owner) =>{
    return heroes.filter(element => element.owner === owner);
};

console.log(getHeroeByOwner('DC'));

