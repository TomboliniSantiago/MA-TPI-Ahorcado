function validarPalabra(palabra) {
    // Verifica que la palabra no tenga espacios
    if (/\s/.test(palabra)) {
        return false;
    }

    return true;
}

module.exports = validarPalabra;