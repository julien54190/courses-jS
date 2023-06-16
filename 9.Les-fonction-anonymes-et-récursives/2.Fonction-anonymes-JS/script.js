const cowerkerAges = [48, 24, 35, 22, 41, 39]

/*function sortNumber(a, b){
    return a - b
}

const sortedAges = cowerkerAges.sort(sortNumber)
console.log(sortedAges)*/

const sortedAges = cowerkerAges.sort(function(a, b){
    return a - b
})

console.log(sortedAges)