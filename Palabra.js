function Palabra(palabra) {
    // Verifica que la palabra no tenga espacios
    if (/\s/.test(palabra)) {
        return false;
    }

    return true;
}

module.exports = Palabra;