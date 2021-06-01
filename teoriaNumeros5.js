var palab = prompt("Digite una frase corta", "");
let arrp = palab.split("");
var npal = [];
var k;
var alfa = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
alert("la primer letra y la cuarta son " + arrp[0] + "" + arrp[3]);
for (let j = 0; j < arrp.length; j++) {
    for (let i = 0; i < 27; i++) {
        if (arrp[j] == alfa[i]) {
            k = parseInt((i + 15) % 27);
            document.write(alfa[k]);
        }
    }
}