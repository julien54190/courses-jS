// Conditions
//PSEUDO CODE : si..... Ou si ..... Sinon
// CODE : if .... elese if ... else

const age = prompt('Quel âge avez vous?')
//console.log(age)
// console.log("âge en numéro Int : ", parseInt(age))
// console.log("âge en numéro float : ", parseFloat(age))
// console.log(1234.56)

// Si la personne est mineur
//IF age - de 18

//const isANumber = parseFloat(age) !== NaN

// test si âge est un nombre
//const isNotANumber = isNaN(age)
//console.log('isNotANumber', isNotANumber)

// Si âge n'est pas un nombre

if(isNaN(age)){
    console.log('Age donné n\'est pas un nombre')
}else if( age < 21 && age >= 18){
    console.log('Est mineur pour les USA et est majeur pour les Européens')
}else if( age < 18){
    console.log('Est mineur pour tous le monde')
}else{
    console.log('Est majeur')
}

// Ternerary

const isDarkModeOn = true
// let backgroundColor = null
// if(isDarkModeOn) backgroundColor = 'Black'
// else backgroundColor = 'white'

//const backgroundColor = "if === true" ? "si oui alors ça" : "sinon ça"
const backgroundColor = isDarkModeOn ? "black" : "white"

console.log('backgroungcolor', backgroundColor)


// Boucle for
// Pout toute mes .....(valeur)
// Pour chacun de .... (enfants)
// Pour tous les nombre paires / impaires
// Pour les 10 premiers utilisateur ...

// Array = tableau 
const colorsString = ['blue', 'red', 'green']
const colorsInt = [1, 2, 3]

console.log("tableau", colorsString)
console.log("bleu : ", colorsString[0])

// programme : 
// Calcule automatiquement une rédiction de 50%
// sur les prix de mon magasin

const prices = [10, 13, 14, 15]
const pricesPromo = []

for (let index = 0; index < prices.length; index++) {
    const initialPrice = prices[index]
    const priceWithPromo = initialPrice / 2
    pricesPromo.push(priceWithPromo) // pour placé les valeur dans le tableau 
    
}

console.log("Mes nouveau prix sont : ", pricesPromo)


// tableau d'objet

const shop =  [
    {
        name: "sac A",
        price: 10
    },
    {
        name: "sac B",
        price: 13
    },
    {
        name: "sac C",
        price: 14
    },
    {
        name: "sac D",
        price: 15
    }
]

for (let index = 0; index < shop.length; index++) {
    const priceWithPromo = shop[index].price / 2
    shop[index].promo = priceWithPromo
}

//console.log("shop", shop)
console.table(shop)