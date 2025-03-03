import readline from "readline-sync";
//EXERCICE 9 ==>
let prefixeDeFacture = readline.question(
  " Veuillez entrer un préfixe de facture : "
);
let numeroDeBase = readline.questionInt("Veuillez entrez un numero de base : ");
let suffixe = readline.question("veuillez entrez un suffixe");
let numeroDeFacture = `${prefixeDeFacture}-${numeroDeBase}-${suffixe}`;
console.log("votre numero de facture est : " + numeroDeFacture);
