var choices = ['rock', 'paper', 'scissors'];
var playerScore = 0;
var computerScore = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playGame(userChoice) {
  var computerChoice = getComputerChoice();
  var result = 'You: ' + userChoice + ' VS Computer: ' + computerChoice;

  var resultElement = document.getElementById('result');
  resultElement.textContent = result;

  if (userChoice === computerChoice) {
      resultElement.classList.add('tie');
      resultElement.classList.remove('win', 'lose');
  } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'scissors' && computerChoice === 'paper') ||
      (userChoice === 'paper' && computerChoice === 'rock')
  ) {
      resultElement.classList.add('win');
      resultElement.classList.remove('tie', 'lose');
      playerScore++;
  } else {
      resultElement.classList.add('lose');
      resultElement.classList.remove('tie', 'win');
      computerScore++;
  }

  document.getElementById('score').textContent = 'Player: ' + playerScore + ' - Computer: ' + computerScore;

  if (playerScore === 5) {
      announceWinner("Player");
  } else if (computerScore === 5) {
      announceWinner("Computer");
  }
}

function announceWinner(winner) {
    var resultDiv = document.getElementById('result');
    resultDiv.textContent = winner + " is the winner!";
    resultDiv.style.color = 'green';

    // Disable the choice buttons once a winner is announced.
    var choiceButtons = document.querySelectorAll('.choices button');
    choiceButtons.forEach(button => button.disabled = true);
}
