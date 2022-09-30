//GAMEWORD
let gameWord = "BUILD"
let guessone = []

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


