const possibleIcons = {
    '0': 'bi bi-airplane-fill',
    '1': 'bi bi-clock-fill',
    '2': 'bi bi-hammer',
    '3': 'bi bi-headphones',
    '4': 'bi bi-magnet-fill',
    '5': 'bi bi-umbrella-fill',
    '6': 'bi bi-cloud-drizzle-fill',
    '7': 'bi bi-balloon-fill',
}

tiles = document.querySelectorAll(".tile")
playAgainBtn = document.getElementById("playAgain")
scoreCounter = document.getElementById("scoreCounter")

selected = 0
pairs = []
currentlySelected = []

totalPairsFound = 0
score = 10

function setIcons() {

    pairs = []
    currentlySelected = []
    totalPairsFound = 0
    selected = 0
    score = 10
    scoreCounter.innerHTML = "Score: " + score
    possibleIconIndex = [0, 1, 2, 3, 4, 5, 6, 7]
    possibelTileIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    for (let i = 0; i <= 7; i++) {
        iconIndex = possibleIconIndex[Math.floor(Math.random() * possibleIconIndex.length)]
        icon = possibleIcons[iconIndex]
        possibleIconIndex.splice(possibleIconIndex.indexOf(iconIndex), 1)

        randomTile1 = possibelTileIndex[Math.floor(Math.random() * possibelTileIndex.length)]
        possibelTileIndex.splice(possibelTileIndex.indexOf(randomTile1), 1)

        randomTile2 = possibelTileIndex[Math.floor(Math.random() * possibelTileIndex.length)]
        possibelTileIndex.splice(possibelTileIndex.indexOf(randomTile2), 1)

        tiles[randomTile1].firstChild.classList = "icon-holder fs-2 d-none " + icon
        tiles[randomTile2].firstChild.classList = "icon-holder fs-2 d-none " + icon
        pairs.push([randomTile1, randomTile2])

    }
}

setIcons()

tiles.forEach(tile => {
    tile.addEventListener('click', () => {
        if (selected < 2 && !tile.classList.contains("clicked") && !tile.classList.contains("matched")) {
            selected++
            tile.classList.add("clicked")
            tile.firstChild.classList.remove("d-none")
            currentlySelected.push(Number(tile.id))
            if (selected == 2) {
                checkMatch()
                if (totalPairsFound == 8) {
                    playAgainBtn.classList.remove("d-none")
                }
            }
        }

    });
});


function checkMatch() {
    match = false

    for (i = 0; i in pairs; i++) {
        if (JSON.stringify([currentlySelected[0], currentlySelected[1]]) == JSON.stringify(pairs[i]) || JSON.stringify([currentlySelected[1], currentlySelected[0]]) == JSON.stringify(pairs[i])) {
            tiles[currentlySelected[0]].classList.add("matched")
            tiles[currentlySelected[0]].classList.remove("clicked")
            tiles[currentlySelected[1]].classList.add("matched")
            tiles[currentlySelected[1]].classList.remove("clicked")

            match = true
            currentlySelected = []
            selected = 0
            totalPairsFound++
            score+=2
            scoreCounter.innerHTML = "Score: " + score

        }
    }

    if (match == false) {
        tiles[currentlySelected[0]].classList.add("not-matched")
        tiles[currentlySelected[0]].classList.remove("clicked")
        tiles[currentlySelected[1]].classList.add("not-matched")
        tiles[currentlySelected[1]].classList.remove("clicked")

        setTimeout(() => {
            tiles[currentlySelected[0]].classList.remove("not-matched")
            tiles[currentlySelected[1]].classList.remove("not-matched")
            tiles[currentlySelected[0]].firstChild.classList.add("d-none")
            tiles[currentlySelected[1]].firstChild.classList.add("d-none")
            currentlySelected = []
            selected = 0
            score--
            scoreCounter.innerHTML = "Score: " + score


        }, 1000)
    }
}


function playAgain() {

    tiles.forEach(tile => {
        tile.classList = "tile rounded-3"
        tile.firstChild.classList = "icon-holder fs-2"
    });

    setIcons()

    playAgainBtn.classList.add("d-none")

}