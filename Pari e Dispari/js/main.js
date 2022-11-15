//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
///Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri.               
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

let numeroUser = parseInt(prompt("Scegli un numero tra 1 e 5"));
console.log("La mia scelta è:", numeroUser);

let mionumero = prompt("Scegli pari o dispari");
console.log("Il mio numero è:", mionumero);

let pcNum = randomNum(1, 5);
console.log("il numero del computer è: " + pcNum);

let somma =pariODispari(numeroUser + pcNum);
console.log("La somma dei due numeri è:", somma);

let risultato = pariODispari();
console.log("Il risultato è:", risultato);

function randomNum (min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function pariODispari (numero){
    if (numero % 2 === 0){
        return "pari";
    } else {
        return "dispari";
    }
}

if (risultato === mionumero) {
    console.log("vittoria")
} else {
    console.log("sconfitta, ha vinto il computer")
}