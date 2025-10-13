/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function findInitials(list, initial) {
  const result = [];
  for (let i = 0; i < list.length; i++) {
    const firstLetter = list[i][0];
    if (firstLetter.toLowerCase() === initial.toLowerCase()) {
      result.push(list[i]);
    }
  }
  return result;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(findInitials(names, 'A'));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]