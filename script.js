document.addEventListener('DOMContentLoaded', () => {
    const favmovie = "avatar";
    const guessInput = document.getElementById('guessInput');
    const submitGuess = document.getElementById('submitGuess');
    const message = document.getElementById('message');

    submitGuess.addEventListener('click', () => {
        const guess = guessInput.value.trim().toLowerCase();

        if (guess === "quit") {
            message.textContent = "You quit the game.";
            message.style.color = "red";
        } else if (guess === favmovie) {
            message.textContent = "You guessed it right!";
            message.style.color = "green";
        } else {
            message.textContent = "Wrong guess, try again!";
            message.style.color = "orange";
        }

        guessInput.value = ''; // Clear the input field
        guessInput.focus(); // Focus back to the input field
    });
});
