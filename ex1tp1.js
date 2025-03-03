import readline from "readline-sync";

let nom = readline.question("Entrez votre nom : ");
console.log("Bonjour, " + nom);
//EXERCICE 1 ==>
let x = 10,
  y = 15;
console.log(`avant x = ${x} et y = ${y}`);
x = x + y;
y = x - y;
x = x - y;
console.log(`apres x = ${x} et y = ${y}`);
