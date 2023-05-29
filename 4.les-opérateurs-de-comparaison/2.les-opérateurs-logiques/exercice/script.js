// Un restaurateur souhaite établir un code permettant de savoir s'il peut laisser un client prendre une table dans son restaurant. Écrivez ce code 
//en respectant ces règles :

// Le client doit être muni d’un pass sanitaire ou d’un test PCR négatif,

// Il doit aussi avoir réservé une table dans le restaurant.


let healthPass = "pass sanitaire";
let pcrTest = "Test PCR négatif";
let booking = "yes";

let passMatheo = "pass sanitaire";
let bookingMatheo = "yes";

// Le code suivant vérifie que Mathéo est en possession du pass sanitaire ou d’une test PCR négatif et qu’il a bien réservé une table
let result = [healthPass, pcrTest].includes(passMatheo) && booking === bookingMatheo;

console.log(result); //Si vrai, return true