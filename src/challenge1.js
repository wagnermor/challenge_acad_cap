// # Questão 1
function stars(n) {
  let star = "";
  let space = "";
  let counterSpace = n;
  let counterStar = 1;
  let print =``;
  
  for(index = n; index > 0; index--) {

    for(let i = counterSpace; i > 1; i--) {
      space += " ";
    }

    for(let j = 0; j < counterStar; j++) {
      star += "*";
    
    }
    
    counterSpace--;
    counterStar++;
    print += `${space}${star}\n`;
    space="";
    star = "";
  }
  return print;
}
console.log(stars(6));

module.exports = {
  stars: stars
}
