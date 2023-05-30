/**
 * "Passion crochet" (5421) - Réduction 10%
 * "Golf magazine" (9838) - Réduction 5%
 * "Nouveautés Ciné" (4419) - Réduction 15%
 * "Le développeur du dimanche" (1087) - Réduction 20%
 */

// const el = document.getElementById('user-favorite')
// el.addEventListener('submit', (event) => {
//     event.preventDefault()
//     let favoriteMagazine = event.target.magazine.value
//     console.log(favoriteMagazine)

//     let magazineName = null
//     let offer = null

//     switch(favoriteMagazine){
//        case '5421' : 
//         magazineName = 'Passion crochet'
//         offer = '10%'
//         break
//        case '9838' : 
//         magazineName = 'Golf magazine'
//         offer = '5%'
//         break
//        case '4419' : 
//         magazineName = 'Nouveautés Ciné'
//         offer = '15%'
//         break
//        case '1087' : 
//         magazineName = 'Le développeur du dimanche'
//         offer = '20%'
//         break
//     }

//     alert(`l'abonnement au magazine ${magazineName} à une réduction exeptionnelle de ${offer}, profitez-en.`)


//})

const el = document.getElementById('user-favorite')
el.addEventListener('submit', (event) => {
    event.preventDefault()
    let favoriteMagazine = event.target.magazine.value
    console.log(favoriteMagazine)

    let magazineName = null
    let offer = null

    switch(favoriteMagazine){
        case '5421' : 
            magazineName = 'Passion crochet'
            offer = '10%'
            break
        case '9838' : 
            magazineName = 'Golf magazine'
            offer = '5%'
            break
        case '4419' : 
            magazineName = 'Nouveautés Ciné'
            offer = '15%'
            break
        default :
            magazineName = 'Magazine introuvable'
            offer = '0%'
    }

    alert(`l'abonnement au magazine ${magazineName} à une réduction exeptionnelle de ${offer}, profitez-en.`)


})