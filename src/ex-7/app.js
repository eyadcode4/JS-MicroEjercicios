// Escribe un programa que pida una frase
// y escriba cuantas veces aparece la letra a

let texto = document.getElementById('text');
let buttonText = document.getElementById('button');
let imprimirConsola = document.getElementById('app');

let letra1 = "a";
let letra2 = "A";
let cont = 0;

buttonText.addEventListener ('click', () => {
    comprobarLetra()
        
    })

    function comprobarLetra(){
        const length = texto.value.length;
        if(length === 0){
           alert("El campo esta Vacío")
         } else {
           cuentaLetra()
         }
   }

   function cuentaLetra() {
    let buscaLetra = texto.value;
    for (let i = 0; i < buscaLetra.length; i++) {
        if(buscaLetra[i] === letra1) {
            cont++ 
        }
        if(buscaLetra[i] === letra2) {
            cont++ 
        }

    } 
    imprimirConsola.innerHTML = "Esta Frase contiene la letra 'a'  "  + cont + " veces."
    
    cont = 0;
   }
