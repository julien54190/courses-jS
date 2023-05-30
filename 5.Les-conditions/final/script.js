// Le message affiché devra être sous la forme suivante :

// "Bonjour [civilité de l'utilisateur] [nom de l'utilisateur]. ["Inscrivez-vous vite à notre newsletter" / "Merci de vous être abonné à notre newsletter"], 
// elle permettra de vous envoyer de délicieuses recettes de votre catégorie préférée, [catégorie culinaire préférée de l'utilisateur]!"

// Pour conditionner l'affichage de la civilité de l'utilisateur, nous utiliserons une condition ternaire sur la donnée civility du formulaire.

// Pour conditionner l'affichage du message "Inscrivez-vous vite à notre newsletter" ou "Merci de vous être abonné à notre newsletter", 
// nous utiliserons une condition if...else sur la donnée newsletter du formulaire.

// Pour conditionner l'affichage de la catégorie préférée, nous utiliserons un switch sur la donnée category du formulaire, 
// la valeur par défaut sera "Entrée froide".


const el = document.getElementById('register-form');
el.addEventListener('submit', (event) => {
  event.preventDefault();

  let civility = event.target.female.checked ? 'female' : 'male';
  let name = event.target.name.value;
  let category = event.target.category.value;
  let newsletter = event.target.newsletter.checked;

  // Les variables déclarées ci-dessus contiennent les données du formulaire
});

let displayedCivility = civility === 'female' ? 'Mme' : 'Mr'
let newsletterMessage

if(newsletter){
    newsletterMessage = "Merci de vous êtres abonné à notre newsletter"
}else{
    newsletterMessage = "Inscrivez-vous à notre newsletter"
}

let displayedCategory

switch(category){
    case 'cold-starter' : 
        displayedCategory = 'Entrée froide'
        break
    case 'soup' :
        displayedCategory = 'Soupe'
        break
    case 'main-course' : 
        displayedCategory = "Plat"
        break
    case 'fruit-dessert' :
        displayedCategory = 'dessert (fruit)'
        break
    case 'chocolat-dessert' : 
        displayedCategory = 'dessert (chocolat)'
    default :
        displayedCategory = 'Entréé froide'
}

alert(`Bonjour ${displayedCivility} ${name}. ${newsletterMessage}, elle permettra de vous envoyer de délicieuses recettes de votre catégorie préférée, ${displayedCategory}!`);
