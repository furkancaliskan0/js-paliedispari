//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma
//Dare output relativo.



let wordUser = prompt("Inserisci una parola");
console.log("Inserisci una parola:", wordUser);

let parolaInvertita = reverseString(wordUser);

    function reverseString(world) {

    let splitword = world.split("");
    console.log("La parola divisa è:", splitword);

    splitword = splitword.reverse();
    console.log("La parola invertita è:", splitword);


    wordReverse = splitword.join("");
    console.log("La parola finale è:", splitword);

    return wordReverse;

}

if(wordUser == parolaInvertita){
    console.log(`La parola ${wordUser} è palindroma`);
    } else {
    console.log(`La parola ${wordUser} non è palindroma`);
    }
