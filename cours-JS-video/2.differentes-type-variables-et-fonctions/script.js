// Fonction "incluse" en JS ==> native
// Alert = nom de ma fonction
// () = appeler une fontion "lancer / éxécuter"
// "...." = Sting = chaine de caraxctères

alert("Fichier lié")
// alert(1234)

// Fonction pur se Débug
// console = objet JS natif
// log = fonction lié à cet objet
// const console = {
//     log : 'Ma fonction de log'
// }
console.log("mon fichié est lié")
console.warn("Je suis un avertissment")
console.error("Je suis une erreur")

// Ecrire une fonction méthode ES5
function addition() {
    //code qui appartient à ma fonction "addition"
}
addition()

// Ecrire une fonction méthode ES6 alias Fat-arrow = la grosse flèche "=>"
const soustraction = () => {
    // code qui appartient à ma fonction "soustraction"
}
soustraction()

// dire bonjour
const sayHello = (name, familyName) => {
    // name existe iniquement ici entre mes {}
    console.log("Bonjour " + name + " " + familyName + " !")
    console.log("Bonjour", name, familyName, "!")
    console.log(`Bonjour ${name} ${familyName} !`)
}
const firstName = "julien"
const lastName = "Vitalone"
sayHello(firstName, lastName)