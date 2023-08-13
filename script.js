
// this function gives us random value chosen by computer
function getComputerChoice() {
    // 1 - rock
    // 2 - paper
    // 3 - scissors

    let random_choice = Math.floor(Math.random() * 3);
    if (random_choice === 0) return "rock";
    else if (random_choice === 1) return "paper";
    return "scissors";
}


// this function is used to simulate one round
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase().trim(); // converting player selection to lowercase & trimming in case extra space is there
    if (!verifyPlayerSelection(playerSelection)) return "You provided wrong value";// if player has provided wrong input, we will return this

    // if player has provided right input, we will simply return following values based on selection made by user & computer
    if (playerSelection === computerSelection) return "Tied! Both cancel out each other";
    else if (playerSelection === "rock" && computerSelection === "paper") return "You Lose! Paper beats Rock";
    else if (playerSelection === "rock" && computerSelection === "scissors") return "You Won! Rock beats Scissors";
    else if (playerSelection === "paper" && computerSelection === "rock") return "You Won! Paper beats Rock";
    else if (playerSelection === "paper" && computerSelection === "scissors") return "You Lost! Scissors beats Paper";
    else if (playerSelection === "scissors" && computerSelection === "rock") return "You Lost! Rock beats Scissors";
    else if (playerSelection === "scissors" && computerSelection === "paper") return "You won! Scissors beats Paper";
}

// this function checks if the value provided by user is correct or not
function verifyPlayerSelection(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") return true;
    return false;
}

// this program gathers both players' selection & calls for the round
function game() {
    const playerSelection = prompt("Please enter your exact choice[case insensitive] (rock or paper or scissors only):");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}

// calling game function five times to simulate five rounds
game();
game();
game();
game();
game();
