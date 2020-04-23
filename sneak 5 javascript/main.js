// JSnack 5: Stampa il cubo dei primi N numeri, dove N è un numero indicato dall utente.
// Chiedo all utente N
var n = prompt('Dammi il valore di N: ');
// mi servirà per stampare il mio output finale in una sola riga e non ripeterlo n volte
var cuboinriga = [];
// dato che devo ripetere una istruzione uso un ciclo
for (var i = 1; i <= n; i++) {
    // stampa ogni singolo numero nel range del N ove il range parte da 1 a N
    console.log(i);
    // creo la variabile cubo
    var cubo = i * i * i;
    // stampo il cubo di ogni singolo numero nel range del N ove il range parte da 1 a N
    console.log(cubo);
    // se volessi stampare il risultato in una riga sola? uso l array
    cuboinriga.push(cubo);
}

// stampa ogni cubo del singolo numero nel range del N su una sola riga
console.log(cuboinriga);
