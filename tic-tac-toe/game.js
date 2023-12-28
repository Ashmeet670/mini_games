
const cross = "&#x2717;"
const knot = "&cir;"


var chance = 'x'
var board = ["", "", "", "", "", "", "", "", ""]
var gameOver = false
var totalPlaced = 0

boxes = document.querySelectorAll(".board-box")
chanceText = document.getElementById("chanceText")


const winningPlaces = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (!gameOver) {
            placeMove(box)
            checkWinner()
        }
        if(totalPlaced >=9 && !gameOver){
            chanceText.innerHTML = "It's a draw!"
            gameOver = true

        }


    });
});


function placeMove(box) {
    if (chance == 'x' && box.innerHTML == "") {
        box.innerHTML = cross
        totalPlaced += 1
        board.splice(box.id, 1, 'x')
        chance = "o"
        chanceText.innerHTML = '"O" plays'

    }
    else if (chance == 'o' && box.innerHTML == "") {
        box.innerHTML = knot
        totalPlaced += 1
        board.splice(box.id, 1, 'o')
        chance = "x"
        chanceText.innerHTML = '"X" plays'

    }
}


function checkWinner() {
    for (let i = 0; i <= 7; i++) {
        checkingFor = winningPlaces[i]
        a = board[checkingFor[0]]
        b = board[checkingFor[1]]
        c = board[checkingFor[2]]

        if (a, b, c && a === b && a === c) {
            console.log("win")
            chanceText.innerHTML = a.toUpperCase() + '<span class="fs-4 "> WINS </span>'
            chanceText.classList = "fs-2 font-preahvihear"
            gameOver = true
        }
    }
}