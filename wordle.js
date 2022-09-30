//GAMEWORD
let gameWord = "BUILD"


//list out all keys/characters to use in a for loop to create a button for each
letters = [
    "Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M","ENTER","<",
]

let boxlayout = document.getElementById("boxlayout")


//Assign current box position of the same to allow for coming letters to append within the next boxes
currentrow = 0
currentbox = 0



// create an object to contain assume position and ID of the character
const gameRow = [
    ["", "", "", "", "",],
    ["", "", "", "", "",],
    ["", "", "", "", "",],
    ["", "", "", "", "",],
    ["", "", "", "", "",],
    ["", "", "", "", "",],
]


//for loop which begins declaring i for 0 which loops through 6 times to create 6 rows(divs)
    for(let i = 0; i < 6; i++){
        let boxrow = document.createElement("div")
        for(rowIndex of gameRow){
        boxrow.setAttribute("id", "row-" + i)

        }
        
        //a for loop within each of the rows to create 5 boxes for each row,also declaring a class name to edit within css
            for (let e = 0; e < 5; e++){
                let box = document.createElement("div")
                box.className = "boxclass"
                boxrow.appendChild(box)
            
                for(boxIndex of gameRow){
                box.setAttribute("id","row-" + i + " box-" + e)
            }
        }
        boxlayout.appendChild(boxrow)
    }


//creating keyboard

//list out all keys/characters to use in a for loop to create a button for each

letters = [
    "Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M","ENTER","<",

]

//create a handleclick function

function handleclick(letter){
    console.log("clicked", letter)
    addCharacter(letter)
}

function addCharacter(character){
    const boxLetter = document.getElementById("row-" + currentrow + " box-" + currentbox)
    boxLetter.textContent = character
    gameRow[currentrow][currentbox] = character
    currentbox++
    console.log("boxRow", gameRow)
}



//for loop to create each button with their character along with an event listener and id for each button
for(let letter of letters){
    const buttonElement = document.createElement("button")
    buttonElement.textContent = letter
    document.getElementById("keyboardgrid").appendChild(buttonElement)
    buttonElement.setAttribute("id", letter)
    buttonElement.addEventListener("click", () => handleclick(letter))
}

//event listener for each button

