let humanScore = 0
let computerScore = 0

let computerChoice
let generated = Math.floor(Math.random()*3)

function getComputerChoice() {
    if (generated === 0) {
        return computerChoice = "ROCK"
    } else if (generated === 1) {
        return computerChoice = "PAPER"
    } else {
        return computerChoice = "SCISSORS"
    }
}

let humanChoice
function getHumanChoice(choice) {
    return humanChoice = choice.toUpperCase()
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Tie!"
    } else if (humanChoice === "ROCK" && computerChoice === "PAPER") {
        return "You lose!"
    } else if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
        return "You win!"
    } else if (humanChoice === "PAPER" && computerChoice === "SCISSORS") {
        return "You lose!"
    } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
        return "You win!"
    } else if (humanChoice === "SCISSORS" && computerChoice === "ROCK") {
        return "You lose!"
    } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        return "You win!"
    }
}

getComputerChoice()
console.log(computerChoice)

getHumanChoice(prompt("Rock! Paper ! Scissors!"))
console.log(humanChoice)

console.log(playRound(humanChoice,computerChoice))
