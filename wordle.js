

//create a handleclick function

function handleclick(letter){
    if(letter == "<" && currentbox > 0){
        const boxLetter = document.getElementById("row:" + currentrow + " box:" + currentbox)
        boxLetter.textContent = ""
        gameRow[currentrow][currentbox] = ""
        currentbox--
        console.log(gameRow)
    }else if(letter == "ENTER"){
        checkGuess()
    }else{
        addCharacter(letter) 
        guessone.push(letter)
        console.log(guessone)
    }
}


function addCharacter(character){
    if (currentbox < 5 && currentrow<6){
        const boxLetter = document.getElementById("row:" + currentrow + " box:" + currentbox)
        boxLetter.textContent = character
        gameRow[currentrow][currentbox] = character
        currentbox++
        console.log("boxRow", gameRow)   
        }
    }
