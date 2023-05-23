// Pour simplifier sa comptabilité, un marchand de légumes souhaite créer un petit script lui permettant de rentrer le nombre de pommes et poires 
//vendues dans la journée, et de récupérer le chiffre d'affaires par fruit, ainsi que le chiffre d'affaires total en euros.

// Une pomme coûte 0,32 €.

// Une poire coûte 0,44 €.

// Vous devrez stocker dans un premier temps le prix d'une pomme et d'une poire dans des variables, puis permettre à l'utilisateur de rentrer 
//le nombre de poires et de pommes vendues dans la journée.

// Enfin, une fenêtre d'alerte devra s'afficher indiquant le nombre de pommes et de poires vendues dans la journée, ainsi que le chiffre d'affaires 
//par produit et le chiffre d'affaires total.


// storage price
const PRICEAPPLE = 0.32
const PRINCEPEAR = 0.44

// storage quantity
const QuantityAppleSold = prompt('Saisissez un nombre de pommes : ')
const QuantityPearSold = prompt('Saisissez un nombre de poirees : ')

//recipe for each fruit
const priceTotalApple = PRICEAPPLE * QuantityAppleSold
const priceTotalPear = PRINCEPEAR * QuantityPearSold

//turnover (chiffre d'affaire)
const turnover = priceTotalApple + priceTotalPear

// alert that will display the information to the user
alert("pommes => quantité : " + QuantityAppleSold + ", chiffre d'affaire: " + Math.round(priceTotalApple * 100) / 100 + "€ \n" + 
" poire => quantité : " + QuantityPearSold + ", chiffre d'affaire: " + Math.round(priceTotalPear * 100) / 100 + "€ \n")