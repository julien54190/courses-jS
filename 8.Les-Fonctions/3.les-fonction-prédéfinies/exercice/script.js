function username(firstName) {
    return `${firstName.charAt(0).toUpperCase()}${firstName.slice(1)}`
}

const name1 = prompt('Entrz votre nom: ')
const formatFirstName = username(name1)

console.log(`${formatFirstName}`)