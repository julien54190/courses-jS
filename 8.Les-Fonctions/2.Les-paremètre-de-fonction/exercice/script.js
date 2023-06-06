/**Vous créez un site Internet permettant à l'utilisateur de calculer automatiquement des volumes en fonction des formes géométriques. Dans un chapitre consacré aux parallélépipèdes, vous proposez de calculer le volume en fonction de ces dimensions.

Le volume d’un parallélépipède est égal à la hauteur*largeur*profondeur.

Votre fonction sera appelée par le programme ci-dessous :

 */

function cube(hieght, width, depth){
    return(hieght * width * depth)
}

const height = prompt('Hauteur du parallélépipèdes ');
const width = prompt('Largeur du parallélépipèdes ');
const depth = prompt('Profondeur du parallélépipèdes ');;

const volume = cube(height, width, depth)

console.log(volume)