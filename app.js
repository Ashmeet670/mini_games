games = ["Wordle","Remember The Tile","Wack-A-Bone","Tic-Tac-Toe"]

gameLinks = ["https://ashmeet670.github.io/wordle/","memory-card/game.html","https://ashmeet670.github.io/wack_a_bone/","tic-tac-toe/game.html"]
gameImages = ["wordle.png","memoryCard.png","wackABone.png","ticTacToe.png"]


for(i in games){
    document.getElementById("cards").insertAdjacentHTML('beforeend',`
        
        
        <!-- ${games[i]} -->
                <div class="gameCard col-5 col-lg-3 col-xl-2 rounded-3 p-3 text-center m-2 my-1 my-sm-2 m-md-3">
                    <a href="${gameLinks[i]}"><img src="images/${gameImages[i]}" alt="${games[i]} Img"
                            class="gameImg rounded-3 mt-3 shadow-lg"></a>
                    <span class=" gameText mt-3 ">${games[i]}</span>
                </div>
        
        `)
}
