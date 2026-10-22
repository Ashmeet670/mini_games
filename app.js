games = ["Wack-A-Bone", "Wordle", "Sodoku", "Remember The Tile", "Tic-Tac-Toe"]

gameLinks = [
    "https://ashmeet670.github.io/wack_a_bone/",
    "https://ashmeet670.github.io/wordle/",
    "https://ashmeet670.github.io/sodoku/",
    "memory-card/game.html",
    "tic-tac-toe/game.html"
];

gameImages = ["wackABone.png", "wordle.png", "sodoku.png", "memoryCard.png", "ticTacToe.png"];
gamePlayers = ["1", "1", "1", "1", "2"]


for (i in games) {
    document.getElementById(`${Number(i) + 1}`).src = `/images/${gameImages[i]}`
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
var l = games.length


function move(direction) {
    direction == 'r' ? selectedGame -= 1 : selectedGame += 1
    if (selectedGame == -1) selectedGame = l-1;
    if (selectedGame == l) selectedGame = 0;

    document.getElementById(`gameName`).innerText = games[selectedGame]
    document.getElementById(`gamePlayers`).innerText = `${gamePlayers[selectedGame]} Players`

    for (i in games) {
        ind = selectedGame - 2 // get the first card ka pic index
        switch (ind) { //for case when select game is 1 or 0
            case -1:
                ind = l-1
                break;

            case -2:
                ind = l-2
                break;

            default:
                break;
        }

        t = ind + Number(i)
        if (t > (l-1)) t = t - l

        document.getElementById(`${Number(i) + 1}`).src = `/images/${gameImages[t]}`


    }
}


document.addEventListener('keydown', (e) => {


    if (e.key == "d" || e.key == "ArrowRight") {
        move("r")
    }
    if (e.key == "a" || e.key == "ArrowLeft") {
        move("l")
    }


});