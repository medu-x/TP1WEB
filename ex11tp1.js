import readline from "readline-sync";
function inverseChaine(unMot) {
  let leMotIneversed = "";
  let n = unMot.length - 1;
  for (let i = n; i >= 0; i--) {
    leMotIneversed += unMot[i];
  }
  return leMotIneversed;
}
//EXERCICE 11 ==>
let testRadar = readline.question(
  "veuillez entrez une chaine pour le test palidrom"
);
if (testRadar == inverseChaine(testRadar)) {
  console.log("le mot saiser est un palindrom ");
} else {
  console.log("le mot saiser est pas un palindrom ");
}
