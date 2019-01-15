// let es usado para declarar las variables
//string = cadenas
let miCadena:string = "mi nombre es Pepe Grillo";
miCadena = "nuevo valor de la cadenita";

//number = numericos
let miNumero:number = 69;
miNumero = 96;

//bool = buleanos
let miBuleano:boolean = true;
miBuleano = false;

//Any type
let miMultidato:any = "una cadena string";
miMultidato = 5;
miMultidato = true;

//arrays
let lenguajes:Array<string> = ["HTML","PHP","JavaScript","Quechua"];
let numeros:Array<number> = [2,3,56,96]; // forma sencilla de declarar un array
let numeros2:number[] = [2,3,56,96]; //otra forma de crear arrays
let aregloMultidato:Array<any> = ["texto aqui",69,false,"numero"];

//variable multidato personalizado
let bidato:number | string = "una cadenilla";
bidato = 34;

//variable multidato con nombre o seudonimo
type alfanumerico = string | number;
let miAlfa:alfanumerico = 45;

//let vs var
//let es local y var es global
var n1:number = 67;
if (n1=67) {
	var nn2:number=200;
	let n2:number=100;
}
// console.log(n2); no se puede llamar
console.log(nn2);