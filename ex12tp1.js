import readline from "readline-sync";
// EXERCICE 12
let premierNote = readline.questionFloat("saiser premier Note: ");
let CoefficientPremierNote = readline.questionFloat("saiser queffition de premier Note: ");
let secondNote = readline.questionFloat("saiser second Note: ");
let CoefficientsecondNote = readline.questionFloat("saiser queffition de seconde Note: ");
let thirdNote = readline.questionFloat("saiser third Note: ");
let CoefficientThirdNote = readline.questionFloat("saiser queffition de third Note: ");
let moyen = (premierNote*CoefficientPremierNote+secondNote*CoefficientsecondNote+thirdNote*CoefficientThirdNote)/(CoefficientPremierNote+CoefficientsecondNote+CoefficientThirdNote);
console.log("le moyen des notes tu entrez est :"+ moyen);