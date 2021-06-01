// alert("Programa para generar el Criba de Eratóstenes entre 1 y 100");
// document.write("<h2>");
// for (let n = 1; n < 100; n++) {
//     var i = 2;
//     var primo = 1;
//     while (i <= Math.sqrt(n)) {
//         if (n % i == 0) {
//             primo = 0;
//             break;
//         }
//         i++;
//     }

//     if (primo == 1) {
//         document.write(n + ",");
//     }
// }
// document.write("<h2>");

alert("programa para determinar si un numero es primo o compuesto")
n = prompt("numero a evaluar", "");
var i = 2;
var primo = 1;
while (i <= Math.sqrt(n)) {
    if (n % i == 0) {
        primo = 0;
        break;
    }
    i++;
}

if (primo == 1) {
    document.write(n + " es primo");
} else {
    document.write(n + " es compuesto");
}