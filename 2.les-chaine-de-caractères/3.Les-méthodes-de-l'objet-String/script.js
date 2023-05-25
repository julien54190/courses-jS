// affichage tous en majuscule ou minuscule

let username = "John"

console.log(username.toUpperCase()) // tous en majuscule
console.log(username.toLowerCase()) // tous en minuscule


// effacer les espace

let username1 = "     John     "
let hello = "       hello "
let goodbye = " aurevoir         "
console.log(username1.trim()) // supprime au debut et a la fin, trimsStart pour le debut trimEnd pour la fin
console.log(hello.trimStart() + username1.trim() + goodbye.trimEnd())

//récuperer une chaine de caractère

let titre = "045-Les chaines de caractères"
console.log(titre.substring(4))

let titre1 = "045-Les chaines de caractères"
console.log(titre1.substring(0, 3))

//Slice = substring sauf que slice peux prendre des valaur négative c'est à dire qu'elle part de la fin de la chaine 

let titre2 = "045-Les chaines de caractères"
console.log(titre.slice(4)) // récupère les chaines de caractères

let titre3 = "045-Les chaines de caractères"
console.log(titre1.slice(0, 3)) // recupère 045

let titre4 = "Les chaines de caractères-045"
console.log(titre4.slice(-3)) // récupere que le 045

let titre5 = "Les chaines de caractères-045"
console.log(titre4.substring(titre5.length - 3)) // récupere que le 045 , qui est beaucoup plus simplifié par slice.


