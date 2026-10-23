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
    if (selectedGame == -1) selectedGame = l - 1;
    if (selectedGame == l) selectedGame = 0;

    document.getElementById(`gameName`).innerText = games[selectedGame]
    document.getElementById(`gamePlayers`).innerText = `${gamePlayers[selectedGame]} Players`

    for (i in games) {
        ind = selectedGame - 2 // get the first card ka pic index
        switch (ind) { //for case when select game is 1 or 0
            case -1:
                ind = l - 1
                break;

            case -2:
                ind = l - 2
                break;

            default:
                break;
        }

        t = ind + Number(i)
        if (t > (l - 1)) t = t - l

        document.getElementById(`${Number(i) + 1}`).src = `/images/${gameImages[t]}`


    }


    cards = document.getElementsByClassName("gameCard")   // the sections: they carry the width and opacity
    l = cards.length
    direction = (direction == 'r' ? -1 : 1)


    pos = []
    width = []
    opac = []
    for (let i = 0; i < l; i++) {
        c = cards[i].getBoundingClientRect()
        pos.push(c.x + c.width / 2) //center wala coordinate not edge starting wala
        width.push(c.width)
        opac.push(getComputedStyle(cards[i]).opacity)
    }

    for (i = 0; i < l; i++) {

        startInd = i + direction

        if (startInd >= 0 && startInd < l) {
            startX = pos[startInd]
            startW = width[startInd]
            startOp = opac[startInd]
        }
        else {
            startX = pos[i] + (pos[i] - pos[i - direction])
            startW = width[i] //khud ki hi width
            startOp = 0
        }
        cards[i].animate(
            [
                { transform: `translateX(${startX - pos[i]}px) scale(${startW / width[i]})`, opacity: startOp },
                { transform: 'translateX(0) scale(1)', opacity: opac[i] }
            ],
            { duration: 400, easing: 'ease' }
        )
    }

}

document.addEventListener('keydown', (e) => {


    if (e.key == "d" || e.key == "ArrowRight") {
        move("l")
    }
    if (e.key == "a" || e.key == "ArrowLeft") {
        move("r")
    }

    if (e.key == 'Enter') {
        playGame()
    }

});

function playGame() {
    linker = document.getElementById('goToPlay')
    linker.href = gameLinks[selectedGame]
    linker.click()
}