// Escribe un programa que pida una frase
// y escriba cuántas veces aparecen cada una de las vocales


let texto = document.getElementById('text');
let buttonText = document.getElementById('button');
let imprimirConsolaA = document.getElementById('appA');
let imprimirConsolaE = document.getElementById('appE');
let imprimirConsolaI = document.getElementById('appI');
let imprimirConsolaO = document.getElementById('appO');
let imprimirConsolaU = document.getElementById('appU');


let vocales = "aeiou";
let contA = 0;
let contE = 0;
let contI = 0;
let contO = 0;
let contU = 0;


buttonText.addEventListener ('click', () => {
    comprobarVocal()
        
    })

    function comprobarVocal(){
        const length = texto.value.length;
        if(length === 0){
           alert("El campo esta Vacío")
         } else {
           cuentaVocal()
         }
   }


   function cuentaVocal() {
    let buscaVocal = texto.value;

    for (let i = 0; i < buscaVocal.length; i++) {
        let minuscula = buscaVocal[i].toLowerCase()
        if(minuscula === "a"){
            contA++ 
            imprimirConsolaA.innerHTML = "Esta frase contiene " + contA + " a."
        
        }else if(minuscula === "e"){
            contE++ 
            imprimirConsolaE.innerHTML = "Esta frase contiene " + contE + " e."

        }else if(minuscula === "i"){
                contI++ 
                imprimirConsolaI.innerHTML = "Esta frase contiene " + contI + " i."
        }else if(minuscula === "o"){
            contO++ 
            imprimirConsolaO.innerHTML = "Esta frase contiene " + contO + " O."
        }else if(minuscula === "u"){
            contU++ 
            imprimirConsolaU.innerHTML = "Esta frase contiene " + contU + " u."
        }
        else if(contA === 0 && contE === 0 && contI === 0 && contO === 0 && contU === 0){
            imprimirConsolaA.innerHTML = "Esta frase no contiene vocales."
        }
        
            
        }

        contA = 0
        contE = 0
        contI = 0
        contO = 0
        contU = 0
    


    }