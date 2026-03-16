const players = ["x", "o"];
let activePlayer = 0;
let board = [];

function startGame() {
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  activePlayer = 0;

  renderBoard(board);
}

function click(row, col) {
  board[row][col] = players[activePlayer];

  renderBoard(board);

  if (checkWinner()) {
    showWinner(activePlayer);
    return;
  }

  activePlayer = 1 - activePlayer;
}

function checkWinner() {
  for (let i = 0; i < board.length; i++) {
    let win = true;
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] !== players[activePlayer]) {
        win = false;
        break;
      }
    }
    if (win) return true;
  }

  for (let j = 0; j < board.length; j++) {
    let win = true;
    for (let i = 0; i < board.length; i++) {
      if (board[i][j] !== players[activePlayer]) {
        win = false;
        break;
      }
    }
    if (win) return true;
  }

  let win = true;
  for (let i = 0; i < board.length; i++) {
    if (board[i][i] !== players[activePlayer]) {
      win = false;
      break;
    }
  }
  if (win) return true;

  win = true;
  for (let i = 0; i < board.length; i++) {
    if (board[i][board.length - 1 - i] !== players[activePlayer]) {
      win = false;
      break;
    }
  }
  return win;
}

// function checkWinner() {
//     if (
//       board[0][0] === players[activePlayer] &&
//       board[0][1] === players[activePlayer] &&
//       board[0][2] === players[activePlayer]
//     ) {
//       return true;
//     }

//     if (
//       board[1][0] === players[activePlayer] &&
//       board[1][1] === players[activePlayer] &&
//       board[1][2] === players[activePlayer]
//     ) {
//       return true;
//     }

//     if (
//       board[2][0] === players[activePlayer] &&
//       board[2][1] === players[activePlayer] &&
//       board[2][2] === players[activePlayer]
//     ) {
//       return true;
//     }

//     if (
//       board[0][0] === players[activePlayer] &&
//       board[1][0] === players[activePlayer] &&
//       board[2][0] === players[activePlayer]
//     ) {
//       return true;
//     }

//     if (
//       board[0][1] === players[activePlayer] &&
//       board[1][1] === players[activePlayer] &&
//       board[2][1] === players[activePlayer]
//     ) {
//       return true;
//     }

//     if (
//       board[0][2] === players[activePlayer] &&
//       board[1][2] === players[activePlayer] &&
//       board[2][2] === players[activePlayer]
//     ) {
//       return true;
//     }

//     if (
//       board[0][0] === players[activePlayer] &&
//       board[1][1] === players[activePlayer] &&
//       board[2][2] === players[activePlayer]
//     ) {
//       return true;
//     }

//     if (
//       board[0][2] === players[activePlayer] &&
//       board[1][1] === players[activePlayer] &&
//       board[2][0] === players[activePlayer]
//     ) {
//       return true;
//     }

//     return false;
//   }
