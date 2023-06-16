const cowerkerAges = [48, 24, 35, 22, 41, 39]


const sortedAges = cowerkerAges.sort(function(a, b){
    return a - b
})

console.log(sortedAges)


/*const displayAges = sortedAges.map(sortedAge => {
    return `${sortedAge} ans `
})*/

const displayAges = sortedAges.map(sortedAge => `${sortedAge} ans `)

console.log(displayAges)

const multiply = nb => nb * Math.PI

console.log(multiply(2))