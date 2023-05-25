//Pierre, Jeanne est Paul jouent aux billes pendant la récréation.

//Pierre a 10 billes, Jeanne en a 15 et Paul, 5.

//À chaque partie, le joueur gagnant prend la bille de ses adversaires.

//Pierre gagne les deux premières parties.

//Jeanne gagne la troisième.

//Paul la quatrième, et Jeanne la cinquième
//Jeremy arrive avec un sac plein de calots et propose à chacun d’échanger ses calots contre des billes, avec chacun un arrangement différent.

//Pour Pierre, 1 calot = 4 billes.

//Pour Jeanne, 1 calot = 2 billes.

//Pour Paul, 1 calot = 3 billes.

//, Paul et Jeanne décident d'échanger le maximum de billes avec Jeremy.


// déclaration variables

let billesPierre = 10
let billesJeanne = 15
let billesPaul = 5


// partie 1 et 2 

billesPierre += 4
billesJeanne -= 2
billesPaul -= 2

console.log(`${billesPierre} ${billesJeanne} ${billesPaul}`)

// partie 3 et 5

billesPierre -= 2 
billesJeanne += 4
billesPaul -= 2

console.log(`${billesPierre} ${billesJeanne} ${billesPaul}`)

// partie 4

billesPierre-- 
billesJeanne--
billesPaul += 2

console.log(`${billesPierre} ${billesJeanne} ${billesPaul}`)

// échange avec Pierre

const billesRestantesPierre = billesPierre % 4
const calotsPierre = (billesPierre - billesRestantesPierre) / 4

console.log(`Pierre aura ${calotsPierre} calots et lui restera ${billesRestantesPierre} billes`)

const billesRestantesJeanne = billesJeanne % 2
const calotsJeanne = (billesJeanne - billesRestantesJeanne) / 2

console.log(`Jeanne aura ${calotsJeanne} calots et lui restera ${billesRestantesJeanne} billes`)

const billesRestantesPaul = billesPaul % 3
const calotsPaul = (billesPaul - billesRestantesPaul) / 3

console.log(`Pierre aura ${calotsPaul} calots et lui restera ${billesRestantesPaul} billes`)