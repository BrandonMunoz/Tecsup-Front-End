//definicion de la clase
class Vehiculo{
	//atributos de la clase
	public color:string;
	public precio:number;
	private modelo:string;
	public marca:string;
	//constructor
	constructor(color:string,precio:number,modelo:string,marca:string){
		this.color=color;
		this.precio=precio;
		this.modelo=modelo;
		this.marca=marca;
	}
	//metodos
	public setModelo(nuevoModelo:string):void{
		this.modelo=nuevoModelo;
	}
	public getModelo():string{
		return this.modelo;
	}

}

var miCarro = new Vehiculo("plomo Alan",55000,"Range Rover Evoque","Land Rover");
var miCarro2 = new Vehiculo("blue",23,"volvo","mercedez");
// miCarro.color = "gris rata";
// miCarro.precio = 23000;
// miCarro.setModelo("GLC 250 Coupe");
// miCarro.marca = "Mercedez Benz";
console.log(miCarro);
console.log(miCarro2);