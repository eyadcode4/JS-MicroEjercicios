//Escribe un programa que pida dos números y escriba “La suma de <numero-uno> con <numero-dos> es <resultado>”.

// const numb1 = document.getElementById("number1id")
// const numb2 = document.getElementById("number2id")

// const mainBlock = document.querySelector('main')

// btnValidate.addEventListener('click', () => {
//     const resultado = numb1 +numb2
//     render(resultado)
// })

// function render () {
    
//         mainBlock.innerHTML = /*html*/ `
//             <span> La suma de ${numb1} con ${numb2} es ${resultado} </span>`
//         return
//     }      

const num1 = document.getElementById("number-1");
const num2 = document.getElementById("number-2");
const btnSum = document.getElementById("btn-sum");
const mainBlock = document.querySelector("main");

function sum(x, y){
    let result = x + y
    return render(x, y, result)
}

function render(num1, num2, res){
    mainBlock.innerHTML = `La suma de ${num1} con ${num2} es ${res}`;
}

btnSum.addEventListener("click", () => {
  let n1 = num1.value;
  let n2 = num2.value;

  sum(parseInt(n1), parseInt(n2));
  
});