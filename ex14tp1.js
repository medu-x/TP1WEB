import readline from "readline-sync";
//EXERCICE 14==>
    let prenom = readline.question("veuillez entrez votre prenom ==> ");
let anneNessance = readline.questionInt("veuillez entrez votre anne de naissance ==> ");
let crSpec = "~@#$%^&*?"
let Random = Math.floor(Math.random() * 8);
let modpass = `${prenom}${anneNessance}${crSpec[Random]}`
console.log("votre modpass est : "+modpass);