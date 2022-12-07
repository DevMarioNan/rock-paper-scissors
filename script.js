//declaring instances of images
const rockImg = document.createElement('img');
rockImg.setAttribute('src','https://pbs.twimg.com/media/D8Kygw6XYAEeEg8.png')

const paperImg = document.createElement('img');
paperImg.setAttribute('src','http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/3f4734bb2c3ce0f.png')

const scissorsImg = document.createElement('img');
scissorsImg.setAttribute('src','https://pbs.twimg.com/media/D7mSLOMUIAAGYfa.png')

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
        playerChoice = e.target.id;
        calculatingComputerChoice();
    })
})


//calculating computer choice
const calculatingComputerChoice = ()=>{
    const r = Math.floor(Math.random()*3);
    const rps = ['rock','paper','scissors'];
    computerChoice = rps[r];
}

const validation = ()=>{
    
}





