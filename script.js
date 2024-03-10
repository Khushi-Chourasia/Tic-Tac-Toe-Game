let currentPlayer = 'X';
let gameActive = true;
let boardState = ['', '', '', '', '', '', '', '', ''];

function handleCellClick(cellIndex) {
  if (boardState[cellIndex] === '' && gameActive) {
    boardState[cellIndex] = currentPlayer;
    document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;
    checkForWin();
    if (gameActive) {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
    }
  }
}

function checkForWin() {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
      gameActive = false;
      document.getElementById('status').innerText = ''; // Clear status
      document.getElementById('board').classList.add('game-over'); // Add class for background color
      document.getElementById('winningMessage').innerText = `Player ${currentPlayer} wins!`; // Set winning message
      document.getElementById('winningMessage').classList.add('winning-message'); // Add class for winning message styles
      return;
    }
  }

  if (!boardState.includes('')) {
    gameActive = false;
    document.getElementById('status').innerText = `It's a draw!`;
  }
}

function restartGame() {
  currentPlayer = 'X';
  gameActive = true;
  boardState = ['', '', '', '', '', '', '', '', ''];
  document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
  document.getElementById('board').classList.remove('game-over'); // Remove game-over class
  document.getElementById('winningMessage').innerText = ''; // Clear winning message
  document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
}