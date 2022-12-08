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

buttons.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        deleteChildren();
        playerChoice = e.target.id;
        
        player.append(playerImg[playerChoice]);
        calculatingComputerChoice();
        validation();
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
        if(playerChoice === 'rock' && computerChoice === 'paper')console.log('computer wins');
        if(playerChoice === 'paper' && computerChoice === 'scissors')console.log('computer wins');
        if(playerChoice === 'scissors' && computerChoice === 'rock')console.log('computer wins');

        if(playerChoice === 'rock' && computerChoice === 'scissors')console.log('player wins');
        if(playerChoice === 'scissors' && computerChoice === 'paper')console.log('player wins');
        if(playerChoice === 'paper' && computerChoice === 'rock')console.log('player wins');
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



