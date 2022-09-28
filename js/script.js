let word = ""

// Setting local storage for the words
localStorage.setItem('words', JSON.stringify(["circo", "montanha", "futebol", "ilha", "caderno", "carro", "livro", "amizade"]))
console.log('storage', JSON.parse(localStorage.getItem('words')))

let words = JSON.parse(localStorage.getItem('words'))

const home = document.querySelector(".home")
const gameboard = document.querySelector(".board")
const newWord = document.querySelector(".addWord")

const gameboardWord = document.querySelector(".game-word")
const wrongLettersField = document.querySelector(".wrong-letters")

// Canvas drawing
const pencil = document.querySelector("canvas").getContext("2d")

pencil.fillStyle = "#0A3871" 
pencil.fillRect(0, 295, 294, 5)

//Function to sort a new word
function sortNewWord() {
    let hiddenWord = Math.floor(Math.random() * words.length)

    word = words[hiddenWord]
    for (letter of word) {
        gameboardWord.innerHTML += `<span></span>`
    }
}

// Function to play the game
function playGame(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        if (word.includes(event.key)) {
            for (let i = 0; i < word.length; i++) {
                if(event.key == word[i]) {
                    gameboardWord.childNodes[i].innerText = word[i]
                    checkMatch(word)
                }
            }

        } else {
            wrongLettersField.innerText += event.key
            drawForcaCanvas()
        }
    }
    console.log(event.keyCode)
}

function checkMatch(word) {
    let wordHidden = "" 

    for(letter of gameboardWord.childNodes) {
        wordHidden += letter.innerText.toLowerCase()
    }

    console.log(word, wordHidden)
    if (wordHidden == word) {
        document.querySelector(".result-text").innerHTML = "<p style='color: #0A3871'>Parabéns, você venceu!</p>"
        document.onkeydown = ""
    }
}

// Home page functions
function startGame() {
    home.style.display = "none"
    gameboard.style.display = "flex"

    gameboardWord.innerHTML = ""

    sortNewWord()
    console.log(words, word)

    document.onkeydown = playGame
}

function handleNewWordPage() {
    home.style.display = "none"
    newWord.style.display = "flex"

    document.querySelector(".newWord-input").value = ""
}

// Gameboard page functions
function startoverGame() {
    gameboardWord.innerText = ""
    wrongLettersField.innerText = ""
    document.querySelector(".result-text").innerText = ""
    pencil.clearRect(0, 0, 294, 295)

    sortNewWord()

    document.onkeydown = playGame
    console.log(words, word)
}

function drawForcaCanvas() {
    if (wrongLettersField.innerText.length == 1) {
        pencil.fillStyle = "#0A3871" 
        pencil.fillRect(80, 0, 5, 300)
    } else if (wrongLettersField.innerText.length == 2) {
        pencil.fillStyle = "#0A3871" 
        pencil.fillRect(80, 0, 175, 5)
    } else if (wrongLettersField.innerText.length == 3) {
        pencil.fillStyle = "#0A3871" 
        pencil.fillRect(255, 0, 5, 50)
    } else if (wrongLettersField.innerText.length == 4) {
        pencil.fillStyle = "transparent";
        pencil.beginPath();
        pencil.strokeStyle = "#0A3871"
        pencil.arc(257.5, 81, 31, 0, 2 * Math.PI);
        pencil.lineWidth = 5;
        pencil.stroke()
        pencil.fill();
    } else if (wrongLettersField.innerText.length == 5) {
        pencil.fillStyle = "#0A3871" 
        pencil.fillRect(255, 112, 5, 75)
    } else if (wrongLettersField.innerText.length == 6) {
        pencil.beginPath();
        pencil.strokeStyle = "#0A3871"
        pencil.moveTo(257.5, 114);
        pencil.lineTo(225, 150);
        pencil.lineWidth = 5;
        pencil.stroke();
    } else if (wrongLettersField.innerText.length == 7) {
        pencil.beginPath();
        pencil.strokeStyle = "#0A3871"
        pencil.moveTo(257.5, 114);
        pencil.lineTo(290, 150);
        pencil.lineWidth = 5;
        pencil.stroke();
    } else if (wrongLettersField.innerText.length == 8) {
        pencil.beginPath();
        pencil.strokeStyle = "#0A3871"
        pencil.moveTo(257.5, 184);
        pencil.lineTo(225, 240);
        pencil.lineWidth = 5;
        pencil.stroke();
    } else if (wrongLettersField.innerText.length == 9) {
        pencil.beginPath();
        pencil.strokeStyle = "#0A3871"
        pencil.moveTo(257.5, 184);
        pencil.lineTo(290, 240);
        pencil.lineWidth = 5;
        pencil.stroke();

        document.querySelector(".result-text").innerHTML = "<p style='color: red'>Você perdeu!</p>"
        document.onkeydown = ""
    }
}

// New word page functions
function addNewWord() {
    const newWordInput = document.querySelector(".newWord-input").value
    const warningText = document.querySelector(".warning")

    if (newWordInput.trim().length > 8 || newWordInput.trim() == "") {
        warningText.innerText = "Por favor entre com uma palavra válida!"

        setInterval(() => {
            warningText.innerText = ""
        }, 2000)
    } else {
        newWord.style.display = "none"
        gameboard.style.display = "flex"
        
        gameboardWord.innerText = ""
        wrongLettersField.innerText = ""
        document.querySelector(".result-text").innerText = ""
        pencil.clearRect(0, 0, 294, 295)
        

        words.push(newWordInput.toLowerCase())
        sortNewWord()
        console.log(words, word)

        document.onkeydown = playGame
    }
}

// Back to menu function
function backToMenu() {
    home.style.display = "flex"
    newWord.style.display = "none"
    gameboard.style.display = "none"
}

































/*    BONECO COM CANVAS    */

// const pencil = document.querySelector("canvas").getContext("2d")

// pencil.fillStyle = "#0A3871" 
// pencil.fillRect(0, 295, 294, 5)

// /* pencil.fillStyle = "#0A3871" 
// pencil.fillRect(80, 0, 5, 300)

// pencil.fillStyle = "#0A3871" 
// pencil.fillRect(80, 0, 175, 5)

// pencil.fillStyle = "#0A3871" 
// pencil.fillRect(255, 0, 5, 50)

// /* pencil.fillStyle = "transparent"; */
// pencil.beginPath();
// pencil.strokeStyle = "#0A3871"
// pencil.arc(257.5, 81, 31, 0, 2 * Math.PI);
// pencil.lineWidth = 5;
// pencil.stroke()
// /* pencil.fill();  */

// pencil.fillStyle = "#0A3871" 
// pencil.fillRect(255, 112, 5, 75)

// pencil.beginPath();
// pencil.strokeStyle = "#0A3871"
// pencil.moveTo(257.5, 114);
// pencil.lineTo(225, 150);
// pencil.lineWidth = 5;
// pencil.stroke();

// pencil.beginPath();
// pencil.strokeStyle = "#0A3871"
// pencil.moveTo(257.5, 114);
// pencil.lineTo(290, 150);
// pencil.lineWidth = 5;
// pencil.stroke();

// pencil.beginPath();
// pencil.strokeStyle = "#0A3871"
// pencil.moveTo(257.5, 184);
// pencil.lineTo(225, 240);
// pencil.lineWidth = 5;
// pencil.stroke();

// pencil.beginPath();
// pencil.strokeStyle = "#0A3871"
// pencil.moveTo(257.5, 184);
// pencil.lineTo(290, 240);
// pencil.lineWidth = 5;
// pencil.stroke(); */