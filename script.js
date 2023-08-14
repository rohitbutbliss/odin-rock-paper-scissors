let options = document.querySelectorAll(".option");
let earthsChoiceDiv = document.querySelector(".earth-choice > div");

let earthScore = 0;
let alienScore = 0;

options.forEach(option => option.addEventListener("click", startRound));

function startRound(e) {
    let earthsChoice;
    let aliensChoice = getAlienChoice();

    if (e.target === e.currentTarget) {
        imageUrl = e.target.querySelector("img").getAttribute("src");
        earthsChoice = e.target.querySelector("img").getAttribute("alt");
    }

    else {
        imageUrl = e.target.getAttribute("src");
        earthsChoice = e.target.getAttribute("alt");
    }

    setImageUrl(earthsChoice, aliensChoice);
    updateScore(earthsChoice, aliensChoice);
    setScore();

};

function updateScore(earthsChoice, aliensChoice) {
    let result = playRound(earthsChoice, aliensChoice);
    if (result === 1) earthScore++;
    else if (result === 0) alienScore++;

    if (earthScore === 5 || alienScore === 5) {
        options.forEach(option => option.removeEventListener("click", startRound));
        endGame();
    }
}

function endGame() {
    let endText = document.querySelector(".ending-text");
    if (alienScore === 5) {
        endText.textContent = "In the aftermath of the invasion, Earth now bears the mark of an alien world, a stark reminder of the cost of division and the need for unity in the face of the unknown.";
    }
    else {
        endText.textContent = "Against all odds, Earth united and triumphed, securing a future where humanity's resilience shines brighter than the stars.";

    }
}

function setScore() {
    let earthsScoreCard = document.querySelector(".earth-score > .score");
    let aliensScoreCard = document.querySelector(".alien-score > .score");
    earthsScoreCard.innerText = earthScore;
    aliensScoreCard.innerText = alienScore;
}

function setImageUrl(earthsChoiceImg, aliensChoiceImg) {
    let earthImage = document.createElement("img");
    earthImage.src = `./images/${earthsChoiceImg}.png`;

    let alienImage = document.createElement("img");
    alienImage.src = `./images/${aliensChoiceImg}.png`;

    let earthsChoiceDiv = document.querySelector(".earth-choice > div");
    let aliensChoiceDiv = document.querySelector(".alien-choice > div");

    earthsChoiceDiv.innerHTML = '';
    aliensChoiceDiv.innerHTML = '';

    earthsChoiceDiv.appendChild(earthImage);
    aliensChoiceDiv.appendChild(alienImage);
}

function getAlienChoice() {
    // 1 - rock
    // 2 - paper
    // 3 - scissors

    let random_choice = Math.floor(Math.random() * 3);
    if (random_choice === 0) return "rock";
    else if (random_choice === 1) return "paper";
    return "scissors";
}


function playRound(earthsSelection, aliensSelection) {
    if (earthsSelection === aliensSelection) return -1;
    else if (earthsSelection === "rock" && aliensSelection === "paper") return 0;
    else if (earthsSelection === "rock" && aliensSelection === "scissors") return 1;
    else if (earthsSelection === "paper" && aliensSelection === "rock") return 1;
    else if (earthsSelection === "paper" && aliensSelection === "scissors") return 0;
    else if (earthsSelection === "scissors" && aliensSelection === "rock") return 0;
    else if (earthsSelection === "scissors" && aliensSelection === "paper") return 1;
}
