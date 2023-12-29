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

function setIcons() {

    possibleIndex = [0,1,2,3,4,5,6,7]
    possibelTileIndex = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

    for (let i = 0; i <= 7; i++) {
        iconIndex = possibleIndex[Math.floor(Math.random() * possibleIndex.length)]
        icon = possibleIcons[iconIndex]
        possibleIndex.splice(possibleIndex.indexOf(iconIndex), 1)

        randomTile1 = possibelTileIndex[Math.floor(Math.random() * possibelTileIndex.length)]
        possibelTileIndex.splice(possibelTileIndex.indexOf(randomTile1), 1)

        randomTile2 = possibelTileIndex[Math.floor(Math.random() * possibelTileIndex.length)]
        possibelTileIndex.splice(possibelTileIndex.indexOf(randomTile2), 1)

        tiles[randomTile1].firstChild.classList = "icon-holder fs-2 "+icon
        tiles[randomTile2].firstChild.classList = "icon-holder fs-2 "+icon
        pairs.push([randomTile1,randomTile2])

    }
}

tiles.forEach(tile => {
    tile.addEventListener('click', ()=>{
        if(selected<2){
            selected++
            tile.classList.add("clicked")
            if(selected == 2){
                // pass
            }
        }
        
    });
});