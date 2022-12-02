const rps = ['rock', 'paper', 'scissors'];

const computerSelection = () => {
    const choice = Math.floor(Math.random() * 3);
    return rps[choice];
}

const round = (playerSelection, computerSelection) => {
    if (!rps.includes(playerSelection)) {
        console.log('please restart the page and write a valid choice.');
    } else {
        if (playerSelection === computerSelection) {
            console.log("Draw !!!");
        } else if (
            (playerSelection === "rock" && computerSelection === 'paper') ||
            (playerSelection === "scissors" && computerSelection === 'rock') ||
            (playerSelection === 'paper' && computerSelection === 'scissors')
        ) {
            console.log(`You Lose!, ${computerSelection} beats ${playerSelection}!!!`);
        } else if (
            (playerSelection === "paper" && computerSelection === 'rock') ||
            (playerSelection === "rock" && computerSelection === 'scissors') ||
            (playerSelection === 'scissors' && computerSelection === 'paper')
        ) {
            console.log(`You Win!, ${playerSelection} beats ${computerSelection}!!! `);
        }
    }
}

const game = ()=>{
    for(let i =0;i<5;i++){
        const playerSelection = prompt("please choose from {rock , paper , scissors}").toLowerCase();
        round(playerSelection, computerSelection());
    }
}

game();