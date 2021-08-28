
describe('Pruebas en el archivo demo.test.js', ()=>{

    test('Los string deben ser iguales',()=>{

        //1.Arrenge
        const msj1 = 'Hola mundo';

        //2. Act
        const msj2 = 'Hola mundo';

        //3. Assert
        expect(msj1).toBe(msj2);

    })
});