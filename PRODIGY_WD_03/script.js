const cells = document.querySelectorAll(".cell");
let currentPlayer = "X";

cells.forEach((cell) => {
  cell.addEventListener("click", handleClick);
});

function handleClick() {
  if (!this.textContent) {
    this.textContent = currentPlayer;
    if (checkWin()) {
      alert(`${currentPlayer} wins!`);
      resetGame();
      return;
    }
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWin() {
  // Logic to check for winning condition
}

function resetGame() {
  cells.forEach((cell) => {
    cell.textContent = "";
  });
  currentPlayer = "X";
}
function checkWin() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let condition of winConditions) {
    const [a, b, c] = condition;
    if (
      cells[a].textContent &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      return true;
    }
  }
  return false;
}

function checkTie() {
  for (let cell of cells) {
    if (!cell.textContent) {
      // If any cell is empty, the game is not tied yet
      return false;
    }
  }
  // If all cells are filled and there's no winner, it's a tie
  return true;
}

function handleClick() {
  if (!this.textContent) {
    this.textContent = currentPlayer;
    if (checkWin()) {
      alert(`${currentPlayer} wins!`);
      resetGame();
    } else if (checkTie()) {
      alert("It's a tie!");
      resetGame();
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}
