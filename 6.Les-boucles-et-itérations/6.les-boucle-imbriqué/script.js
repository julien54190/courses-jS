const animals = [
    ['chien', 'chat', 'lapin'],
    ['vache', 'mouton', 'chèvre']
]

let i = 0

while (i < animals.length){
    let j = 0
    while (j < animals[i].length){
        console.log(animals[i][j])
        j++
    }
    i++
}

console.log('----------')

for(let i = 0; i < animals.length; i++){
    for(let j = 0; j < animals[i].length; j++){
        console.log(animals[i][j])
    }
}

console.log('----------')

for(const animalCategory of animals){
    for(const animal of animalCategory){
        console.log(animal)
    }
}