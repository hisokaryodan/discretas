alert("conversion de base diez a otra menor");
x = prompt("digite el número en base diez", "");
y = prompt("digite la base a la que desea convertirlo", "");

let decimal = parseInt(x);
let base = parseInt(y);

if (base < 10) {
    var i = 0;
    var c = new Array();
    while (decimal > 0) {
        c[i] = decimal % base;
        decimal = Math.floor(decimal / base);
        i = i + 1;
    }
    c.reverse();
    var ba = c.join();
    document.write("<h1>El numero " + x + " Es Equivalente a ");

    for (let i = 0; i < ba.length; i++) {
        document.write(ba[i]);
    }
    document.write(" en base " + base + "</h1>")
} else {
    alert("La Base debe ser menor que diez")
}