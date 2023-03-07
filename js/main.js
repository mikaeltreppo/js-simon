/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

let contentDom = document.getElementById('content');
let numberGenerated;
let randomNumber = [];


// ciclo 5 volte per inserire random number in array
for (let i = 0; i < 5; i++) {
    numberGenerator(1, 100)
    if (!randomNumber.includes(numberGenerated)) {
        randomNumber.push(numberGenerated)
    }
}
//creo numero
function numberGenerator(min, max) {
    numberGenerated = Math.floor(Math.random() * (max - min + 1) + min);
    return numberGenerated;
}
//mostro i numeri
contentDom.innerHTML = randomNumber;
// setto il timer a 30 secondi  e nascondo i numeri

let numberUser;
setTimeout(fiveUserNumber, 4000);

setTimeout(function () {
    contentDom.innerHTML = "";
}, 3000);

// chiedo con prompt i numeri all'utente e li salvo in array
let userNumberList = [];

function fiveUserNumber() {
    for (let i = 0; i < randomNumber.length; i++) {
        numberUser = parseInt(prompt('inserisci i numeri uno alla volta'));
        userNumberList.push(numberUser)
    }
    console.log(userNumberList);
    //confronto
    let points = 0;
    let sameNumbers = [];
    for (let i = 0; i < randomNumber.length; i++) {
        if (userNumberList.includes(randomNumber[i])) {
            sameNumbers.push(randomNumber[i])
            points++;
        }

    } 
   contentDom.innerHTML = "hai fatto : " + points + " punti" + " i numeri corretti sono : " + sameNumbers;


}
console.log(randomNumber);