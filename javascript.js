let choice;
let generated = Math.floor(Math.random()*3)
console.log(generated)

function getComputerChoice() {
    if (generated === 0) {
        return choice = "Rock"
    } else if (generated === 1) {
        return choice = "Paper"
    } else {
        return choice = "Scissors"
    }
}

getComputerChoice()
console.log(choice)
