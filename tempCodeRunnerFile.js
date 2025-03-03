
import readline from 'readline-sync';

// let nom = readline.question("Entrez votre nom : ");
// console.log("Bonjour, " + nom);
//EXERCICE 1 ==>
let x=10,y=15;
console.log(`avant x = ${x} et y = ${y}`);
x=x+y
y=x-y
x=x-y
console.log(`apres x = ${x} et y = ${y}`);
//EXERCICE 2 ==>
let testvar="2025"
let convertedVar =Number(testvar);
console.log(typeof convertedVar);
//EXERCICE 3 ==>
let number = 10;
number+=5;
number-=3;
console.log(number);
//EXERCICE 4 ==>
let age = readline.questionInt("Entrez votre age : ");
let estAdult = (age >=18)? true : false;
if (estAdult){
    console.log("personne est adult")}
//EXERCICE 5 ==>
let mot = readline.question("entrez un mot ");
console.log("la langeur de mot est  "+ mot.length);
//EXERCICE 6 ==>
let chaine="Helle There";
console.log("troisieme caractere de la chaine est "+chaine[2]);
//EXERCICE 7 ==>
const PI=3.14159;
// PI=2.14;
// TypeError: Assignment to constant variable. 
// on a an erorr car on peut pas changer la valeur de un variable declare par const car il est constant 
//EXERCICE 8 ==>
let prixTaxe = readline.questionFloat("veuillez entrez un prix hors de taxe ");
let tauxDeTva=readline.questionInt("veuillez entrez le pourcentage de TVA ");
let TTC = prixTaxe+ prixTaxe* (tauxDeTva/100);
console.log ("le prix totale TTC est "+ TTC);
//EXERCICE 9 ==>
let prefixeDeFacture=readline.question(" Veuillez entrer un préfixe de facture : ");
let numeroDeBase = readline.questionInt("Veuillez entrez un numero de base : ");
let suffixe = readline.question("veuillez entrez un suffixe");
let numeroDeFacture=`${prefixeDeFacture}-${numeroDeBase}-${suffixe}`;
console.log("votre numero de facture est : "+numeroDeFacture);
//EXERCICE 10 ==>

let  MotChaine= readline.question("veuillez saiser un mot :");

function inverseChaine(unMot){
    let leMotIneversed="" ;
    let n = unMot.length -1;
    for (let i=n;i>=0;i--){
    leMotIneversed+=unMot[i]
} return leMotIneversed;
}



console.log("le mot inversed est : "+ inverseChaine(MotChaine));
//EXERCICE 11 ==>
let testRadar = readline.question("veuillez entrez une chaine pour le test palidrom");
if (testRadar == inverseChaine(testRadar)){
    console.log("le mot saiser est un palindrom ");
}else{
    console.log("le mot saiser est pas un palindrom ");
}
//EXERCICE 12
let premierNote = readline.questionFloat("saiser premier Note: ");
let CoefficientPremierNote = readline.questionFloat("saiser queffition de premier Note: ");
let secondNote = readline.questionFloat("saiser second Note: ");
let CoefficientsecondNote = readline.questionFloat("saiser queffition de seconde Note: ");
let thirdNote = readline.questionFloat("saiser third Note: ");
let CoefficientThirdNote = readline.questionFloat("saiser queffition de third Note: ");
let moyen = (premierNote*CoefficientPremierNote+secondNote*CoefficientsecondNote+thirdNote*CoefficientThirdNote)/(CoefficientPremierNote+CoefficientsecondNote+CoefficientThirdNote);
console.log("le moyen des notes tu entrez est :"+ moyen);
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