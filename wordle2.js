

for(let i = 0; i < 6; i++){
    let boxrow = document.createElement("div")
    for(rowIndex of gameRow){
    boxrow.setAttribute("id", "row:" + i)
    }
    
        for (let e = 0; e < 5; e++){
            let box = document.createElement("div")
            box.className = "boxclass"
            boxrow.appendChild(box)
        
            for(boxIndex of gameRow){
                box.setAttribute("id","row:" + i + " box:" + e)
              
        }
    }
    boxlayout.appendChild(boxrow)
}

for(let letter of letters){
    const buttonElement = document.createElement("button")
    buttonElement.textContent = letter
    document.getElementById("keyboardgrid").appendChild(buttonElement)
    buttonElement.setAttribute("id", letter)
    buttonElement.addEventListener("click", () => handleclick(letter))
}
function checkGuess(){
    if(currentbox == 5){
        let guess = guessone.join("")
        console.log(guess)
        
        if (guess == gameWord){
            alert("CORRECT WORD!")
                 }else if(currentrow < 6){
                    currentrow++
                    currentbox = 0
                    guessone = []
                    tries++
                    // console.log("tries", tries)
                    // }else if(tries == 6){
                    //     alertLoss()
            }
        }
    }


    if(tries == 6){
     alertLoss()
    }

function alertLoss(){
    alert("GAMEOVER")
    console.log("what")
    return
}


    

