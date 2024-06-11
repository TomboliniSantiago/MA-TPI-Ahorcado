function actualizarEstado(letra, palabra, estadoActual){
    const nuevaPalabra = estadoActual.split('');
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i].toLowerCase() === letra.toLowerCase()) {
            nuevaPalabra[i] = palabra[i];
        }
    }
    return nuevaPalabra.join('');
}

module.exports = actualizarEstado;