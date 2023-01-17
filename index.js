let database = ["", "", "", "", "", "", "", "", ""]
let grid = document.querySelectorAll("section.grid div");
let logger = document.querySelector("div.log");
let whichTurn = false;
let gameEnd = false;

function reload() {
    location.reload();
}

function rand(i) {
    return Math.ceil(Math.random() * (i - 1))
}

function display() {
    for (let i = 0; i < grid.length; i++) {
        grid[i].textContent = database[i];
    }
}

function play(x) {
    if (gameEnd) {
        logger.innerHTML += `<br>Click on "Play again !" if you want to... play again.`;
    }
    else if ((whichTurn == false) && (database[x] == "X" || database[x] == "O")) {
        logger.textContent = "Already played, choose another cell.";
    }
    else {
        if (whichTurn) {
            if (database[x] == "X" || database[x] == "O") {
                play(rand(9));
            }
            else {
                database[x] = "O";
                display();
                whoWin();
                whichTurn = false;
            }
        }
        else {
            database[x] = "X";
            display();
            whoWin();
            whichTurn = true;
            setTimeout(() => {
                play(rand(9))
            }, 100);;
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
    for (let j = 0; j < 2; j++) {
        p = (j == 0 ? "X" : "O")

        for (r = 0; r < database.length; r = r + 3) {
            if (database[r] == p && database[r + 1] == p && database[r + 2] == p) {
                logger.textContent = `Player ${p} wins !`;
                gameEnd = true;
            }
        }
        for (c = 0; c < database.length; c++) {
            if (database[c] == p && database[c + 3] == p && database[c + 6] == p) {
                logger.textContent = `Player ${p} wins !`;
                gameEnd = true;
            }
        }
        if (database[0] == p && database[4] == p && database[8] == p) {
            logger.textContent = `Player ${p} wins !`;
            gameEnd = true;
        }
        else if (database[2] == p && database[4] == p && database[6] == p) {
            logger.textContent = `Player ${p} wins !`;
            gameEnd = true;
        }
    }
}