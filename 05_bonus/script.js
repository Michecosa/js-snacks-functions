/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/



const name = 'Mario';

/**
 * Restituisce un saluto personalizzato in base all'ora del giorno
 * 
 * @param {string} persona - Il nome della persona da salutare
 * @return {string} - Un messaggio di saluto con il nome incluso
 * 
 * @example
 * Esempio: se sono le 15
 * Output: "Buonasera Mario."
*/

// Dichiara la funzione qui.
function greet(persona) {
  const hour = new Date().getHours();
  let greeting;

  if (hour < 13) {
    greeting = "Buongiorno";
  } else if (hour < 17) {
    greeting = "Buon pomeriggio";
  } else {
    greeting = "Buonasera";
  }
  return `${greeting} ${persona}.`
}

// Invoca la funzione qui e stampa il risultato in console
console.log(greet(name));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.