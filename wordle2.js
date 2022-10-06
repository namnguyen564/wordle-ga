
for (let i = 0; i < 6; i++) {
    let boxrow = document.createElement("div")
    for (rowIndex of gameRow) {
        boxrow.setAttribute("id", "row:" + i)
    }

    for (let e = 0; e < 5; e++) {
        let box = document.createElement("div")
        box.className = "boxclass"
        boxrow.appendChild(box)

        for (boxIndex of gameRow) {
            box.setAttribute("id", "row:" + i + " box:" + e)

        }
    }
    boxlayout.appendChild(boxrow)
}

for (let letter of letters) {
    const buttonElement = document.createElement("button")
    buttonElement.textContent = letter
    document.getElementById("keyboardgrid").appendChild(buttonElement)
    buttonElement.setAttribute("id", letter)
    buttonElement.addEventListener("click", () => handleclick(letter))
}
function checkGuess() {
    let l = 0
    if (currentbox == 5) {
        let guess = currentGuess.join("")
        console.log(guess)


        for (let i = 0; i < 5; i++) {
            const guessLetter = currentGuess[i]
            const gameLetter = gameWord[i]
            boxes = document.getElementById("row:" + currentrow + " box:" + l)
            
            if (guessLetter == gameLetter) {
                console.log("letter is in the right position of gameword")
                boxes.classList.add("greenoverlay")
                console.log(currentrow)
                console.log(l)
            }else if(gameWord.includes(guessLetter)){
               boxes.classList.add("yellowoverlay")
                console.log("letter is in gameword")
            }else{
                boxes.classList.add("greyoverlay")
                console.log("letter not in gameword")
            }
            l++
        }
        // document.getElementById(elementId).classList.add(‘match')
        // .match { background-color: lime}



        if (guess == gameWord) {
            alert("CORRECT WORD!")
        } else if (currentrow < 6) {
            currentrow++
            currentbox = 0
            currentGuess = []
            tries++

        }
        if (tries == 6) {
            alertLoss()
        }
    }
}


// if (tries == 6) {
//     alertLoss()
// }

function alertLoss() {
    alert("GAMEOVER")
    console.log("what")
    return
}
