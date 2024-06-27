 // Escribe un programa que pida una frase y escriba cuantas vocales hay en la frase.
 const phrase= document.getElementById('phrase');
 const button= document.getElementById('button');
 const answer= document.getElementById('answer');

 
 const countingVocals=()=>{

    let savingPhrase= phrase.value;
    let extractPhraseVocals= savingPhrase.match(/[aeiou]/gi);
    let showVocalsLength;

    if (extractPhraseVocals) {
        showVocalsLength= extractPhraseVocals.length;
    } else {
        showVocalsLength= '0';
    }

    return showVocalsLength
 }

 //When i make click on my button!

 button.addEventListener("click", ()=>{
    let printVocalsLength= countingVocals();
    
    return answer.innerHTML=`${printVocalsLength}`
 })