/**Dans cet exercice, vous allez devoir créer un tableau JavaScript des couleurs, avec les valeurs : Bleu, Rouge, Vert, Jaune, Blanc.

Vous devrez ensuite :

Faire afficher (dans la console par exemple) la longueur du tableau.

Faire afficher directement les valeurs : Bleu, Blanc, puis Rouge.

Faire afficher toutes les valeurs du tableau de deux manières différentes.

Faire un nouveau tableau à plusieurs dimensions pour avoir "Bleu, Blanc et Rouge" d'une part, et "Jaune et Vert" d'autre part.

À partir de ce nouveau tableau, afficher directement les valeurs : "Blanc" puis "Vert".

Utiliser la méthode la plus simple pour afficher toutes les valeurs de ce nouveau tableau.*/

const colors = ['bleu', 'rouge', 'vert', 'jaune', 'blanc']
//Faire afficher (dans la console par exemple) la longueur du tableau.
console.log(colors.length)

console.log('------------------------')
//Faire afficher directement les valeurs : Bleu, Blanc, puis Rouge.
console.log(colors[0])
console.log(colors[4])
console.log(colors[1])

console.log('------------------------')
//Faire afficher toutes les valeurs du tableau de deux manières différentes
colors.forEach(function(color){
  console.log(color)
})

console.log('------------------------')

for (let i = 0; i < colors.length; i++){
  console.log(colors[i])
}

console.log('------------------------')

//Faire un nouveau tableau à plusieurs dimensions pour avoir "Bleu, Blanc et Rouge" d'une part, et "Jaune et Vert" d'autre part.

const colors1 = [
  ['bleu', 'blanc', 'rouge'],
  ['jaune', 'vert',]
]

//À partir de ce nouveau tableau, afficher directement les valeurs : "Blanc" puis "Vert".

console.log(colors1[0][1])
console.log(colors1[1][1])

console.log('------------------------')

//Utiliser la méthode la plus simple pour afficher toutes les valeurs de ce nouveau tableau

colors1.forEach(function(colorElement){
  colorElement.forEach(function(color){
    console.log(color)
  })
})




