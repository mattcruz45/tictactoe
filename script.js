let rows = 3;
let cols = 3;
let board = [];

for (let i = 0; i < rows; i++) { //initializes the board, board[row][col]
    board[i] = [];
    for (let j = 0; j < cols; j++) {
        board[i][j] = "e"; //e for empty
    }
}

let turn = "x"; //controls who starts the game, "x" or "o"

const s00 = document.getElementById('00');
const s01 = document.getElementById('01');
const s02 = document.getElementById('02');
const s10 = document.getElementById('10');
const s11 = document.getElementById('11');
const s12 = document.getElementById('12');
const s20 = document.getElementById('20');
const s21 = document.getElementById('21');
const s22 = document.getElementById('22');

s00.addEventListener('click', function() {
    let row = s00.id.substring(0,1);
    let col = s00.id.substring(1);
    if (board[row][col] == "e") {
        if (turn == "o") {
            board[row][col] = "o";
            s00.src = 'images/o.png';
            turn = "x";
        }
        else {
            board[row][col] = "x";
            s00.src = 'images/x.png';
            turn = "o";
        }
    }
    else{
        alert("Square is full");
    }
    checkWinX(row, col);
    checkWinO(row, col);
})
s01.addEventListener('click', function() {
    let row = s01.id.substring(0,1);
    let col = s01.id.substring(1);
    if (board[row][col] == "e") {
        if (turn == "o") {
            board[row][col] = "o";
            s01.src = 'images/o.png';
            turn = "x";
        }
        else {
            board[row][col] = "x";
            s01.src = 'images/x.png';
            turn = "o";
        }
    }
    else{
        alert("Square is full");
    }
    checkWinX(row, col);
    checkWinO(row, col);
})
s02.addEventListener('click', function() {
    let row = s02.id.substring(0,1);
    let col = s02.id.substring(1);
    if (board[row][col] == "e") {
        if (turn == "o") {
            board[row][col] = "o";
            s02.src = 'images/o.png';
            turn = "x";
        }
        else {
            board[row][col] = "x";
            s02.src = 'images/x.png';
            turn = "o";
        }
    }
    else{
        alert("Square is full");
    }
    checkWinX(row, col);
    checkWinO(row, col);
})
s10.addEventListener('click', function() {
    let row = s10.id.substring(0,1);
    let col = s10.id.substring(1);
    if (board[row][col] == "e") {
        if (turn == "o") {
            board[row][col] = "o";
            s10.src = 'images/o.png';
            turn = "x";
        }
        else {
            board[row][col] = "x";
            s10.src = 'images/x.png';
            turn = "o";
        }
    }
    else{
        alert("Square is full");
    }
    checkWinX(row, col);
    checkWinO(row, col);
})
s11.addEventListener('click', function() {
    let row = s11.id.substring(0,1);
    let col = s11.id.substring(1);
    if (board[row][col] == "e") {
        if (turn == "o") {
            board[row][col] = "o";
            s11.src = 'images/o.png';
            turn = "x";
        }
        else {
            board[row][col] = "x";
            s11.src = 'images/x.png';
            turn = "o";
        }
    }
    else{
        alert("Square is full");
    }
    checkWinX(row, col);
    checkWinO(row, col);
})
s12.addEventListener('click', function() {
    let row = s12.id.substring(0,1);
    let col = s12.id.substring(1);
    if (board[row][col] == "e") {
        if (turn == "o") {
            board[row][col] = "o";
            s12.src = 'images/o.png';
            turn = "x";
        }
        else {
            board[row][col] = "x";
            s12.src = 'images/x.png';
            turn = "o";
        }
    }
    else{
        alert("Square is full");
    }
    checkWinX(row, col);
    checkWinO(row, col);
})
s20.addEventListener('click', function() {
    let row = s20.id.substring(0,1);
    let col = s20.id.substring(1);
    if (board[row][col] == "e") {
        if (turn == "o") {
            board[row][col] = "o";
            s20.src = 'images/o.png';
            turn = "x";
        }
        else {
            board[row][col] = "x";
            s20.src = 'images/x.png';
            turn = "o";
        }
    }
    else{
        alert("Square is full");
    }
    checkWinX(row, col);
    checkWinO(row, col);
})
s21.addEventListener('click', function() {
    let row = s21.id.substring(0,1);
    let col = s21.id.substring(1);
    if (board[row][col] == "e") {
        if (turn == "o") {
            board[row][col] = "o";
            s21.src = 'images/o.png';
            turn = "x";
        }
        else {
            board[row][col] = "x";
            s21.src = 'images/x.png';
            turn = "o";
        }
    }
    else{
        alert("Square is full");
    }
    checkWinX(row, col);
    checkWinO(row, col);
})
s22.addEventListener('click', function() {
    let row = s22.id.substring(0,1);
    let col = s22.id.substring(1);
    if (board[row][col] == "e") {
        if (turn == "o") {
            board[row][col] = "o";
            s22.src = 'images/o.png';
            turn = "x";
        }
        else {
            board[row][col] = "x";
            s22.src = 'images/x.png';
            turn = "o";
        }
    }
    else{
        alert("Square is full");
    }
    checkWinX(row, col);
    checkWinO(row, col);
})

document.getElementById('reset').addEventListener('click', function() {
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < cols; j++) {
            board[i][j] = "e";
        }
    }
    s00.src = 'images/e.png';
    s01.src = 'images/e.png';
    s02.src = 'images/e.png';
    s10.src = 'images/e.png';
    s11.src = 'images/e.png';
    s12.src = 'images/e.png';
    s20.src = 'images/e.png';
    s21.src = 'images/e.png';
    s22.src = 'images/e.png';
    document.getElementById("winner").src = 'images/ewins.png';
});

function checkWinX(row, col){
    //check vertical
    if (board[0][col] == "x" && board[1][col] == "x" && board[2][col] == "x") {
        document.getElementById("winner").src = 'images/xwins.png';
    }
    //check horizontal
    else if (board[row][0] == "x" && board[row][1] == "x" && board[row][2] == "x") {
        document.getElementById("winner").src = 'images/xwins.png';
    }
    //check slants
    else if (board[0][0] == "x" && board[1][1] == "x" && board[2][2] == "x") {
        document.getElementById("winner").src = 'images/xwins.png';
    }
    else if (board[0][2] == "x" && board[1][1] == "x" && board[2][0] == "x") {
        document.getElementById("winner").src = 'images/xwins.png';
    }
}
function checkWinO(row, col){
    //check vertical
    if (board[0][col] == "o" && board[1][col] == "o" && board[2][col] == "o") {
        document.getElementById("winner").src = 'images/owins.png';
    }
    //check horizontal
    else if (board[row][0] == "o" && board[row][1] == "o" && board[row][2] == "o") {
        document.getElementById("winner").src = 'images/owins.png';
    }
    //check slants
    else if (board[0][0] == "o" && board[1][1] == "o" && board[2][2] == "o") {
        document.getElementById("winner").src = 'images/owins.png';
    }
    else if (board[0][2] == "o" && board[1][1] == "o" && board[2][0] == "o") {
        document.getElementById("winner").src = 'images/owins.png';
    }
}