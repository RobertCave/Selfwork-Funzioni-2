// Selfwork Funzioni 2
// Scrivi una funzione che permetta di stampare in console tutti i numeri da 1 a N:

//     N dovra’ rappresentare il parametro formale della funzione
//     tutti i numeri multipli di 3 siano sostituiti dalla stringa 'Fizz',
//     tutti i numeri multipli di 5 siano sostituiti dalla stringa 'Buzz'
//     e tutti i numeri multipli di 15 siano sostituiti dalla stringa 'fizzBuzz'



function creaNumeri(massimo){
    let numeri=[];
    for (let i=1; i<=massimo; i++) {
        numeri.push(i); 
    }
    return numeri;
}


let massimo = parseInt(prompt("Inserisci il numero massimo da raggiungere"));

numeriNorm = creaNumeri(massimo);

for (let j=0; j<=massimo; j++) {

    if (numeriNorm[j] % 15 === 0){
        numeriNorm[j] = "fizzBuzz";

    } else if (numeriNorm[j] % 3 === 0){
        numeriNorm[j] = "Fizz";

    } else if (numeriNorm[j] % 5 === 0){
        numeriNorm[j] = "Buzz";
    }

    
}

console.log("Stampa dei risultati:");

for (let k=0; k<massimo; k++) {
    console.log(numeriNorm[k]);

}






