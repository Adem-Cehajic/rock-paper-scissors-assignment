function getComputerChoice() {
    const n = Math.floor(Math.random()*3 + 1);
    if (n === 1) {
        return 'rock';
    }
    else { if (n === 2) {
        return 'paper';
        }
        else {
            return 'scissors';
        }

    }
}
console.log(getComputerChoice());