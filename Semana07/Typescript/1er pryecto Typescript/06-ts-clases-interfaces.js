//definicion de la clase
var Vehiculo = /** @class */ (function () {
    //constructor
    function Vehiculo(color, precio, modelo, marca) {
        this.color = color;
        this.precio = precio;
        this.modelo = modelo;
        this.marca = marca;
    }
    //metodos
    Vehiculo.prototype.setModelo = function (nuevoModelo) {
        this.modelo = nuevoModelo;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.getMarcaYModelo = function () {
        return "Marca: " + this.marca + " " + "Modelo: " + this.modelo;
    };
    return Vehiculo;
}());
var miCarro = new Vehiculo("plomo Alan", 55000, "Range Rover Evoque", "Land Rover");
console.log(miCarro);
console.log(miCarro.getMarcaYModelo());
