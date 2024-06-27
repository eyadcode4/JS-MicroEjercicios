// Escribe un programa que pida un número
// y nos diga si es divisible por 2, 3, 5 o 7
// (sólo hay que comprobar si lo es por uno de los cuatro)


let numberInput = document.getElementById('number');
let buttonNumber = document.getElementById('button');
let imprimirConsola = document.getElementById('app');


buttonNumber.addEventListener('click', () => {
    verificarDivisibilidad()

});

function verificarDivisibilidad() {
    let number = parseInt(numberInput.value);

if (isNaN(number)) {
    alert("Por favor, ingresa un número válido.");
    return;
}


if (number % 2 === 0) {
    imprimirConsola.innerHTML = "El número " + number + " es divisible por 2.";
} else if (number % 3 === 0) {
    imprimirConsola.innerHTML = "El número " + number + " es divisible por 3.";
} else if (number % 5 === 0) {
    imprimirConsola.innerHTML = "El número " + number + " es divisible por 5.";
} else if (number % 7 === 0) {
    imprimirConsola.innerHTML = "El número " + number + " es divisible por 7.";
} else {
    imprimirConsola.innerHTML = "El número " + number + " no es divisible por 2, 3, 5, ni 7.";

}

}