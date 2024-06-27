// Escribir un programa que nos diga si un número dado es primo
// (no es divisible por ninguno otro número que no sea él mismo o la unidad)

function verificarPrimo() {
    let numero = document.getElementById('number').value;
    numero = parseInt(numero, 10);
    if (numero <= 1) {
        document.getElementById('resultado').innerHTML = numero + ' no es un número primo.';
        return;
    }

    if (numero === 2) {
        document.getElementById('resultado').innerHTML = '2 es un número primo.';
        return;
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            document.getElementById('resultado').innerHTML = numero + ' no es un número primo.';
            return;
        }
    }
    document.getElementById('resultado').innerHTML = numero + ' es un número primo.';
}