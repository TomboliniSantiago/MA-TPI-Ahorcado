const validarPalabra = require('./validarPalabra');

describe('Validar Palabra', () => {
    test('La palabra no debe contener espacios', () => {
        expect(validarPalabra('palabra con espacios')).toBe(false);
    });
});