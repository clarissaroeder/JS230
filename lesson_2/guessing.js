document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form');
  let input = document.querySelector('#guess');
  let paragraph = document.querySelector('p');
  let link = document.querySelector('a');
  let answer;
  let guesses;
  let message;

  function newGame() {
    answer = Math.floor(Math.random() * 100) + 1;
    guesses = 0;
    message = 'Guess a number from 1 to 100';
    paragraph.textContent = message;
  }
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    let guess = parseInt(input.value);
    guesses++;

    if (guess > answer) {
      message = `My number is lower than ${guess}`;
    } else if (guess < answer) {
      message = `My number is higher than ${guess}`;
    } else if (guess === answer) {
      message = `You guessed it! It took you ${guesses} guesses.`;
    }

    paragraph.textContent = message;
  });

  link.addEventListener('click', function(event) {
    event.preventDefault();
    newGame();
  });

  newGame();
});