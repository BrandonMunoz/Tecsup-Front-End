var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Camioneta = /** @class */ (function (_super) {
    __extends(Camioneta, _super);
    function Camioneta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Camioneta.prototype.setPickup = function (pickup) {
        this.pickup = pickup;
    };
    Camioneta.prototype.getPickup = function () {
        return this.pickup;
    };
    return Camioneta;
}(Vehiculo));
var miCamioneta = new Camioneta("Azul", 10000, "Picanto", "KIA");
miCamioneta.setModelo("Sportage");
console.log(miCamioneta);
miCamioneta.setPickup(false);
console.log(miCamioneta);
