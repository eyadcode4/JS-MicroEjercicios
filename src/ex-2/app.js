//dado que acceder a la pagina
//cuano se renderiza
//entonce ver el texto "la suma de 3 +5 es 8"
// aprobamos si estamos conectados con console.log('word');

console.log('conect') // esta bien(ya esta redmenizado)

const numb1 = 3
const numb2 = 5
const total = 0
const txt = `la suma de ${numb1} +${numb2} es ${total}`

function sum(num1, num2){
    const total = num1 +num2
    return total
}

function render(num1,num2,total){
    const divApp = document.getElementById('app')
    const txt = `La suma de ${num1} +${num2} es ${total}`
    divApp.innerHTML = txt
}

render(numb1, numb2, sum(numb1,numb2));


