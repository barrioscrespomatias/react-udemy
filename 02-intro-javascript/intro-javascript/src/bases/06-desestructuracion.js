//Desestructuracion

const persona = {
    nombre:'Pedro',
    apellido:'Rodriguez',
    edad: 20,
}

//Desestructuración de la const persona el valor de la clave edad.
// const {edad, nombre, apellido} = persona;

//Tambien podría modificarle el valor a la clave desestructurada
// const {edad:edadPersona} = persona;


// console.log(edad, apellido, nombre);


const context = ({nombre,apellido})=>{    
    return{
        elNombre: nombre,
        elApellido: apellido,
        latlng:{
            lat:13.123,
            long:-13.123123,
        }
    }
};

const {elNombre, elApellido, latlng:{lat,long}} = context(persona);

console.log(`${elNombre} - ${elApellido}. La latitud es ${lat}.`);


