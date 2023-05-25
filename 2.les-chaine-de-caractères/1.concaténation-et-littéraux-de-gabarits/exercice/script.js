// À partir des éléments ci-dessous et à l'aide de l'opérateur de concaténation +, affichez dans la console la phrase 
// "Bonjour John il y a 40 messages dans votre boîte de réception, dont 28 messages non lus".

let login = "John"
let unreadMessagesCount = 28
let redMessageCount = 12

console.log("bonjour " + login + " il y a " + (unreadMessagesCount + redMessageCount) + " messages dans votre boîte de réception, dont " + unreadMessagesCount + " messages non lus.")

//Affichez la même phrase en utilisant les littéraux de gabarits.

console.log(`bonjour ${login} il y a ${unreadMessagesCount + redMessageCount} messages dans votre boîte de reception, dont ${unreadMessagesCount} messages non lus.`  )