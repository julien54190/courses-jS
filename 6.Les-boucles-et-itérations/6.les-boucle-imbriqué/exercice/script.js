/**
 * En utilisant des boucles imbriquées, vous reproduirez l'affichage suivant dans la console du navigateur.
 * 
0
0 1
0 1 2
0 1 2 3 4
0 1 2 3 4 5
0 1 2 3 4 5 6
0 1 2 3 4 5 6 7
0 1 2 3 4 5 6 7 8
0 1 2 3 4 5 6 7 8 9
 */

let row

for(let i = 0; i <=10; i++){
    row = ''
    for(let j = 0; j < i; j++){
        row += j + ' '
    }
    console.log(row)
}