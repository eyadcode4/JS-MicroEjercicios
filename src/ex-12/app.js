// Añadir al ejercicio anterior que nos diga
// por cuál de los cuatro es divisible
// (hay que decir todos por los que es divisible)

let numberInput = document.getElementById('number');
let buttonNumber = document.getElementById('button');
let imprimirConsola = document.getElementById('app');

buttonNumber.addEventListener('click', () => {
    verificarDivisibilidad();
});

function verificarDivisibilidad() {
    let number = parseInt(numberInput.value);
    let divisores = ""; 

    if (isNaN(number)) {
        alert("Por favor, ingresa un número válido.");
        return;
    }

    
    if (number % 2 === 0) {
        divisores += "2, ";
    }
    if (number % 3 === 0) {
        divisores += "3, ";
    }
    if (number % 5 === 0) {
        divisores += "5, ";
    }
    if (number % 7 === 0) {
        divisores += "7, ";
    }

   
    if (divisores.length > 0) {
        divisores = divisores.slice(0, -2);
        imprimirConsola.innerHTML = "El número " + number + " es divisible por " + divisores + ".";
    } else {
        imprimirConsola.innerHTML = "El número " + number + " no es divisible por 2, 3, 5, ni 7.";
    }
}