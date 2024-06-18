const readline = require('readline');
const ocultarPalabra = require('./ocultarPalabra');
const verificarLetra = require('./verificarLetra');
const actualizarEstado = require('./actualizarEstado');
const registrarIntentos = require('./registrarIntentos');
const actualizarPuntaje = require('./actualizarPuntaje');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let palabra = 'agiles'; // Palabra hardcodeada
let estadoActual = ocultarPalabra(palabra);
let intentos = { letras: [], fallos: 0, palabra: palabra };
const maxIntentos = 7;
let puntajeActual = 0; // Inicializamos el puntaje actual

function mostrarEstado() {
    console.log('---------------------------------------------------');
    console.log(`Palabra: ${estadoActual}`);
    console.log(`Intentos fallidos: ${intentos.fallos}`);
    console.log(`Letras ingresadas: ${intentos.letras.join(', ')}`);
    console.log(`Puntaje actual: ${puntajeActual}`);
}

function solicitarLetra() {
    rl.question('Ingrese una letra: ', (letra) => {
        if (verificarLetra(letra)) {
            estadoActual = actualizarEstado(letra, palabra, estadoActual);
            intentos = registrarIntentos(letra, intentos, maxIntentos);
            puntajeActual = actualizarPuntaje(puntajeActual, intentos); // Actualizamos el puntaje
            if (estadoActual === palabra) {
                console.log('---------------------------------------------------');
                console.log(`¡Felicitaciones! Adivinaste la palabra: ${palabra}`);
                console.log(`Puntaje final: ${puntajeActual}`); // Mostramos el puntaje final
                rl.close();
            } else {
                mostrarEstado();
                if (intentos.fallos >= maxIntentos) {
                    console.log('---------------------------------------------------');
                    console.log(`¡Has perdido! La palabra era: ${palabra}`);
                    rl.close();
                } else {
                    solicitarLetra();
                }
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
