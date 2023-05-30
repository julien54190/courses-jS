let printEdition = true


if(printEdition == true){
    //envoi du courrier postam
} else {
    // envoi de l'email
}

let printEdition1 = true
let digitalEdition = true

if(printEdition1){
    //envoi du courrier postal
} else if(printEdition1 && digitalEdition) {
    // envoi de l'email
    // envoi courrier postal
} else {
    // envoi de l'email
}

let printEdition2 = false
let digitalEdition2 = false

if(printEdition2){
    //envoi du courrier postal
} else if(printEdition2 && digitalEdition2) {
    // envoi de l'email
    // envoi courrier postal
} else if (digitalEdition2) {
    // envoi de l'email
}else{
    // envoi du courrier avec les offres (prospect)
}

let printEdition3 = true
let digitalEdition3 = false
let isVIP = true

if(printEdition3){
    if(isVIP){
        // Envoi du courrier postal pour VIP
    }else{
        // envoi du courrier postal classic
    }
} else if(printEdition3 && digitalEdition3) {
    // envoi de l'email
    // envoi courrier postal
} else if (digitalEdition3) {
    // envoi de l'email
}else{
    // envoi du courrier avec les offres (prospect)
}