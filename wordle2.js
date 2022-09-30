
//for loop which begins declaring i for 0 which loops through 6 times to create 6 rows(divs)
for(let i = 0; i < 6; i++){
    let boxrow = document.createElement("div")
    for(rowIndex of gameRow){
    boxrow.setAttribute("id", "row:" + i)

    }
    
    //a for loop within each of the rows to create 5 boxes for each row,also declaring a class name to edit within css
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
                 }else if(currentrow < 5){
                    currentrow++
                    currentbox = 0
                    guessone = []
                 }
            }
        }
        
function resetGuess(){
    if(currentbox == 5 && guess != gameWord){
        guessone = []
    }
}


