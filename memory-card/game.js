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

selected = 0
pairs = []
currentlySelected = []

function setIcons() {

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

        tiles[randomTile1].firstChild.classList = "icon-holder fs-2 " + icon
        tiles[randomTile2].firstChild.classList = "icon-holder fs-2 " + icon
        pairs.push([randomTile1, randomTile2])

    }
}

setIcons()

tiles.forEach(tile => {
    tile.addEventListener('click', () => {
        if (selected < 2 && !tile.classList.contains("clicked") && !tile.classList.contains("matched")) {
            console.log("E")
            selected++
            tile.classList.add("clicked")
            tile.firstChild.classList.remove("d-none")
            currentlySelected.push(Number(tile.id))
            if (selected == 2) {
                checkMatch()

            }
        }

    });
});


function checkMatch() {
    match = false

    for (i = 0; i in pairs; i++) {
        if (JSON.stringify([currentlySelected[0], currentlySelected[1]]) == JSON.stringify(pairs[i]) || JSON.stringify([currentlySelected[1], currentlySelected[0]]) == JSON.stringify(pairs[i])) {
            tiles[currentlySelected[0]].classList.add("matched")
            tiles[currentlySelected[1]].classList.add("matched")
            console.log("break")
            match = true
        }
        
    }

    if(match== false){
        console.log("N")
        tiles[currentlySelected[0]].classList.add("not-matched")
        tiles[currentlySelected[1]].classList.add("not-matched")
    }

}