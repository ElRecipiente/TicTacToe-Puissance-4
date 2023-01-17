let database = []
let grid = document.querySelectorAll("section.grid div");
let logger = document.querySelector("div.log");
let whichTurn = false;
let gameEnd = false;

// We want (database.length == 25) here
for (i = 0; i < 35; i++) {
    database.push("");
    console.log(database.length)
}

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

// function play(x) {
//     if (gameEnd) {
//         logger.innerHTML += `<br>Click on "Play again !" if you want to... play again.`;
//     }
//     else if ((whichTurn == false) && (database[x] == "X" || database[x] == "O")) {
//         logger.textContent = "Already played, choose another cell.";
//     }
//     else {
//         if (whichTurn) {
//             if (database[x] == "X" || database[x] == "O") {
//                 play(rand(6));
//             }
//             else {
//                 fall(x);
//                 display();
//                 // whoWin();
//                 whichTurn = false;
//             }
//         }
//         else {
//             fall(x);
//             display();
//             // whoWin();
//             whichTurn = true;
//             setTimeout(() => {
//                 play(rand(6))
//             }, 100);;
//         }
//     }
// }

function full(y) {
    if (database[y % 6] == "X" || database[y % 6] == "O") {
        return true;
    }
    else {
        return false;
    }
}

function fallX(y) {
    console.log("fall : " + y)
    console.log("db y : " + database[y])

    if (full(y)) {
        logger.textContent = "Column full, please try another."
    }
    else if ((database[y] != "X" && database[y] != "O") && y <= 30) {
        console.log("case courante dispo, follwing")
        fallX(y + 6);
    }
    else if (database[y] == "X" || database[y] == "O" || y > 35) {
        console.log("case courante pas dispo, placement au precedent")
        database[y - 6] = "X";
        display()
    }
    else {
        console.log("heoy")
        database[y] = "X"
        display();
    }
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