let username = 'John'
function average(n1, n2){
    return (n1 + n2) / 2
}
let n1 = 5

console.log(average(2, 3))// = 2.5

console.log(n1)// Error car la variable ne marche que dans la fonction

console.log('username')// Ici le code marche car la variable a été crée avant la fonction et donc n'en fait pas partie et sera donc ok du debut a la fin

console.log(n1)

// il est possible de crée un même nom de varable or de la focntion vu que rien ne sort de la fonction et est valable que entre les incolade de la fonction


let username1 = 'Julien'
var username2 = 'laure'
// la difference entre les 2 varaible est que let sera valable que dans le bloque 
// tandis que var s'étend au code complet

if (true){
    let username1 = 'Julien2'
    var username2 = 'laure2'
    console.log(username1) // affichera Julien2
}

console.log(username1) // affichera julien
console.log(username2)// affichera laure2