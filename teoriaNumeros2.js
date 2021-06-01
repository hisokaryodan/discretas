alert("Demostración suma de impares igual al cuadrado del último número");
n = prompt("digite la cantidad de términos impares por sumar: ", "");

var num = parseInt(n);
var numero = [];
var suma = 0;

// for (let i = 0; i < num; i++) {
for (let i = 0; i <= num; i++) {

    // numero[i] = 2 * i + 1;
    numero[i] = 2 * i;
    suma = parseInt(suma + numero[i]);
}

// var ult = num * num;
var ult = num * (num + 1);
document.write("<table border=1> <tr><td><b>Números</b></td><td><b>Suma</b></td><td><b>Cuadrado</b></td></tr>")
document.write("<tr><td><h2>");
// for (let i = 0; i < num; i++) {
for (let i = 0; i <= num; i++) {
    if (i !== 0) {
        document.write(numero[i] + "+");
    }
    // document.write(numero[i] + "+");
}
document.write("</h2></td><td><h3>" + suma + " </h3></td><td><h3>" + ult + "</h3></td></tr></table>");