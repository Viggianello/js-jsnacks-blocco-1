// JSnack 4: Stampa le potenze di 2 fino a 1000.
// dato che devo ripetere una istruzione dunque uso un ciclo
// parto dalla base 2, controllo che sono dentro il range 1000 ,le potenze di due lo traduco in i = i  * 2
var potenzedi2inriga = [];// mi servirà per stampare il mio output finale in una sola riga e non ripeterlo n volte
for (var i = 2; i <= 1000; i = i * 2) {
    // stampa ogni singolo numero scritto dall utente
    console.log(i);
    // se volessi stampare il risultato in una riga sola? uso l array
    potenzedi2inriga.push(i);
}

// stampa ogni potenza del 2 ,fino a mille,su una sola riga
console.log(potenzedi2inriga);
