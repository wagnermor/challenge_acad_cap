// # Questão 3
function reverseWord(word) {
  return word.split("").reverse().join("");
}

function anagram(word){
  word = word.toLowerCase();
  let drow = reverseWord(word);
  let wordSplitted = word.split("");
  let counter = [];
  for(let i = 0; i < wordSplitted.length; i++) {
    for(let j = i + 1; j < wordSplitted.length; j++) {
      if(wordSplitted[i] == wordSplitted[j]) {
        counter.push([wordSplitted[i], wordSplitted[j]]);
      }
    }
  }
  return counter.length;
}
// console.log(anagram("Ovo"));

module.exports = {
  anagram: anagram
}