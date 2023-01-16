// let database = ["", "", "", "", "", "", "", "", ""]
let grid = document.querySelectorAll("section.grid div");
let logger = document.querySelector("div.log");
let whichTurn = false;
let winIs = false;

function reload() {
    location.reload();
}

function ticTacToe(x) {
    if (winIs) {
        logger.innerHTML += `<br>Clic on "Play again !" if you want to... play again.`;
    }
    else if (grid[x].textContent == "X" || grid[x].textContent == "O") {
        logger.textContent = "Allready played, choose another cell.";
    }
    else {
        if (whichTurn) {
            whichTurn = false;
            grid[x].textContent = "O";
            whoWin();
        }
        else {
            whichTurn = true;
            grid[x].textContent = "X";
            whoWin();
            // noBrainAI(rand);
        }
    }
}

function theXWin() {
    logger.textContent = "Player X wins !";
}
function theOWin() {
    logger.textContent = "Player O wins !";
}

function whoWin() {
    // For X
    if (grid[0].textContent == "X" && grid[1].textContent == "X" && grid[2].textContent == "X") {
        theXWin();
        winIs = true;
    }
    else if (grid[0].textContent == "X" && grid[3].textContent == "X" && grid[6].textContent == "X") {
        theXWin();
        winIs = true;
    }
    else if (grid[0].textContent == "X" && grid[4].textContent == "X" && grid[8].textContent == "X") {
        theXWin();
        winIs = true;
    }
    else if (grid[1].textContent == "X" && grid[4].textContent == "X" && grid[7].textContent == "X") {
        theXWin();
        winIs = true;
    }
    else if (grid[3].textContent == "X" && grid[4].textContent == "X" && grid[5].textContent == "X") {
        theXWin();
        winIs = true;
    }
    else if (grid[2].textContent == "X" && grid[5].textContent == "X" && grid[8].textContent == "X") {
        theXWin();
        winIs = true;
    }
    else if (grid[2].textContent == "X" && grid[4].textContent == "X" && grid[6].textContent == "X") {
        theXWin();
        winIs = true;
    }
    else if (grid[6].textContent == "X" && grid[7].textContent == "X" && grid[8].textContent == "X") {
        theXWin();
        winIs = true;
    }
    // For O
    else if (grid[0].textContent == "O" && grid[1].textContent == "O" && grid[2].textContent == "O") {
        theOWin();
        winIs = true;
    }
    else if (grid[0].textContent == "O" && grid[3].textContent == "O" && grid[6].textContent == "O") {
        theOWin();
        winIs = true;
    }
    else if (grid[0].textContent == "O" && grid[4].textContent == "O" && grid[8].textContent == "O") {
        theOWin();
        winIs = true;
    }
    else if (grid[1].textContent == "O" && grid[4].textContent == "O" && grid[7].textContent == "O") {
        theOWin();
        winIs = true;
    }
    else if (grid[3].textContent == "O" && grid[4].textContent == "O" && grid[5].textContent == "O") {
        theOWin();
        winIs = true;
    }
    else if (grid[2].textContent == "O" && grid[5].textContent == "O" && grid[8].textContent == "O") {
        theOWin();
        winIs = true;
    }
    else if (grid[2].textContent == "O" && grid[4].textContent == "O" && grid[6].textContent == "O") {
        theOWin();
        winIs = true;
    }
    else if (grid[6].textContent == "O" && grid[7].textContent == "O" && grid[8].textContent == "O") {
        theOWin();
        winIs = true;
    }
}

// let rand = Math.floor(Math.random() * 8)

// function noBrainAI(x) {
//     if (grid[x].textContent == "X" || grid[x].textContent == "O") {
//         noBrainAI(rand);
//     }
//     else {
//         ticTacToe(x);
//     }
// }

for (i = 0; i < grid.length; i++) {

}