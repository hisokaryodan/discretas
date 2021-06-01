function mcd(a, b) {
    var x = parseInt(a);
    var y = parseInt(b);

    while (x != y) {
        if (x > y) {
            x = x - y;
        } else {
            y = y - x;
        }
    }

    return (parseInt(x))
}

function mcdEuclides(a, b) {
    var x = parseInt(a);
    var y = parseInt(b);

    var result;

    if (a % b > 0) {
        result = mcdEuclides(b, a % b);
    } else {
        result = b;
    }

    return result;
}