const animals = ['chien', 'chat', 'renard', 'lapin', 'poisson']

for (let i = 0; i < animals.length; i++){
    console.log(animals[i])
}

console.log('-------------')

for (animal of animals){
    console.log(animal)
}


console.log('------------')()

let word = 'Javascript'

for (letter of word){
    console.log(letter)
}


console.log('------------')

const dog = {
    name : 'Fluffy',
    age : 3,
    race : 'Welsh corgi Prembroke',
    food : ['Croquettes', 'Légumes verts']
}

for (const property in dog) {
    console.log(property)
}
// ce code va afficher les nom de propriété (name, age , race ....)

console.log('------------')

for (const property in dog) {
    console.log(`${property}: ${dog[property]}`)
}

// ce que affichera cette fois si les propriété ansi que les valeur ( name : Fluffy, age : 3 .....)