const calcularPuntaje = require('./calcularPuntaje')
function actualizarPuntaje(puntajeActual, intentos) {
    const puntajeNuevo = calcularPuntaje(intentos);
    return puntajeNuevo;
}

module.exports = actualizarPuntaje;