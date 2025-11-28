let count = 0

let humanScore = 0
let computerScore = 0

let computerChoice

function getComputerChoice() {
    let generated = Math.floor(Math.random()*3)
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

while (count < 5) {
    getComputerChoice()
    // console.log(computerChoice)
    
    getHumanChoice(prompt("Rock! Paper ! Scissors!"))
    console.log("Your choice: " + humanChoice + ", Computer's choice: " + computerChoice)
    console.log(playRound(humanChoice, computerChoice))
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "Tie!"
        } else if (humanChoice === "ROCK" && computerChoice === "PAPER") {
            computerScore ++
            return "You lose!"
        } else if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
            humanScore ++
            return "You win!"
        } else if (humanChoice === "PAPER" && computerChoice === "SCISSORS") {
            computerScore ++
            return "You lose!"
        } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
            humanScore ++
            return "You win!"
        } else if (humanChoice === "SCISSORS" && computerChoice === "ROCK") {
            computerScore ++
            return "You lose!"
        } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
            humanScore ++
            return "You win!"
        }
    }
    console.log("Your score: " + humanScore + ", Computer's score: " + computerScore)
    console.log(" ")
    count ++    
}

if (humanScore > computerScore) {
    console.log("You win!")
} else if (humanScore < computerScore) {
    console.log("You lose!")
} else {
    console.log("Tie!")
}