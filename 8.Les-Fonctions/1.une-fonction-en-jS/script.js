// let username = 'John'

// console.log(`Bienvenue ${username}`) // code prrésent sur trois fichier qui pourrait être uen centaine, donc 1 chzngement pourrai prendre des heure. D'ou l'utilité d'utilisé une fonction


function sayHelloUsername() {
    let username = 'john'
    console.log(`Bienvenue ${username} `)
}

sayHelloUsername()

function getHello() {
    return 'Bonjour !'
}

let hello = getHello()
console.log(hello)


console.log('-----------------------------------')

function sayHelloUsername() {
    let username = 'john'
    console.log(`${getHello()} ${username} `)
}

sayHelloUsername()

function getHello() {
    return 'Bonjour !'
}

sayHelloUsername()



console.log('-----------------------------------')


function sayHelloUsername() {
    let username = 'john'
    console.log(`${getHello()} ${username} `)
}

sayHelloUsername()

function getHello() {
    if (Math.random() > 0.5) {
        return 'Bonjour !'
    } else {
        return 'Bienvenue !'
    }

}

sayHelloUsername()
sayHelloUsername()
sayHelloUsername()
sayHelloUsername()
sayHelloUsername()
sayHelloUsername()
sayHelloUsername()
sayHelloUsername()
sayHelloUsername()
sayHelloUsername()
