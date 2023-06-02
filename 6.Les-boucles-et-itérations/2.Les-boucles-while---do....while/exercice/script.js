/**
 * Dans cet exercice, nous avons une variable total initialisée avec la valeur zéro.

Nous souhaitons faire une boucle while qui permet d'incrémenter, et d'afficher ensuite la valeur total, tant que celle-ci est inférieure à 10.

Juste au-dessous de la boucle while, nous voulons exécuter une boucle do...while avec le même bloc d'instructions.

Que pouvons-nous constater dans la console et pourquoi ?
 */

let total = 0

while (total < 10) {
    total++
    console.log(total)
}


do {
    total++
    console.log(total)
}while (total < 10)

/**
 * Nous constatons que la console affiche les valeurs de 1 à 11.

En effet, la boucle while va incrémenter et afficher la valeur de total jusqu'à 10, puisque nous l'incrémentons avant d'afficher sa valeur.

En arrivant sur la boucle do...while , total vaut donc déjà 10, mais comme la condition de cette boucle est exécutée après les instructions du bloc do, 
alors on passe dans ce bloc ce qui incrémente total et l'affiche dans la console (avec la valeur 11).

C'est pourquoi la console affiche également la valeur 11. Ensuite, la condition est exécutée : comme total vaut 11, on ne repasse pas dans 
la boucle do...while.

Si on aurai incrémenter apres le console.log total aurai commencer a 0 et on aurai eu de 0 à 9 pour while et 10 pour DO.
 */