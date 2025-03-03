import readline from "readline-sync";
//EXERCICE 13
let dureTotalEnsecods=0;
let hours,minutes , seconds;

hours = readline.questionFloat("veuillez entrez une duree : hours ==> ");
dureTotalEnsecods+=hours*60*60;
minutes = readline.questionFloat("minutes ==> ");
dureTotalEnsecods+=minutes*60;
seconds = readline.questionFloat("seconds ==> ");
dureTotalEnsecods+=seconds;
console.log(" la dure totale en seconds est : "+dureTotalEnsecods);