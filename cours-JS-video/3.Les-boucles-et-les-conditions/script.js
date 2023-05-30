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

//const ternerary = 
