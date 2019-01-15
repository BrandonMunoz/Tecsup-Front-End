//definicion de una interfaz
interface iVehiculo{
	setModelo(nuevoModelo:string):void;
	getModelo():string;
	getMarcaYModelo():string;
}
//definicion de la clase
class Vehiculo implements iVehiculo{
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
	public getMarcaYModelo():string{
		return "Marca: " + this.marca + " " + "Modelo: "  + this.modelo;
	}
}

var miCarro = new Vehiculo("plomo Alan",55000,"Range Rover Evoque","Land Rover");
console.log(miCarro);
console.log(miCarro.getMarcaYModelo());