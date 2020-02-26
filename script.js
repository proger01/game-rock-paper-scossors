let userScore = 0;
let compScore = 0;
const userScoreOnScreen = document.getElementsByClassName('user-score')[0];
const compScoreOnScreen = document.getElementsByClassName('comp-score')[0];
const result = document.getElementsByClassName('result')[0];
const rock = document.getElementsByClassName('rock')[0];
const paper = document.getElementsByClassName('paper')[0];
const scissors = document.getElementsByClassName('scissors')[0];
const user = '(user)'.sup().fontsize(2);
const comp = '(comp)'.sup().fontsize(2);
const greenGlow = document.getElementsByClassName('green-glow')[0]
const redGlow = document.getElementsByClassName('red-glow')[0]
const grayGlow = document.getElementsByClassName('gray-glow')[0]

// green-glow
function deleteRockGreenGlow() {
    rock.classList.remove('green-glow');
}

function deletePaperGreenGlow() {
    paper.classList.remove('green-glow');
}

function deleteScissorsGreenGlow() {
    scissors.classList.remove('green-glow');
}

// red-glow
function deleteRockRedGlow() {
    rock.classList.remove('red-glow');
}

function deletePaperRedGlow() {
    paper.classList.remove('red-glow');
}

function deleteScissorsRedGlow() {
    scissors.classList.remove('red-glow');
}

// gray-glow
function deleteRockGrayGlow() {
    rock.classList.remove('gray-glow');
}

function deletePaperGrayGlow() {
    paper.classList.remove('gray-glow');
}

function deleteScissorsGrayGlow() {
    scissors.classList.remove('gray-glow');
}

// win glow button
function changeWinColorButton(userChoiceButton) {
    if (userChoiceButton === 'r') {
        rock.classList.add('green-glow');
        setTimeout(deleteRockGreenGlow, 300);
    } else if (userChoiceButton === 'p') {
        paper.classList.add('green-glow');
        setTimeout(deletePaperGreenGlow, 300);
    } else {
        scissors.classList.add('green-glow');
        setTimeout(deleteScissorsGreenGlow, 300);
    }
}

// score on blackboard
function win(userChoiceButton){
    userScore++
    userScoreOnScreen.innerHTML = userScore;
    changeWinColorButton(userChoiceButton);
}

// lose glow button
function changeLoseColorButton(userChoiceButton) {
    if (userChoiceButton === 'r') {
        rock.classList.add('red-glow');
        setTimeout(deleteRockRedGlow, 300);
    } else if (userChoiceButton === 'p') {
        paper.classList.add('red-glow');
        setTimeout(deletePaperRedGlow, 300);
    } else {
        scissors.classList.add('red-glow');
        setTimeout(deleteScissorsRedGlow, 300);
    }
}

// score on blackboard
function lose(userChoiceButton){
    compScore++
    compScoreOnScreen.innerHTML = compScore;
    changeLoseColorButton(userChoiceButton);
}

// draw glow button
function changeDrawColorButton(userChoiceButton) {
    if (userChoiceButton === 'r') {
        rock.classList.add('gray-glow');
        setTimeout(deleteRockGrayGlow, 300);
    } else if (userChoiceButton === 'p') {
        paper.classList.add('gray-glow');
        setTimeout(deletePaperGrayGlow, 300);
    } else {
        scissors.classList.add('gray-glow');
        setTimeout(deleteScissorsGrayGlow, 300);
    }
}

// score on blackboard
function draw(userChoiceButton){
    result.innerHTML = 'It\'s a draw! Try again.';
    changeDrawColorButton(userChoiceButton);
}

// random computer choice
function compChoice(){
    let computerChoice = '';
    const compNumber = Math.random() * 3;
    const roundCompNumber = Math.floor(compNumber);
    switch (roundCompNumber){
        case 0:
            computerChoice = 'r';
            break;
        case 1:
            computerChoice = 'p';
            break;
        case 2:
            computerChoice = 's';
            break;
    }
    return computerChoice;
}

// combination of cases and their consequences
function game(choice){
    const fight = choice + compChoice();
    switch (fight) {
        case 'rr':
            draw(choice);
            result.innerHTML = `Rock${user} and rock${comp}. It\'s a draw:/`
            break;
        case 'rp':
            lose(choice);
            result.innerHTML = `Rock${user} loses to paper${comp}! You lost:(`
            break;
        case 'rs':
            win(choice);
            result.innerHTML = `Rock${user} beats scissors${comp}! You win:)`
            break;
        case 'pr':
            win(choice);
            result.innerHTML = `Paper${user} beats rock${comp}! You win:)`
            break;
        case 'pp':
            draw(choice);
            result.innerHTML = `Paper${user} and paper${comp}. It\'s a draw:/`
            break;
        case 'ps':
            lose(choice);
            result.innerHTML = `Paper${user} loses to scissors${comp}! You lost:(`
            break;
        case 'sr':
            lose(choice);
            result.innerHTML = `Scissors${user} loses to rock${comp}! You lost:(`
            break;
        case 'sp':
            win(choice);
            result.innerHTML = `Scissors${user} beats paper${comp}! You win:)`
            break;
        case 'ss':
            draw(choice);
            result.innerHTML = `Scissors${user} and scissors${comp}. It\'s a draw:/`
            break;
                    
    }
}

// button event
rock.addEventListener('click', function(){
    game('r');
})

paper.addEventListener('click', function(){
    game('p');
})

scissors.addEventListener('click', function(){
    game('s');
})
