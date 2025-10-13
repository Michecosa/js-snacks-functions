/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function countVowels(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (
      letter === 'a' ||
      letter === 'e' ||
      letter === 'i' ||
      letter === 'o' ||
      letter === 'u'
    ) {
      count++;
    }
  }
  return count;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(countVowels(word));



//Risultato atteso se si passa 'javascript': 3 (a, a, i)