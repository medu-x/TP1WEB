import readline from "readline-sync";
//EXERCICE 10 ==>
let MotChaine = readline.question("veuillez saiser un mot :");
function inverseChaine(unMot) {
  let leMotIneversed = "";
  let n = unMot.length - 1;
  for (let i = n; i >= 0; i--) {
    leMotIneversed += unMot[i];
  }
  return leMotIneversed;
}
console.log("le mot inversed est : " + inverseChaine(MotChaine));
