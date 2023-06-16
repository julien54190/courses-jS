/**Pour éditer le bulletin de notes d'une classe, nous avons besoin d’extraire la meilleure note. À l'aide d'une fonction récursive, 
 * créez un algorithme qui trie les éléments du tableau et retourne la plus haute.
 * 
 * La fonction récursive que nous souhaitons faire est une fonction qui compare une variable qui stocke la meilleure note avec la valeur de 
 * l'index du tableau :

Si la valeur de l'index du tableau est supérieure à la meilleure note, alors la meilleure note devient celle-ci.

Pour augmenter l'index du tableau à comparer, vous pouvez créer une variable compteur qui s'incrémentera avant chaque rappel de la fonction.

La condition de fin de la fonction est lorsque la taille du tableau de notes est égale au compteur.

Cette fonction récursive retourne une variable higher. N'oubliez pas de retourner la récursivité.

 */

const notes  = [10, 28, 15, 17, 32, 5, 12, 4]

// On démarre à zéro le compteur pour tester toute les valeurs du tableau notes[counter]
let counter = 0

//La note la plus basse sur le bulletin est zéro
let higher = 0

function getNote(counter, note, higher) {

    // On check s'il reste des valeus à comparer dans le tableau
    if (counter < notes.length) {
        // si out on compare notre valeur de higher avec la nouvelle valeur 
        if(higher < notes[counter]){
            higher = notes[counter]
        }
        counter++
        return getNote(counter, notes, higher)
    }
    else {
        //Sinon on retourne notre valeur
        return higher
    }
}

console.log(getNote(counter, notes, higher))


console.log('---------------------')

/*
// Tableau de note 
const notes  = [10, 28, 15, 17, 32, 5, 12, 4];

//On démarre à zéro le compteur pour tester toutes les valeurs du tableau notes[counter]
let counter = 0;

// La note la plus basse sur un bulletin est zéro
let higher = 0;


function getNote(counter, notes, higher) {

    // On check si il reste des valeurs à comparer dans le tableau
    if (counter < notes.length) {
          // si oui on compare notre valeur de higher avec la nouvelle valeur 
		higher = higher > notes[counter] ? higher : notes[counter];
		counter++;
		return getNote(counter, notes, higher)
	} else {
          //sinon on retourne notre valeur
		return higher;
	}
}
			
			
		
console.log(getNote(counter, notes, higher)) // retourne 32 dans la console.*/
