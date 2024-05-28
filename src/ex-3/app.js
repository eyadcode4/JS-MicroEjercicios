//dado el usuario se encuenra en la pagina con el formulario
//cuando rellena en el formulario con su nombre y valida 
//haciendo clik en el boton vañidar
//entonces se renderiza el texto "hola <nombre de usuario>"
//dado el input esta vacio 
//cuando el usuario hace clish en validate 
//entonces se muestra el text "debe introducir su nombre"

//creterio 1
//click de boton = evento
//recuperar el nombre de usuario
//rendenizar en yn contenedor html el texto "hola pepe"
//creterio 2
//conprobar si el input esta vacio

const inputUsername = document.getElementById('username')
const btnValidate = document.getElementById('btn-validate')
const mainBlock = document.querySelector('main')

btnValidate.addEventListener('click', () => {
    const username = inputUsername.value
    render(username)     
})

function render(username) {
    if (isEmpty(username) ){
        mainBlock.innerHTML = /*html*/
        `<span> debe introducir su nombre </span>`
        return
    }
    mainBlock.innerHTML = /*html*/
        `<span>Hola ${username}</span>`
}
function isEmpty(username){
    const stringLength = username.length
    return(stringLength === 0) ? true : false
}