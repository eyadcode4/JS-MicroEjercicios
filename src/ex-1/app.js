

//Escribe un programa que escriba en la pantalla un texto de tipo <h1> que diga “Hello Javascript”.
const hi ="Hello Javascript"
const hiApp =document.querySelector('#app')

function renderTitle(title) {
    hiApp.innerHTML = /* html */ 
    ` <h1>${title}</h1>`
} 

renderTitle(hi)

console.log(hiApp);