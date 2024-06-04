const palabra = require('./Palabra');
const ocultarPalabra = require('./ocultarPalabra.js');

describe('Validar Palabra', () => {
    test('La palabra no debe contener espacios', () => {
        expect(palabra('palabra con espacios')).toBe(false);
    });

    test('La palabra no debe contener espacios', () => {
        expect(palabra('palabra_sin_espacios')).toBe(true);
    });


});