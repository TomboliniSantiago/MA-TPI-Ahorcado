const validarPalabra = require('./validarPalabra.js');
const ocultarPalabra = require('./ocultarPalabra.js');
const verificarLetra = require('./verificarLetra.js');
const actualizarEstado = require('./actualizarEstado.js');
const registrarIntentos = require('./registrarIntentos.js');

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
        expect(verificarLetra('1')).toBe(false);
    });

    test('No debe aceptar símbolos', () =>{
        expect(verificarLetra('@')).toBe(false);
    });
});

describe('Actualizar estado de juego', () => {
    test('Debe revelar la letra correcta en la palabra', () => {
        expect(actualizarEstado('a','palabra', '_______')).toBe('_a_a__a')
    })

    test('No debe revelar letras incorrectas', () => {
        expect(actualizarEstado('x', 'palabra', '_______')).toBe('_______');
    });

    test('Debe ser case-insensitive', () => {
        expect(actualizarEstado('A', 'palabra', '_______')).toBe('_a_a__a');
    });
});

describe('Registro de intentos', () => {
    test('Debe registrar una nueva letra ingresada', () => {
        let intentos = { letras: [], fallos: 0, palabra: 'palabra' };
        expect(registrarIntentos('a', intentos, 7)).toEqual({ letras: ['a'], fallos: 0, palabra: 'palabra' });
    });

    test('Debe incrementar el número de fallos para letras incorrectas', () => {
        let intentos = { letras: [], fallos: 0, palabra: 'palabra' };
        expect(registrarIntentos('x', intentos, 7)).toEqual({ letras: ['x'], fallos: 1, palabra: 'palabra' });
    });
});