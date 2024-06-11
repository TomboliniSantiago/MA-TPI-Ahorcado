function verificarLetra(letra) {
    const letraRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]$/;
    return letraRegex.test(letra);
}

module.exports = verificarLetra;