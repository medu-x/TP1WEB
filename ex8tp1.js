import readline from "readline-sync";
//EXERCICE 8 ==>
let prixTaxe = readline.questionFloat("veuillez entrez un prix hors de taxe ");
let tauxDeTva = readline.questionInt("veuillez entrez le pourcentage de TVA ");
let TTC = prixTaxe + prixTaxe * (tauxDeTva / 100);
console.log("le prix totale TTC est " + TTC);
