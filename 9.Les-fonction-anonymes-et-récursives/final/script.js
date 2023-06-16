/**Dans une application de type CMS permettant de créer un site web à partir d'une interface intuitive, un utilisateur peut ajouter des blocs (div) 
 * pour éditer du contenu. Ces blocs seront stockés dans un objet JavaScript comme suit :
 * 
 * const page = {
   blocs: [] // stock une liste de blocs
}

Object Bloc = {
   id : string;
   blocs: [] // stock une liste de blocs
}

La page stocke une liste de blocs, et chaque bloc peut stocker lui-même une liste de blocs.

À chaque fois que l'utilisateur ajoute un bloc à un autre bloc, celui-ci se st


 */

/** On vous demande de créer un input select qui affichera la liste de tous les id de tous les blocs de la page. Comme vous ne connaissez pas l'objet à 
 * l'avance, une boucle for est impossible pour effectuer cette tâche. On pourrait penser que ce problème peut être résolu par une boucle while, 
 * mais la résolution par ce biais paraît implicitement trop complexe pour que nous puissions retenir cette solution.

La seule solution qu'il vous reste est une fonction récursive, qui sera appelée tant que votre boucle ne sera pas passée dans chaque tableau de chaque bloc.

Vous stockerez les id dans un tableau JavaScript.

Pour vous aider, voici un exemple d'objet simple sur lequel vous pouvez tester votre algorithme dans un premier temps :

const page = {
  blocs: [
    {
      id: 'block1',
      blocs: [
        {
          id: 'block3',
          blocs: []
        },
        {
          id: 'block4',
          blocs: [
            {
              id: 'block7',
              blocs: []
            }
          ]
        }
      ]
    },
    {
      id: 'block2',
      blocs: [
        {
          id: 'block5',
          blocs: [
            {
              id: 'block6',
              blocs: []
            }
          ]
        }
      ]
    }
  ]
}
*/

/**Une fois votre algorithme testé à partir d'un objet simple, copiez/collez le code ci-dessous et testez votre algorithme sur l'objet page retourné par 
 * la fonction createPage().

createPage() crée un objet page possédant un nombre de blocs aléatoire.

createPage = () => {

  createBlocs = (blocs) => {
    const numberBlocks = Math.floor(Math.random() * 5) + 1
    for (let i = 0; i < numberBlocks; i++) {
      blocs.push({id: compteur, blocs: []})
      compteur++;
    }
  }

  const page = {blocs: []}
  let compteur = 1;
  createBlocs(page.blocs)
  page.blocs.forEach(bloc => {
    createBlocs(bloc.blocs)
    bloc.blocs.forEach(bloc => {
      createBlocs(bloc.blocs)
      bloc.blocs.forEach(bloc => {
        createBlocs(bloc.blocs)
      })
    })
  })
  return page
}


const page = createPage();
console.log(page);

 */

createPage =() => {

    createBlocs = (blocs) => {

        const numberBlocks = Math.floor(Math.random() * 5) + 1
        for(let i = 0; i < numberBlocks; i++){
            blocs.push({id : compteur, blocs : []})
            compteur++
        }
    }

    const page = {blocs : []}
    let compteur = 1
    createBlocs(page.blocs)
    page.blocs.forEach(bloc => {
        createBlocs(bloc.blocs)
        bloc.blocs.forEach(bloc => {
            createBlocs(bloc.blocs)
            bloc.blocs.forEach(bloc => {
                createBlocs(bloc.blocs)
            })
        })
    })
    return page
}

getBlock = (bloc, blocs) => {
    if (bloc.blocs.length > 0) {
        bloc.blocs.forEach(b => {
            blocs.push(b.id)
            getBlock(b, blocs)
        })
    }
}

const page = createPage() // création d'un objet page aléatoire
console.log(page)

const idblocs = [] // tableau de stockage des id de chauqe bloc
//on boucle sur le tableau des blocs contenu dans page
page.blocs.forEach(bloc => {
    idblocs.push(bloc.id) // stock les id des blocs
    getBlock(bloc, idblocs) // appel de la fonction récursives
})

console.log(idblocs)