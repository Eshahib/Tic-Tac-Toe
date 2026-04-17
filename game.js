
const button = document.getElementById("start")
button.addEventListener("click" , startGame)

for(let kid of document.getElementById("grid").children){
    kid.addEventListener("click", turn)
}

function startGame() {
    console.log("working")
    play = 0
    board = ["", "", "", "", "", "", "", "", ""]
    for(let kid of document.getElementById("grid").children){
        kid.innerHTML = ""
    }

    for(let kid of document.getElementById("grid").children){
        kid.addEventListener("click", turn)
    }

    for(let kid of document.getElementsByClassName("display")){
        kid.style.display = "none"
    }
}



let play = 0
function turn() { 
    if(play % 2 == 0){
        play++
        addX.call(this)
    }
    else {
        play++
        addO.call(this)
    }

}



function addX() { 
    console.log("PUT AN X HERE")
    this.innerHTML = '<img src = "X.png" alt = "X" style = "width:100%; heigth:100%;" >'
    this.removeEventListener("click", turn)
    board[this.id] = "X"
    console.log(board)
    checkWin.call(this)
} 



function addO()  {
    console.log("put an O here")
    this.innerHTML = "<img src = 'O.png' alt = 'O' style = 'width:100%; height:100%;' >"
    this.removeEventListener("click", turn)
    board[this.id] = "O"
    console.log(board)
    checkWin.call(this)
}

let board = ["", "", "", "", "", "", "", "", ""]
function checkWin() { 
    if(board[0] != "" && board[0] == board[1] && board[1] == board[2]){
        console.log("WIN top row horizontal")
        for(let kid of document.getElementById("grid").children){
            kid.removeEventListener("click", turn)
        }
        const winLine = document.getElementsByClassName("cross1")[0] /// get class returns a list get by id is unique however so dont have to worry.
        winLine.style.display = "block"
    }

    else if(board[3] != "" && board[3] == board[4] && board[4] == board[5]){
        console.log("WIN mid row horizontal")
        for(let kid of document.getElementById("grid").children){
            kid.removeEventListener("click", turn)
        }
        document.getElementsByClassName("cross2")[0].style.display = "block"
    }

    else if(board[6] != "" && board[6] == board[7] && board[7]== board[8]){
        console.log("WIN bot row horizontal")
        for(let kid of document.getElementById("grid").children){
            kid.removeEventListener("click", turn)
        }
        document.getElementsByClassName("cross3")[0].style.display = "block"
    }

    else if(board[0] != "" && board[0] == board[3] && board[3]== board[6]){
        console.log("WIN first row vert")
        for(let kid of document.getElementById("grid").children){
            kid.removeEventListener("click", turn)
        }
        document.getElementsByClassName("cross4")[0].style.display = "block"
    }

    else if(board[1] != "" && board[1] == board[4] && board[4]== board[7]){
        console.log("WIN sec row vert")
        for(let kid of document.getElementById("grid").children){
            kid.removeEventListener("click", turn)
        }
        document.getElementsByClassName("cross5")[0].style.display = "block"
    }

    else if(board[2] != "" && board[2] == board[5] && board[5] == board[8]){
        console.log("WIN third row vert")
        for(let kid of document.getElementById("grid").children){
            kid.removeEventListener("click", turn)
        }
        document.getElementsByClassName("cross6")[0].style.display = "block"
    }

    else if(board[0] != "" && board[0] == board[4] && board[4] == board[8]){
        console.log("WIN diagonal down")
        for(let kid of document.getElementById("grid").children){
            kid.removeEventListener("click", turn)
        }
        document.getElementsByClassName("cross7")[0].style.display = "block"
    }

    else if(board[2] != "" && board[2] == board[4] && board[4] == board[6]){
        console.log("WIN diagonal up")
        for(let kid of document.getElementById("grid").children){
            kid.removeEventListener("click", turn)
        }
        document.getElementsByClassName("cross8")[0].style.display = "block"
    }

    else {
        console.log("Didnt win yet")
    }

}


