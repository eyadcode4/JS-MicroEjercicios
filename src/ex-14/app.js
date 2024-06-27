// Escribir un programa que escriba en pantalla
// los divisores comunes de dos números dados

function encontrarDivisoresComunes() {
    let num1 = document.getElementById('number1').value;
    let num2 = document.getElementById('number2').value;
    num1 = parseInt(num1, 10);
    num2 = parseInt(num2, 10);
    let divisoresComunes = [];
  
    for (let i = 1; i <= Math.min(num1, num2); i++) {
      if (num1 % i == 0 && num2 % i == 0) {
        divisoresComunes.push(i);
      }
    }
  
    document.getElementById('resultado').innerHTML = 'Divisores comunes: ' + divisoresComunes.join(', ');
  }