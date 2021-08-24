import getHeroeById from "./bases/08-import-export";

//Promises

// const promesa = new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         const myHero = getHeroeById(3);     
//         resolve(myHero);
//     }, 2000);
    
// });

//Resolve -> cuando la promesa se pudo ejecutar
//reject -> cuando hubo un error

const getHeroeByIdAsync = (id) =>{

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            const myHero = getHeroeById(id);     
            myHero !== undefined ? resolve(myHero) : reject('Error!');            
        }, 2000);
        
    });

}

getHeroeByIdAsync(1)
.then(console.log)
.catch(console.warn);
    