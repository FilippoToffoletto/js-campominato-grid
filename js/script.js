/*
**Consegna**
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

// acquisico il container dall'html
const container  = document.querySelector('.container');
const elementPerRow = 10;

document.getElementById('play').addEventListener('click', function(){
    container.innerHTML = '';
    init(elementPerRow);
})

// init(elementPerRow);

// inizializzo le 100 caselle 

function init(numElements){
    const totalSquares = Math.pow(elementPerRow, 2);
    for(let i = 0; i < totalSquares; i++){
        createSquare(i);
    }
}

function createSquare(divSquare){
    const square = document.createElement('div');
    square.className = 'square';
    square.innerHTML = divSquare + 1;
    square.addEventListener('click', clickSquare)
    container.append(square);
}

function clickSquare(){
    console.log(this.innerHTML);
    this.classList.add('crimson');
}






