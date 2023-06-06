let chaise = 120.50
let table = 1200.99
let vase = 420.01
let canape = 12585.55

/** Vous allez réaliser ce travail en plusieurs étapes, qui, mises bout à bout, vous permettront de répondre au besoin du client.

Dans un premier temps, vous allez devoir écrire la fonction qui permet de calculer le nouveau prix d'un seul produit.

La promotion doit être de 25 % du prix initial.

Afin de tester son bon fonctionnement, vous appellerez cette fonction avec le prix de la chaise et afficherez le résultat dans la console du navigateur. */


// function newPrice(price, discount) {
//   return price - (price * discount / 100)
// }

//console.log(newPrice(120.50, 25))

/** Vous vous souvenez que votre client est très pointilleux et qu'il remarquera que le format du prix n'est pas le bon. Là encore, une fonction vous permettra de remplacer le point du prix par une virgule, et vous pourrez ajouter le symbole "€".

Cette fois-ci, vous testerez directement votre fonction dans la console du navigateur.

 */

/*function formatPrice(number) {
    let roundedPrice = Math.ceil(number) // Arrondir le prix au supérieur avec deux décimales
    return roundedPrice.toFixed(2).replace('.', ',') + ' €';
}

let reducedPrice = newPrice(120.50, 25)
let rightFormatPrice = formatPrice(reducedPrice)

console.log(rightFormatPrice)*/


/**Maintenant que vous avez une base solide qui fonctionne pour le produit "chaise", il faut appliquer ce traitement à tous les produits.

Pour cela, vous bouclerez sur cette liste et appellerez les fonctions précédentes en passant les bons paramètres.

Pour cet exercice vous utiliserez l’array suivant : */

const prices = [120.50,1200.99,420.01,12585.55]

function newPrice(price, discount) {
    return price - (price * discount / 100)
  }

  function formatPrice(number) {
    let roundedPrice = Math.ceil(number) // Arrondir le prix au supérieur avec deux décimales
    return roundedPrice.toFixed(2).replace('.', ',') + ' €';
}



prices.forEach(function(price) 
{ 
  let reducedPrice = newPrice(price, 25)
  let rightFormatPrice = formatPrice(reducedPrice)
	console.log(rightFormatPrice)
}
)
