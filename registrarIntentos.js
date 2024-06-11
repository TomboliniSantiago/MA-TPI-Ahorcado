function registrarIntentos(letra, intentos, maxIntentos) {
    if (!intentos.letras.includes(letra)) {
        intentos.letras.push(letra);
        if (!intentos.palabra.includes(letra.toLowerCase())) {
            intentos.fallos += 1;
        }
    }
    return intentos;
}

module.exports = registrarIntentos;