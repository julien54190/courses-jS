// Écrivez le code permettant d'afficher dans un console.log l'article "M" ou "Mme" devant le nom de famille, en fonction du genre de la personne. 
// Utilisez la forme d'une condition ternaire.

let lastname = "brassens"
let genre = "homme"
let title

genre == "homme" ? title = "M" : title = "Mme"

console.log(`${title} ${lastname}`)