let humanScore = 0
let computerScore = 0

let computerChoice = null
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


let humanChoice = null

const results = document.querySelector("#results")
let choice = document.createElement("div")
let score = document.createElement("div")
let outcome = document.createElement("div")
let finalOutcome = document.createElement("div")

const reset = document.querySelector("#reset")
let resetButton = document.createElement("button")
resetButton.textContent = "Reset Game"


const buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
        humanChoice = button.id
        getComputerChoice()
        
        playRound(humanChoice, computerChoice)
        
        choice.textContent = "Your choice: " + humanChoice + ", Computer's choice: " + computerChoice 
        choice.setAttribute("style", "padding: 4px")
        results.appendChild(choice)   
        outcome.setAttribute("style", "padding: 4px")
        results.appendChild(outcome)
        score.textContent = "Your score: " + humanScore + ", Computer's score: " + computerScore 
        score.setAttribute("style", "padding: 4px")
        results.appendChild(score)
        
        if (humanScore === 5) {
            finalOutcome.textContent = "You win!"
            setTimeout(() => {
                alert(finalOutcome.textContent);
            }, 0); 
            reset.appendChild(resetButton) 
            resetButton.style.display = "block" 
            resetButton.addEventListener("click", () => {
                resetGame()
                choice.textContent = "Your choice: " + humanChoice + ", Computer's choice: " + computerChoice
                outcome.textContent = "Make a choice!"
                score.textContent = "Your score: " + humanScore + ", Computer's score: " + computerScore
                resetButton.style.display = "none"    
            })
        } else if (computerScore === 5) {
            finalOutcome.textContent = "You lose!"
            setTimeout(() => {
                alert(finalOutcome.textContent);
            }, 0);  
            reset.appendChild(resetButton) 
            resetButton.style.display = "block"
            resetButton.addEventListener("click", () => {
                resetGame()
                choice.textContent = "Your choice: " + humanChoice + ", Computer's choice: " + computerChoice
                outcome.textContent = "Make a choice!"
                score.textContent = "Your score: " + humanScore + ", Computer's score: " + computerScore
                resetButton.style.display = "none"    
            })
        }
    })
})

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        outcome.textContent = "Tie!"
    } else if (humanChoice === "ROCK" && computerChoice === "PAPER") {
        computerScore += 1
        outcome.textContent = "You lose!"
    } else if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
        humanScore += 1
        outcome.textContent = "You win!"
    } else if (humanChoice === "PAPER" && computerChoice === "SCISSORS") {
        computerScore += 1
        outcome.textContent = "You lose!"
    } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
        humanScore += 1
        outcome.textContent = "You win!"
    } else if (humanChoice === "SCISSORS" && computerChoice === "ROCK") {
        computerScore += 1
        outcome.textContent = "You lose!"
    } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        humanScore += 1 
        outcome.textContent = "You win!"
    }
}

function resetGame() {
    humanChoice = "Nil"
    computerChoice = "Nil"
    humanScore = 0
    computerScore = 0
}



