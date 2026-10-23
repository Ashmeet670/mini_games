gamesSelectorOrder = ["Wack-A-Bone", "Wordle", "Sodoku", "Tiles", "Tic-Tac-Toe"]
gamesGridOrder = ["Sodoku", "Wordle", "Tiles", "Wack-A-Bone", "Tic-Tac-Toe"]

gameLinks = {
    "Wack-A-Bone": "https://ashmeet670.github.io/wack_a_bone/",
    "Wordle": "https://ashmeet670.github.io/wordle/",
    "Sodoku": "https://ashmeet670.github.io/sodoku/",
    "Tiles": "memory-card/game.html",
    "Tic-Tac-Toe": "tic-tac-toe/game.html"
}

gameImages = {
    "Wack-A-Bone": "wackABone.png",
    "Wordle": "wordle.png",
    "Sodoku": "sodoku.png",
    "Tiles": "memoryCard.png",
    "Tic-Tac-Toe": "ticTacToe.png"
};

gamePlayers = {
    "Wack-A-Bone": "1",
    "Wordle": "1",
    "Sodoku": "1",
    "Tiles": "1",
    "Tic-Tac-Toe": "2"
};

selectorActive = true

for (i in gamesSelectorOrder) {
    document.getElementById(`${Number(i) + 1}`).src = `images/${gameImages[gamesSelectorOrder[i]]}`

    document.getElementById("gridItems").insertAdjacentHTML('beforeend',
        `
        <div class="gridCard m-3 rounded-3" onclick="playGrid(${i})">
            <img id="" class="gridImg rounded-1" src="images/${gameImages[gamesGridOrder[i]]}" alt="">
            <div class="gridText">
                <div class="p-2 mx-2 text-center">${gamesGridOrder[i]} </div>
            </div>
        </div>
        
        `
    )


    document.getElementById("mobileView").insertAdjacentHTML('beforeend',
        `
        <div class="mobileCard mx-auto my-3 d-flex rounded-2">

            <img class="" src="images/${gameImages[gamesGridOrder[i]]}" alt="">

            <div class="d-flex flex-column mx-3">
                <text class="gameText mt-auto">${gamesGridOrder[i]}</text>
                <text class="gameText2 mb-auto">${gamePlayers[gamesGridOrder[i]]} Player</text>
            </div>

            <div class="playButton d-flex align-items-center ms-auto my-1 me-3" onclick="playGrid(${i})">

                <svg class="rounded-2" xmlns="http://www.w3.org/2000/svg" width="3em" height="100%"
                            fill="currentColor" class="bi bi-play-fill" viewBox="0 0 15 16">

                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                </svg>
            </div>
        </div>
        `
    )

}


function toggle(item1Button, item2Button, item1, item2) {

    if (item1Button.classList.contains("d-none")) {

        item1Button.classList.remove("d-none")
        item2Button.classList.add("d-none")
        item1.classList.remove('d-none')
        item2.classList.add('d-none')
        selectorActive = false
    }
    else {
        item1Button.classList.add("d-none")
        item2Button.classList.remove("d-none")
        item1.classList.add('d-none')
        item2.classList.remove('d-none')
        selectorActive = true

    }
}

var selectedGame = 2 //sodoku selected by default
var l = gamesSelectorOrder.length


function move(direction) {
    direction == 'r' ? selectedGame -= 1 : selectedGame += 1
    if (selectedGame == -1) selectedGame = l - 1;
    if (selectedGame == l) selectedGame = 0;

    document.getElementById(`gameName`).innerText = gamesSelectorOrder[selectedGame]
    document.getElementById(`gamePlayers`).innerText = `${gamePlayers[gamesSelectorOrder[selectedGame]]} Player`

    for (i in gamesSelectorOrder) {
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

        document.getElementById(`${Number(i) + 1}`).src = `images/${gameImages[gamesSelectorOrder[t]]}`


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


    if ((e.key == "d" || e.key == "ArrowRight") && (selectorActive)) {
        move("l")
    }
    if ((e.key == "a" || e.key == "ArrowLeft") && (selectorActive)) {
        move("r")
    }

    if ((e.key == 'Enter') && (selectorActive)) {
        playGame()
    }

});

function playGame() {
    linker = document.getElementById('goToPlay')
    linker.href = gameLinks[gamesSelectorOrder[selectedGame]]
    linker.click()
}

function playGrid(l) {
    document.getElementById('gridPlay').href = gameLinks[gamesGridOrder[l]]
    document.getElementById('gridPlay').click()
}