// Escribe un programa que pida una frase
// y escriba las vocales que aparecen

const mainBlock = document.querySelector("main");
const sentence = document.getElementById("sentence-1").value;
const btnCheck = document.getElementById("btn-check");
let found = [];

function render(msg) {
  mainBlock.innerHTML = msg;
}

function getVowels(sentence) {
  const vowels = ["a", "e", "i", "o", "u"];
  
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i].toLowerCase();
    if (vowels.includes(letter) && !found.includes(letter)) {
      found.push(sentence[i].toLowerCase());
    }
  }
  return `Hay ${found} vowels.`;
}

btnCheck.addEventListener("click", () => {
  render(getVowels(sentence));
});