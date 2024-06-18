function calcularPuntaje(intentos) {
    const letrasCorrectas = intentos.palabra.length - intentos.fallos;
    return letrasCorrectas * 1000 - intentos.fallos * 25; 
    
}

module.exports = calcularPuntaje;