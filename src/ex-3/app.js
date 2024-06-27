// Escribe un programa que pida el nombre del usuario con un input y escriba un texto que diga “Hola <nombre-de-usuario>”

const inputUsername = document.getElementById("usernameid")
const btnValidate = document.getElementById('btn-Validar')
const mainBlock = document.querySelector('main')

btnValidate.addEventListener('click', () => {
    const username4 = inputUsername.value
    render(username4)
    
})

function render (username1) {
    if (isEmpty(username1)) {
        mainBlock.innerHTML = /*html*/ `
            <span> Debe introducir su nombre </span>`
        return
    }

    mainBlock.innerHTML = /*html*/ `
        <span> Hola ${username1} </span>`
       
}
function isEmpty (username2) {
    const uservalueLength = username2.length
    return (uservalueLength === 0) ? true : false
}
