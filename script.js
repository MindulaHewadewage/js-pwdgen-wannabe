// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

console.log('JS OK')


// Prendo documento dal DOM
const password = document.getElementById('password')
console.log('password')


// Chiedi all’utente il suo nome,
const userName = prompt('Nome' ,'Mindu')
console.log('nome')

// Chiedi all'utente il suo cognome
const userSurname = prompt('Cognome', 'Fernando')
console.log('cognome')

// Chiedi all'utente il suo colore preferito
const favColour = prompt('Colore Preferito', 'Rosso')
console.log('favColour')

// Infine scrivi sulla pagina nomecognomecolorepreferito21
password.innerText = ("La tua password è : " +''+ userName + userSurname + favColour + 21);
