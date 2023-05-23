//Nous devons calculer le total du panier de l'utilisateur. Nous avons dans la variable productsTotalValue la valeur totale des produits, 
//et specialOffer représente la valeur de la réduction à appliquer.

// let productsTotalValue = "154.38";
// let specialOffer  = "10";

// let cartTotalValue = ?;

let productsTotalValue = "154.38"
let specialOffer  = "10"

let cartTotalValue = parseFloat(productsTotalValue) - parseInt(specialOffer)

console.log(cartTotalValue)