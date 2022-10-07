function handleclick(letter) {
    if (letter == "<" && currentbox > 0) {
        currentbox--
        const boxLetter = document.getElementById("row:" + currentrow + " box:" + currentbox)
        boxLetter.textContent = ""
        gameRow[currentrow][currentbox] = ""
      
        console.log(gameRow)
        currentGuess.pop(letter)
    } 
    if (letter == "ENTER") {
        checkGuess()
    }else{
        if(letter != "<" && "ENTER"){
        addCharacter(letter)
        currentGuess.push(letter)
        console.log(currentGuess)
        console.log(currentbox)
        }
    }
}




function addCharacter(letter) {
    if (currentbox < 5 && currentrow < 6) {
        const boxLetter = document.getElementById("row:" + currentrow + " box:" + currentbox)
        boxLetter.textContent = letter
        gameRow[currentrow][currentbox] = letter
        currentbox++
        console.log("boxRow", gameRow)
    }
}