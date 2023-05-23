let age = 28
let ageIsInteger = Number.isInteger(age)

// integer = nombre entié.
// Number.isInteger(age) = vérifie si le chiffre ecrit est un nombre entié ou pas . elle retourne true ou false. c'est une valeur booléenne

// autre valeur booléenne

let isJavascriptFun = true // ou false

// déclarion d'objet

let user = {
    firstname : 'julien',
    lastname : 'Vitalone',
    workplace : 'Villerupt',
    age : 36,
    hobbies : {
        main : 'computer',
        secondary : 'manga'
    }
}

// let price valeur par default est undefined(let price;) mais utiliser null si plus tard on veux assigner une valeur car null lui donne la valeur null sinon pas de valeur.
let price = null

console.log(ageIsInteger)
console.log(price)


let base = 2
let exposant = 4

let resultat = Math.pow(base, exposant)
// Math.pow(base, exposant) affiche une operation avec un exposant soit 2puissance4

console.log(resultat)


let a = 3
let b = 3

console.log(a + b)

// si un des nombres est en chaine de caractère et qu'on y a pas accès il on peu le transformer dans le console log, 10 correpond a la base de calcul 10
let c = 3
let d = '3'

console.log(c + parseInt(d, 10))

// ici pas besoin de convertir Js le fait seul car - est pas ambigue, que + peut servir pour une addition mais aussi pour mettre plusieur chaine de caracteres.
let e = 3
let f = '3'

console.log(e - f)