var dinero = prompt("ingrese valor del regalo :");


if (parseInt(dinero) >= 251.00) {
           console.log("el regalo que comprara es un anillo");
}
if (parseInt(dinero) <= 250.00 && parseInt(dinero) >= 101.00 ) {
           console.log("el regalo que comprara son flores");
}
if (parseInt(dinero) <= 100.00 && parseInt(dinero) >= 11.00) {
           console.log("el regalo que comprara son chocolates");
}
if (parseInt(dinero) <= 10.00) {
           console.log("el regalo que comprara es una tarjeta");
}
