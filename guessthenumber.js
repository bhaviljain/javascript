let randomnumber = parseInt(Math.random() * 100 + 1);
let submit = document.querySelector('#subt');
let userinput = document.querySelector('#guessfield');
let guessSlot = document.querySelector('.guesses')
let remaining = document.querySelector('.lastresult')
let loworhigh = document.querySelector('.loworhigh')
let startover = document.querySelector('.resultparas')

let p = document.createElement('p')
let prevGuess = [] //previous joh bhi guess kiye woh batana h islie array liya h
let numGuess = 1; //num of attempts

let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        let guess = parseInt(userinput.value);
        validateGuess(guess)

    })
}

function validateGuess(guess) {
    //valid number guess kiya hain ya nahi
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    }
    else if (guess < 1) {
        alert('Please enter a number greater than 1')
    }
    else if (guess > 100) {
        alert('Please enter a number lower than 100')
    }
    else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`game over, random mumber was ${randomnumber}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess) { //
    if (guess === randomnumber) {
        displayMessage(`YOOO right answer`)
        endGame()
    }
    else if (guess < randomnumber) {
        displayMessage(`Number is TOO low`)
    }
    else if (guess > randomnumber) {
        displayMessage(`Number is tooo High`)
    }
}
function displayGuess(guess) {
    //
userinput.value = '';
guessSlot.innerHTML +=`${guess}, `
numGuess++;
remaining.innerHTML =`${12-numGuess}`
}
function displayMessage(message) {//
    loworhigh.innerHTML = `<h3>${message}</h3>`
}
function newGame() {
const newGamebutton = document.querySelector('#newGame')
newGamebutton.addEventListener('click', function(e){
    randomnumber= parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numGuess =1
    guessSlot.innerHTML= ''
    remaining.innerHTML =`${12-numGuess}`
    userinput.removeAttribute('disabled')
    startover.removeChild(p)
    playGame = true
})
}
function endGame() {
    userinput.value=''
    userinput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h3 id="newGame">start new game</h3>`
    startover.appendChild(p)
    playGame = false
    newGame()

}
