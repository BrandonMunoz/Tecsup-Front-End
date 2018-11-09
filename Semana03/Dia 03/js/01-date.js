var fecha= new Date();
document.write(`<h1>la fecha es ${fecha}</h1> `) ;

var fecha1=new Date("August 2018");
document.write(`<h1>La fecha1: ${fecha1}</h1>`);

var fecha2= new Date(2018, 11, 1, 14, 50, 45);
document.write(`<h1>La fecha2: ${fecha2}</h1>`);
document.write(`<h1>La fecha2: ${fecha2.getFullYear()}</h1>`);
document.write(`<h1>La fecha2: ${fecha2.getDate()+15}</h1>`);


var  hoy= new Date(2018,9,24);
var  halloween= new Date(2018,9,31);

var milisegundos=halloween - hoy;
var segundos=milisegundos/1000;
var minutos=segundos/60;
var horas=minutos/60;
var dias=horas/24;
document.write(`<h1>intervalo: ${dias}</h1>`);
