// Selfwork Funzioni 2
// Scrivi una funzione che permetta di stampare in console tutti i numeri da 1 a N:

//     N dovra’ rappresentare il parametro formale della funzione
//     tutti i numeri multipli di 3 siano sostituiti dalla stringa 'Fizz',
//     tutti i numeri multipli di 5 siano sostituiti dalla stringa 'Buzz'
//     e tutti i numeri multipli di 15 siano sostituiti dalla stringa 'fizzBuzz'



// Avevo immaginato di salvare i numeri in un array e di sostituirli con le stringhe seguendo le indicazione scelte, visto che avevamo studiato come si sostituiscono i dati all'interno di un array


function creaNumeri(massimo){
    
    for (let i=1; i<=massimo; i++) {
        if (i % 15 === 0){
            console.log("fizzBuzz");
    
        } else if (i % 3 === 0){
            console.log("Fizz");
    
        } else if (i % 5 === 0){
            console.log("Buzz");
             ;
        } else {
            console.log(i);
            
        }
    }
}


let massimo = parseInt(prompt("Inserisci il numero massimo da raggiungere"));

console.log("Stampa dei risultati:");
creaNumeri(massimo);
