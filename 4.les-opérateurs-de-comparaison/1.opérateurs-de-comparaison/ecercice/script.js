// La moyenne d'un étudiant à un concours est égale à 12. Pour réussir, il fallait avoir au moins 10. Pour avoir une mention assez bien, 
// il fallait avoir 12, une mention bien : 14, et très bien : 16.

// Pour chaque événement possible, écrivez une variable qui stocke si l’événement est vrai ou faux. Vous devrez trouver des noms de variables 
// qui correspondent à la recherche.

const average = 12;

const hasAverage = average >= 10

// événement avoir la mention assez bien
const prettyGood = average >= 12 && average < 14
console.log(prettyGood)

// événement avoir la mention bien
const good = average >= 14 && average < 16
console.log(good)

// événement avoir la mention tres bien
const veryGood= average >= 16
console.log(veryGood)

// événement avoir la mention (2 possibilités)
const mention = average >= 12;
const mention2 = prettyGood  || good || veryGood;
console.log(mention2)
