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

class Camioneta extends Vehiculo{
	public pickup:boolean;
	public setPickup(pickup:boolean):void{
		this.pickup = pickup;
	}
	public getPickup(){
		return this.pickup;
	}
}

let miCamioneta = new Camioneta("Azul",10000,"Picanto","KIA");
miCamioneta.setModelo("Sportage");
console.log(miCamioneta);
miCamioneta.setPickup(false);
console.log(miCamioneta);