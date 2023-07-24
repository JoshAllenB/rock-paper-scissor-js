const choices = ['rock', 'paper', 'scissors'];
const computerChoice = choices[Math.floor(Math.random() * 3)];

var userChoice;

userChoice = prompt('Type your choice in lowercase ' + choices);

const result = 'You: ' + userChoice + " VS " + "Computer: " + computerChoice;
console.log(result) 

if (userChoice === computerChoice) {
    console.log("Tie Game!");
} else {
    var win = "You Won! POGGERS";
    if (userChoice === 'rock' && computerChoice === 'scissors') {
        console.log("You Won!")
    } else if(userChoice === 'rock' && computerChoice === 'paper'); {
        console.log("You suck ass! :P")
    } 
}
