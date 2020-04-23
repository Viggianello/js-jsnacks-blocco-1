// JSnack 5: Stampa il cubo dei primi N numeri, dove N è un numero indicato dall utente.
// Chiedo all utente N ed esponente
var n = prompt('Dammi il valore di N: ');
var esponente = prompt('Dammi dell esponente cubo: ', 3);
// mi servirà per stampare il mio output finale in una sola riga e non ripeterlo n volte
// var cuboinriga = [];
var outputinriga = [];
// dato che devo ripetere una istruzione uso un ciclo
for (var i = 1; i <= n; i++) {
    // stampa ogni singolo numero nel range del N ove il range parte da 1 a N
    console.log(i);
    // creo la variabile cubo
    // var cubo = i * i * i;
    var potenza = Math.pow(i, esponente);
    // stampo il cubo di ogni singolo numero nel range del N ove il range parte da 1 a N
    // console.log(cubo);
    console.log(potenza);
    // se volessi stampare il risultato in una riga sola? uso l array
    // cuboinriga.push(cubo);
    outputinriga.push(potenza);
}

// stampa ogni cubo del singolo numero nel range del N su una sola riga
// console.log(cuboinriga)
console.log(outputinriga);
