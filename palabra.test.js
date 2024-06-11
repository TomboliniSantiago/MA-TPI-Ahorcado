const validarPalabra = require('./validarPalabra.js');
const ocultarPalabra = require('./ocultarPalabra.js');
const verificarLetra = require('./verificarLetra.js');

describe('Validar Palabra', () => {
    test('La palabra no debe contener espacios', () => {
        expect(validarPalabra('palabra con espacios')).toBe(false);
    });

    test('La palabra no debe contener espacios', () => {
        expect(validarPalabra('palabra_sin_espacios')).toBe(true);
    });
});

describe('Ocultar Palabra', () => {
    test('Mostrar la palabra seleccionada como una serie de guiones bajos', () => {
        expect(ocultarPalabra('palabra')).toBe('_______');
    });

    test('Ocultar palabra con letras mayúsculas', () => {
        expect(ocultarPalabra('PALABRA')).toBe('_______');
    });

    test('Mostrar la palabra seleccionada como una serie de guiones bajos', () => {
        expect(ocultarPalabra('palabramaslarga')).toBe('_______________');
    });
    
});

describe('Validar Letra Ingresada', () => {
    test('Debe aceptar una letra del alfabeto', () => {
        expect(verificarLetra('a')).toBe(true);
        expect(verificarLetra('z')).toBe(true);
    });

    test('No debe aceptar números', () =>{
        expect(verificarLetra('1').toBe(false));
    });

    test('No debe aceptar símbolos', () =>{
        expect(verificarLetra('@').toBe(false));
    });

    
});