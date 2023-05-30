// Écrivez le code permettant d'afficher le nom d'une chaîne de télévision en fonction de son numéro avec une syntaxe switch. 
// Un numéro ne correspondant qu'à une seule chaîne, il faudra faire en sorte que le code soit le plus performant possible, 
// en sortant du switch immédiatement après avoir trouvé la bonne chaîne. Si le numéro de chaîne n'est pas trouvé, 
// il faudra informer l'utilisateur par un message console.

let message
let tvStation = 1

switch(tvStation){
    case 1 :
        message = "TF1"
        break
    case 2 :
        message = "France 2"
        break
    case 3 :
        message = "France 3"
        break
    case 4 :
        message = "Canal +"
        break
    case 5 :
        message = "France 5"
        break
    case 6 :
        message = "M6"
        break
    case 7 :
        message = "ARTE"
        break
    case 8 :
        message = "C8"
        break
    default : 
        message = "la chaîne n'a pas été trouvé."
}

console.log(message)