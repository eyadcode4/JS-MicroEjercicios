
//texto
//renderiza un h1 en navegator(imprimir en pantalla de web)

//dado que me encuentro en la pagina html
//cuando se rederiza
//entonces veo el titulo Hello Javascript
//tener una caja donde puedo imprimir este texto(en html)
//recuberar esta caja
// ver el el colsole web si todo esta bien
// esto, hay que hacer un funcion
//ejutamos la funcion
//ejutamos la funcion pasamos el titulo
//asi se parece el Hello Javascript = llvar el titulo a la apantalla
//se puede crear un Readme llevando los pasos sera mas profecion
const hello ="Hello Javascript"
const divApp =document.querySelector('#app')

function renderTitle(title) {
    divApp.innerHTML = /* html */ 
    ` <h1>${title}</h1>`
} 

renderTitle(hello)

console.log(divApp);