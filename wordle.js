
function handleclick(letter) {
    if (letter == "<" && currentbox > 0) {
        const boxLetter = document.getElementById("row:" + currentrow + " box:" + currentbox)
        boxLetter.textContent = ""
        gameRow[currentrow][currentbox] = ""
        currentbox--
        console.log(gameRow)
    } else if (letter == "ENTER") {
        checkGuess()
    } else {
        addCharacter(letter)
        currentGuess.push(letter)
        console.log(currentGuess)
    }
}


function addCharacter(character) {
    if (currentbox < 5 && currentrow < 6) {
        const boxLetter = document.getElementById("row:" + currentrow + " box:" + currentbox)
        boxLetter.textContent = character
        gameRow[currentrow][currentbox] = character
        boxLetter.setAttribute("data-num", character)
        currentbox++
        console.log("boxRow", gameRow)
    }
}