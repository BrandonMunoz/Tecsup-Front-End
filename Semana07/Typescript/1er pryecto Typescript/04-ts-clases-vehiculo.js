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
    return Vehiculo;
}());
var miCarro = new Vehiculo("plomo Alan", 55000, "Range Rover Evoque", "Land Rover");
var miCarro2 = new Vehiculo("blue", 23, "volvo", "mercedez");
// miCarro.color = "gris rata";
// miCarro.precio = 23000;
// miCarro.setModelo("GLC 250 Coupe");
// miCarro.marca = "Mercedez Benz";
console.log(miCarro);
console.log(miCarro2);
