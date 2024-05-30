//Escribe un programa que pida dos números y escriba “La suma de <numero-uno> con <numero-dos> es <resultado>”.

const numb1 = document.getElementById("number1id")
const numb2 = document.getElementById("number2id")

const mainBlock = document.querySelector('main')

btnValidate.addEventListener('click', () => {
    const resultado = numb1 +numb2
    render(resultado)
})

function render () {
    
        mainBlock.innerHTML = /*html*/ `
            <span> La suma de ${numb1} con ${numb2} es ${resultado} </span>`
        return
    }      