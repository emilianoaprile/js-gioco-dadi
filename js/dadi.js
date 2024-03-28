/*
Gioco dei dadi

Generare 5 numeri random da 1 a 6, sia per l'utente 1 che per l'utente 2.

Stabilire il vincitore, in base alla somma dei 5 numeri: la somma più alta fra le due vince il duello.
Il primo che totalizza 3 duelli vinti, si aggiudica la partita.
*/

const btnStartElement = document.getElementById('start')
const userPointElement = document.getElementById('user_point')
const pcPointElement = document.getElementById('pc_point')
const resultElement = document.querySelector('.result-message')
const userScoreElement = document.getElementById('user_score')
const pcScoreElement = document.getElementById('pc_score')
const btnREstartElement = document.getElementById('restart')

let punteggioUser1 = 0
let punteggioUser2 = 0

// click inizio gioco
btnStartElement.addEventListener('click', function () {

    // variabili 
    const sumUser1 = sumNumberUser1();
    const sumUser2 = sumNumberUser2();
    let message = '';

    // logica vincitore duello
    if (sumUser1 > sumUser2) {
        message = 'Utente VINCE!'
        userPointElement.innerHTML = sumUser1
        pcPointElement.innerHTML = sumUser2
        resultElement.innerHTML = message
        punteggioUser1++

    } else if (sumUser2 > sumUser1) {
        message = 'Computer VINCE!'
        userPointElement.innerHTML = sumUser1
        pcPointElement.innerHTML = sumUser2
        resultElement.innerHTML = message
        punteggioUser2++

    } else if (sumUser1 === sumUser2) {
        message = 'PAREGGIO!'
        resultElement.innerHTML = message

    }
    // punteggio aggiornato nel DOM
    userScoreElement.innerHTML = punteggioUser1
    pcScoreElement.innerHTML = punteggioUser2

    // logica vincitore partita + btn inizia disabilitato
    if (punteggioUser1 === 3 || punteggioUser2 === 3) {

        if (punteggioUser1 > punteggioUser2) {
            resultElement.innerHTML = 'Utente VINCE LA PARTITA!'
            btnStartElement.disabled = true;

        } else {
            resultElement.innerHTML = 'Computer VINCE LA PARTITA!'
            btnStartElement.disabled = true;
        }
    }
    // console.log('somma user1:', sumUser1);
    // console.log('somma user2:', sumUser2);
    // console.log('Risultato:', message)
    // console.log('punteggio user 1:', punteggioUser1)
    // console.log('punteggio user 2:', punteggioUser2)

})

// click restart partita
btnREstartElement.addEventListener('click', function () {

    // reset statistiche
    userPointElement.innerHTML = ''
    pcPointElement.innerHTML = ''
    resultElement.innerHTML = ''
    userScoreElement.innerHTML = ''
    pcScoreElement.innerHTML = ''

    punteggioUser1 = 0
    punteggioUser2 = 0

    // riabilito il button start
    btnStartElement.disabled = false
})

// funzioni
function sumNumberUser1() {
    const user1Numbers = []
    let sum1 = 0
    let number

    for (let i = 0; i < 5; i++) {
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        // console.log(randomNumber)
        user1Numbers.push(randomNumber)
    }

    for (let i = 0; i < user1Numbers.length; i++) {
        number = user1Numbers[i]
        sum1 += number
    }

    return sum1;
}

function sumNumberUser2() {
    const user2Numbers = []
    let sum2 = 0
    let number

    for (let i = 0; i < 5; i++) {
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        // console.log(randomNumber)
        user2Numbers.push(randomNumber)
    }

    for (let i = 0; i < user2Numbers.length; i++) {
        number = user2Numbers[i]
        sum2 += number
    }

    return sum2;
}