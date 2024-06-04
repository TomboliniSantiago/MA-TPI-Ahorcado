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

describe('Ocultar Palabra', () => {
    test('Mostrar la palabra seleccionada como una serie de guiones bajos', () => {
        expect(ocultarPalabra('palabra')).toBe('_______');
    });

    test('Ocultar palabra con letras mayúsculas', () => {
        expect(ocultarPalabra('PALABRA')).toBe('_______');
    });
});