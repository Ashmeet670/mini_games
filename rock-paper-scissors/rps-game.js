
const cross = "&#x2717;"
const knot = "&cir;"

var chance = 'x'
var board = ["","","","","","","","",""]

boxes = document.querySelectorAll(".board-box")
chanceText = document.getElementById("chanceText")

const winningPlaces = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach(box => {
    box.addEventListener("click", ()=>{
        placeMove(box)
        checkWinner()
    });
});


function placeMove(box){
    if(chance == 'x' && box.innerHTML == ""){
        box.innerHTML = cross
        board.splice(box.id, 1, 'x')
        chance = "o"
        chanceText.innerHTML = '"O" plays'

    }
    else if(chance == 'o' && box.innerHTML == ""){
        box.innerHTML = knot
        board.splice(box.id, 1, 'o')
        chance = "x"
        chanceText.innerHTML = '"X" plays'

    }
    console.log(board)
}

function checkWinner(){
    for(let i = 0; i<= 7; i++){
        checkingFor = winningPlaces[i]
        a = board[checkingFor[0]]
        b = board[checkingFor[1]]
        c = board[checkingFor[2]]
        
        if(a,b,c && a===b && a===c){
            console.log("win")
        }
    }
}