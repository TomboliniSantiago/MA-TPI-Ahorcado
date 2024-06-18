const readline = require('readline');
const validarPalabra = require('./validarPalabra');
const ocultarPalabra = require('./ocultarPalabra');
const verificarLetra = require('./verificarLetra');
const actualizarEstado = require('./actualizarEstado');
const registrarIntentos = require('./registrarIntentos');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let palabra = 'agiles'; // Palabra hardcodeada
let estadoActual = ocultarPalabra(palabra);
let intentos = { letras: [], fallos: 0, palabra: palabra };
const maxIntentos = 7;

function mostrarEstado() {
    console.log('')
    console.log(`Palabra: ${estadoActual}`);
    console.log(`Intentos fallidos: ${intentos.fallos}`);
    console.log(`Letras ingresadas: ${intentos.letras.join(', ')}`);
}

function solicitarLetra() {
    rl.question('Ingrese una letra: ', (letra) => {
        if (verificarLetra(letra)) {
            estadoActual = actualizarEstado(letra, palabra, estadoActual);
            intentos = registrarIntentos(letra, intentos, maxIntentos);
            if (estadoActual === palabra) {
                console.log(`¡Felicitaciones! Adivinaste la palabra: ${palabra}`);
                rl.close();
            } else {
                mostrarEstado();
                solicitarLetra();
            }
        } else {
            console.log('Letra inválida. Inténtelo de nuevo.');
            solicitarLetra();
        }
    });
}

console.log('¡Comienza el juego con la palabra predefinida!');
mostrarEstado();
solicitarLetra();
