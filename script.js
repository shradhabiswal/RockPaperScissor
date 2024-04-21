
let scoreStr = localStorage.getItem('Score');
let score;
resetScore(scoreStr);

function resetScore(scoreStr){
    score = scoreStr ? JSON.parse(scoreStr) : {
        won: 0,
        lost: 0,
        tie: 0
    };

    score.displayScore = function () {
        return `Score: won = ${score.won}, lost = ${score.lost}, tie = ${score.tie}`;
    };

    showResult();
}
score = JSON.parse(scoreStr) || {
    won: 0,
    lost: 0,
    tie: 0
};

// if (scoreStr != undefined) {
//     score = JSON.parse(scoreStr);
// } else {
//     score = {
//         won: 0,
//         lost: 0,
//         tie: 0
//     };
// }



function generateComputerChoice() {
    let randomNum = Math.random() * 3;
    if (randomNum <= 1) {
        return 'rock';
    } else if (randomNum <= 2) {
        return 'paper';
    } else {
        return 'scissor';
    }
}

function result(userChoice, computerChoice) {
    if (userChoice === 'rock') {
        if (computerChoice === 'rock') {
            score.tie++;
            return `It's a tie`;
        } else if (computerChoice === 'paper') {
            score.lost++;
            return 'Computer won';
        } else {
            score.won++;
            return 'You won';
        }
    }
    else if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            score.won++;
            return 'You won';
        } else if (computerChoice === 'paper') {
            score.tie++;
            return `It's a tie`;
        } else {
            score.lost++;
            return 'Computer won';
        }
    }
    else {
        if (computerChoice === 'rock') {
            score.lost++;
            return 'Computer won';
        } else if (computerChoice === 'paper') {
            score.won++;
            return 'You won';
        } else {
            score.tie++;
            return `It's a tie`;
        }
    }
}
function showResult(userChoice, computerChoice, resultMsg) {

    localStorage.setItem('Score', JSON.stringify(score));
    document.querySelector('#user-choice').innerText = userChoice ? `You have chosen ${userChoice}.` : '';
    document.querySelector('#computer-choice').innerText = computerChoice ? `Computer's choice is ${computerChoice}.`: '';
    document.querySelector('#result').innerText = resultMsg || '';
    document.querySelector('#score').innerText = `${score.displayScore()}`;

}