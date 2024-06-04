function ocultarPalabra(palabra) {
    return palabra.split('').map(() => '_').join('');
}

module.exports = ocultarPalabra;