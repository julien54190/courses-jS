
// À l'aide de vos connaissances, retournez un code qui vérifiera que Mathéo est bien de nationalité française et qu’il a l’âge requis pour voter.

let nationalityRequired = 'Français';
let ageOfMajority = 18;

let nationalityOfMatheo = 'Français';
let ageofMatheo= 17;

let result = nationalityRequired === nationalityOfMatheo && ageofMatheo >= ageOfMajority

console.log(result)