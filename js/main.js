/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

let contentDom = document.getElementById('content');
let numberGenerated;
let randomNumber =  [];

contentDom.innerHTML = randomNumber;


for (let i = 0; i<5; i++){
        numberGenerator(1, 100)
    if(!randomNumber.includes(numberGenerated))
    {
        randomNumber.push(numberGenerated)
    }
}
function numberGenerator (min, max){
 numberGenerated = Math.floor(Math.random() * (max - min +1) + min);
 return numberGenerated;
}
console.log(numberGenerated);
console.log(randomNumber);