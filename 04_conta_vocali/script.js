/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function countVocals(string) {
  let vocals = 0;
  for (let i = 0; i < string.length; i++) {
    const letter = string[i].toLowerCase();
    if(letter === 'a' || letter === 'e' ||letter === 'i' ||letter === 'o' ||letter === 'u') {
      vocals++;
    }
  }
  return vocals;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(`Vocali trovate in ${word}: ${countVocals(word)}`);



//Risultato atteso se si passa 'javascript': 3 (a, a, i)