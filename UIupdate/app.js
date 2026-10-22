games = ["Wack-A-Bone", "Wordle", "Sodoku", "Remember The Tile", "Tic-Tac-Toe"]

gameLinks = [
    "https://ashmeet670.github.io/wack_a_bone/",
    "https://ashmeet670.github.io/wordle/",
    "https://ashmeet670.github.io/sodoku/",
    "memory-card/game.html",
    "tic-tac-toe/game.html"
];

gameImages = ["wackABone.png","wordle.png","sodoku.png","memoryCard.png","ticTacToe.png"];
gamePlayers = ["1","1","1","1","2"]


for (i in games) {
    document.getElementById(`${Number(i) + 1}`).src = `../images/${gameImages[i]}`
}


function toggle(item1, item2) {
    if (item1.classList.contains("d-none")) {
        item1.classList.remove("d-none")
        item2.classList.add("d-none")
    }
    else {
        item1.classList.add("d-none")
        item2.classList.remove("d-none")
    }
}

var selectedGame = 2 //sodoku selected by default

function move(direction){
    direction == 'r' ? selectedGame -=1 :selectedGame +=1
    if(selectedGame == -1) selectedGame = 4;
    if(selectedGame == 5) selectedGame = 0;
    
    console.log(selectedGame)

    for (i in games) {
        document.getElementById(`${Number(i) + 1}`).src = `../images/${gameImages[Number(i)+selectedGame]}`
    }
}

