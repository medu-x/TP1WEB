import readline from "readline-sync";
// EXERCICE 4 ==>
let age = readline.questionInt("Entrez votre age : ");
let estAdult = age >= 18 ? true : false;
if (estAdult) {
  console.log("personne est adult");
}
