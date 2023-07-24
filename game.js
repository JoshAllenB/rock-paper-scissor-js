var choices = ['rock', 'paper', 'scissors'];
var computerChoice = choices[Math.floor(Math.random() * 3)];

var userChoice;

userChoice = prompt('Type your choice in lowercase ' + choices);

let result = 'You: ' + userChoice + " VS " + "Computer: " + computerChoice;

if (userChoice === computerChoice) {
    result += ' Tie Game!'
} else {
    var win = " You Won! POGGERS";
    if (userChoice === 'rock' && computerChoice === 'scissors') {
        result += win;
    } else if(userChoice === 'scissors' && computerChoice === 'paper') {
        result += win;
    } else if(userChoice === 'paper' && computerChoice === 'rock') {
        result += win;
    } else {
        result += " You Suck! :P"
    }
}
document.getElementById("out").textContent = result + '\n';
console.log(result);