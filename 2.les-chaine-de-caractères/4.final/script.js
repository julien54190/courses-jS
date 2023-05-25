//Intégrez les variables saisies par l'utilisateur au sein du courrier type dont vous disposez, et affichez-le en console. La mise en page devra être respectée.

//Le nom et le prénom devront systématiquement apparaître en majuscules au niveau de l'affichage de la première ligne.

//À MIPSUM LAURE
  
//        Objet de la convocation: Entretien annuel
    
//        Mme Mipsum Laure, vous êtes convoqué(e) le 25/03/2020 dans le bureau D107 pour le motif suivant: Entretien annuel.
    
//En vous remerciant.
    
//Votre agent administratif

const objet = prompt('Entrez le motif de la convocation')
const lastName = prompt('Entrez un nom')
const firstName = prompt('Entrez un prénom')
const gender = prompt('M ou Mme')
const dateAppointement = prompt('Entrez une date de convocation (dd/mm/yyyy)');
const place = prompt('Entrez un numéro de bureau')
const signature = 'Votre agent administratif';

let body = `
À ${lastName.toUpperCase()} ${firstName.toUpperCase()}

          Objet de la convocation : ${objet}
          
          ${gender} ${lastName.charAt(0).toUpperCase()}${lastName.slice(1)} ${firstName.charAt(0).toUpperCase()}${firstName.slice(1)}, vous êtes convoqué(e) le ${dateAppointement} dans le bureau ${place} pour le motif suivant: ${objet}

En vous remerciant

${signature}`

console.log(body)