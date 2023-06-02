const fruits = ['Fraise', 'Orange', 'Framboise', 'Citron']

// du tableau de fruits ci-dessous, écrivez le code JavaScript permettant d'afficher sa taille (longueur) dans la console.

console.log(fruits.length)

console.log('------------------------')

//À partir du tableau de fruits ci-dessous, écrivez le code JavaScript permettant d'afficher directement la valeur "Framboise" dans la console.

console.log(fruits[2])

console.log('------------------------')

//À partir du tableau de fruits ci-dessous, écrivez le code JavaScript permettant d'afficher chaque valeur dans la console.

fruits.forEach(function(element){
    console.log(element)
})

// ou correction

console.log('-----------------------')



for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])  
}