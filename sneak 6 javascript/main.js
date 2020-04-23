// JSnack 4: Stampa le potenze di 2 fino a 1000.
// creo l array vuoto
var array = [];
// dato che devo ripetere una istruzione uso un ciclo
for (var i = 0; i < 6; i++) {
    // chiedo all utente di inserire per 6 volte dei numeri
    var num = parseInt(prompt('Scrivi un numero: ',i));
    // stampa ogni singolo numero scritto dall utente
    console.log(num);
    // controllo se i numeri inseriti dall utente sono dispari
    if(num % 2 == 1){
        // inserisco il numero dispari nell array
        array.push(num);
    }
}
// stampo l array
console.log(array);
