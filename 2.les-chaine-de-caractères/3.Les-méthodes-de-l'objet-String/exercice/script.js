// Soit le prénom/nom suivant : rOmAin deLaNoix.

// À partir des méthodes que vous venez de voir, faites en sorte que la première lettre du prénom et du nom soient en majuscules, et le reste en minuscules.

let name = 'rOmAin deLaNoix';
let nameFormated = name.toLowerCase();

// nameFormated.substring(0, 1) // r
// .toUpperCase() // R
let firstNameUpperLetter = nameFormated.substring(0, 1).toUpperCase();

// nameFormated.substring(1, 6) // OmAin
// .toLowerCase() // omain
let firstNameLowerLetter = nameFormated.substring(1, 6).toLowerCase();

// nameFormated.substring(7, 8) // d
// .toUpperCase() // D
let lastNameFirstLetter = nameFormated.substring(7, 8).toUpperCase();

// nameFormated.substring(8) // eLaNoix
// .toLowerCase() // elanoix
let lastNameLowerLetter = nameFormated.substring(8).toLowerCase();

nameFormated = `${firstNameUpperLetter}${firstNameLowerLetter} ${lastNameFirstLetter}${lastNameLowerLetter}`

console.log(nameFormated)