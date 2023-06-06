function sayHelloUsername(username) {
    console.log(`${getHello()} ${username} `)
}

function getHello() {
    if (Math.random() > 0.5) {
        return 'Bonjour !'
    } else {
        return 'Bienvenue !'
    }

}

sayHelloUsername('john')
sayHelloUsername('julien')
sayHelloUsername('Luca')
sayHelloUsername(' Vincent')
sayHelloUsername('Melanie')
sayHelloUsername('linda')
sayHelloUsername('Denis')
sayHelloUsername('Manon')
sayHelloUsername('Emilie')
sayHelloUsername('Vilma')


console.log('-------------------')

function average(note1, note2, note3) {
    return(note1 + note2 + note3) / 3
}

let avg = average(12, 3, 18)

console.log(avg.toFixed(2))

let avg1 = average(15, 18, 19)

console.log(avg1.toFixed(2))

let avg2 = average(7, 10, 5)

console.log(avg2.toFixed(2))

//toFixed() , définie les chiffre apres la virgule




