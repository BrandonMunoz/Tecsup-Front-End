function getNumero(numero) {
    if (numero === void 0) { numero = 0; }
    console.log(numero);
}
function getCadena(numero) {
    if (numero === void 0) { numero = 0; }
    return numero + " en texto";
}
getNumero(69);
console.log(getCadena(69));
