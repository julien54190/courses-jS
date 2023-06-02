/**Avec l'aide de boucles imbriquées, vous devrez afficher en console les tables de multiplication de 1 à 9 de la manière suivante :
=== table de 1 ===
1 x 1 = 1
2 x 1 = 2
3 x 1 = 3
4 x 1 = 4
5 x 1 = 5
6 x 1 = 6
7 x 1 = 7
8 x 1 = 8
9 x 1 = 9
=== table de 2 ===
1 x 2 = 2
2 x 2 = 4
3 x 2 = 6
...
 */

for(let i = 1 ; i < 10; i++){
    console.log(`=== table de ${i} ===`)
    for(let y =1; y < 10; y++){
        console.log(`${i} x ${y} = ${i * y}`)
    }
}


// solution donner exercice

let i = 1;

while (i < 10) {
  console.log(`=== table de ${i} ===`)
  for(let y = 1; y < 10; y++) {
    console.log(`${y} x ${i} = ${i*y}`);
  }
  i++;
}