let neighborhood = "Port Marianne"
let age = 46
let hasVolredLastYear = true

// "Truthy" - true - 1 (!falsey)
//"Falsey" - false - null - undefined - 0 - ""

if (neighborhood == "Port Marianne" && age >= 18) { // && est l'opérateur logique pour ET
    // Envoyer la communication 
}

if (age >= 18 && neighborhood == "Port Marianne" || hasVolredLastYear == false ) { // || est l'opérateur logique pour OU
    // Envoyer la communication 
}

if (age >= 18 && neighborhood == "Port Marianne" || !hasVolredLastYear ) { // ! est l'opérateur logique pour NOT soit !hasVolredLastYear = hasVolredLastYear == false
    // Envoyer la communication 
}