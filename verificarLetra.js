function verificarLetra(letra) {
    const regex = /^[a-zA-Z]$/;
    return regex.test(letra);
}

module.exports = verificarLetra;