function registrarIntentos(letra, intentos, maxIntentos) {
    if (intentos.letras.includes(letra)) return intentos;
    intentos.letras.push(letra);
    if (!intentos.palabra.includes(letra)) {
        intentos.fallos += 1;
    }
    if (intentos.fallos >= maxIntentos) {
        console.log('¡Has perdido! La palabra era: ' + intentos.palabra);
        process.exit();
    }
    return intentos;
}

module.exports = registrarIntentos;
