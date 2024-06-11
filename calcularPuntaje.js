function calcularPuntaje(intentos, errores) {
    return intentos * 10 - errores * 5;
}

module.exports = calcularPuntaje;