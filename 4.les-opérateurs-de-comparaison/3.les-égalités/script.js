let age = 28

if (age == 28){
    console.log("condition vérifiée")
}
// == est une égalitée faible , il compare seulemnt les valeur . donc exemple ci-dessus juste et ci-dessous aussi 

let age2 = '28'

if (age2 == 28){
    console.log("condition vérifiée")
}



let age1 = '28'

if (age1 === 28){
    console.log("condition vérifiée")

}

// === est une églatitée strict , il compare les valeurs et les types . donc dans l'exemple ci-dessus le code ne marche pas.

let age3 = 28

if (age3 === 28){
    console.log("condition vérifiée")
}


// même fonctionement avec les inverse qui sont != pour le faible et !== pour le stict.