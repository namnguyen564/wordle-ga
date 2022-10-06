function handleclick(letter) {
    if (letter == "<" && currentbox > 0) {
        const boxLetter = document.getElementById("row:" + currentrow + " box:" + currentbox)
        boxLetter.textContent = ""
        gameRow[currentrow][currentbox] = ""
        currentbox--
        console.log(gameRow)
        console.log("hello")
        currentGuess.pop(letter)
    } 
    if (letter == "ENTER") {
        checkGuess()
    }else{
        if(letter != "<" && "ENTER"){
        addCharacter(letter)
        currentGuess.push(letter)
        console.log(currentGuess)
        }
    }
}




function addCharacter(letter) {
    if (currentbox < 5 && currentrow < 6) {
        const boxLetter = document.getElementById("row:" + currentrow + " box:" + currentbox)
        boxLetter.textContent = letter
        gameRow[currentrow][currentbox] = letter
        boxLetter.setAttribute("data-num", letter)
        currentbox++
        console.log("boxRow", gameRow)
    }
}