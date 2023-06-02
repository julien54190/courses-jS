const animals = ['chien', 'chat', 'poisson']

const allAnimals = [
    ['vache', 'mouton', 'chèvre'],
    ['lion', 'tigre', 'ours']
]

console.log(animals[1]) // affichera chat

console.log(allAnimals[0][2]) // affichera chèvre
console.log(allAnimals[1][0]) // affichera lion

console.log('-----------------')


const animals1 = [
    'chien',
    'chat',
    'poisson',
    'oiseau',
    'ours',
    'renard',
    'corbeau',
    'reqiuin',
    'gerbille',
    'hamster'
]

const allAnimals1 = [
    ['vache', 'mouton', 'chèvre'],
    ['lion', 'tigre', 'ours']
]


for (let i = 0; i < animals1.length; i++){
    console.log(animals1[i])
}

console.log('----------------')

for(let i = 0; i < allAnimals1.length; i++){
    for(let j = 0; j < allAnimals1[i].length; j++){
        console.log(allAnimals1[i][j])
    }
}

console.log('----------------------')

for(let allAnimals1Index = 0; allAnimals1Index < allAnimals1.length; allAnimals1Index++){
  for(let elementIndex = 0; elementIndex < allAnimals1[allAnimals1Index].length; elementIndex++){
    console.log(allAnimals1[allAnimals1Index][elementIndex])
  }
}

console.log('--------------')

animals1.forEach(function(element) {
    console.log(element)
})

// affichera tous les éléments du tableau animals1

console.log('--------------')

animals1.forEach(function(element, index) {
    console.log(index + ' : ' + element)
})

// affichera tous les éléments avec leur index

console.log('----------------')

allAnimals1.forEach(function(allAnimals1Element){
    allAnimals1Element.forEach(function(element){
        console.log(element)
    })
})

