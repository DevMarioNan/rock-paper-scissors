//score
let playerScore = 0;
let computerScore = 0;

//declaring instances of images
const playerRockImg = document.createElement('img');
playerRockImg.setAttribute('src','https://pbs.twimg.com/media/D8Kygw6XYAEeEg8.png')

const playerPaperImg = document.createElement('img');
playerPaperImg.setAttribute('src','http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/3f4734bb2c3ce0f.png')

const playerScissorsImg = document.createElement('img');
playerScissorsImg.setAttribute('src','https://pbs.twimg.com/media/D7mSLOMUIAAGYfa.png')

const playerImg = []
playerImg['scissors'] = playerScissorsImg;
playerImg['rock'] = playerRockImg;
playerImg['paper'] = playerPaperImg;


const computerRockImg = document.createElement('img');
computerRockImg.setAttribute('src','https://pbs.twimg.com/media/D8Kygw6XYAEeEg8.png')

const computerPaperImg = document.createElement('img');
computerPaperImg.setAttribute('src','http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/3f4734bb2c3ce0f.png')

const computerScissorsImg = document.createElement('img');
computerScissorsImg.setAttribute('src','https://pbs.twimg.com/media/D7mSLOMUIAAGYfa.png')

const computerImg = []
computerImg['scissors'] = computerScissorsImg;
computerImg['rock'] = computerRockImg;
computerImg['paper'] = computerPaperImg;


//player and computer choices
let playerChoice = '';
let computerChoice = '';

//getting the image holders
const player = document.querySelector('#player');

const computer = document.querySelector('#computer');

//getting player desison

const buttons = document.querySelectorAll('button');

//getting scoreboard
const score = document.querySelector('#score');

buttons.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        deleteChildren();
        playerChoice = e.target.id;
        player.append(playerImg[playerChoice]);
        calculatingComputerChoice();
        validation();
        score.textContent = `${playerScore} - ${computerScore}`;
        game();
    })
})


//calculating computer choice
const calculatingComputerChoice = ()=>{
    const r = Math.floor(Math.random()*3);
    const rps = ['rock','paper','scissors'];
    computerChoice = rps[r];
    computer.appendChild(computerImg[computerChoice]);
}

//validating game
const validation = ()=>{
    if(playerChoice === computerChoice){
        console.log("draw");
    }else{
        if(playerChoice === 'rock' && computerChoice === 'paper')computerScore++;
        if(playerChoice === 'paper' && computerChoice === 'scissors')computerScore++;
        if(playerChoice === 'scissors' && computerChoice === 'rock')computerScore++;

        if(playerChoice === 'rock' && computerChoice === 'scissors')playerScore++;
        if(playerChoice === 'scissors' && computerChoice === 'paper')playerScore++;
        if(playerChoice === 'paper' && computerChoice === 'rock')playerScore++;
    }
}

const deleteChildren = ()=>{
    child = player.lastElementChild;
    while(child){
        player.removeChild(child);
        child = player.lastChild;
    }
    child = computer.lastElementChild;
    while(child){
        computer.removeChild(child);
        child = computer.lastChild;
    }
}

const overlay = document.querySelector('.overlay');
const title = document.querySelector('#title');
const restartBtn = document.querySelector('#restart');


//game function
const game = ()=>{
    if(playerScore === 5){
        overlay.classList.toggle('hidden');
        title.textContent = 'Player Wins'
    }
    if(computerScore === 5){
        overlay.classList.toggle('hidden');
        title.textContent = 'Computer Wins'
    }
}

restartBtn.addEventListener('click',()=>{
    location.reload();
})
