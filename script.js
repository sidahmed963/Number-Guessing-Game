    window.addEventListener('load', () => {
      setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        const game = document.getElementById('game');
        game.classList.add('visible');
        document.getElementById('guess').focus();
      }, 2500);
    });

  
  let secretNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;
  const messageEl = document.getElementById('message');
  const scoreEl = document.getElementById('score');
  const guessInput = document.getElementById('guess');
  const checkBtn = document.getElementById('checkBtn');
  const restartBtn = document.getElementById('restartBtn');

  function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    messageEl.textContent = '';
    scoreEl.textContent = '';
    guessInput.value = '';
    guessInput.disabled = false;
    checkBtn.disabled = false;
  }

 checkBtn.addEventListener('click', () => {
  const guess = Number(guessInput.value);
  if (!guess || guess < 1 || guess > 100) {
    messageEl.textContent = 'Please enter a valid number between 1 and 100.';
    return;
  }
  attempts++;

  const diff = guess - secretNumber;

  if (guess === secretNumber) {
    messageEl.textContent = `🎉 Correct! You guessed it in ${attempts} attempts.`;
    scoreEl.textContent = 'Game Over! Click Restart to play again.';
    guessInput.disabled = true;
    checkBtn.disabled = true;
  } else if (diff > 0) {
    // Guess is higher than secretNumber
    if (diff <= 10) {
      messageEl.textContent = 'A bit high! Try a slightly lower number.';
    } else {
      messageEl.textContent = 'Too high! Try again.';
    }
  } else {
    // Guess is lower than secretNumber
    if (Math.abs(diff) <= 10) {
      messageEl.textContent = 'A bit low! Try a slightly higher number.';
    } else {
      messageEl.textContent = 'Too low! Try again.';
    }
  }

  guessInput.value = '';
  guessInput.focus();
});

  restartBtn.addEventListener('click', resetGame);

  resetGame();