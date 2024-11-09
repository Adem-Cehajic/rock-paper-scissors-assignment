const options = ['rock','scissors','paper'];
let cs = 0;
let hs = 0;
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
function getHumanChoice(inputstring) {
    if (options.includes(inputstring.toLowerCase())) {
    return inputstring.toLowerCase();
    }
    else { return false;}
}
function playround(h,c) {
    if (h==c) {
        cs = cs;
        hs = hs;
        console.log('Draw')
    }
    else{ if (h === 'rock') {
        if (c == 'paper') {
            cs += 1;
            console.log('You lose paper beats rock')
        }
        else {
            hs += 1;
            console.log('You win rock beats scissors')
        }
    }
    if (h === 'paper') {
        if (c == 'rock') {
            hs += 1;
            console.log('You win paper beats rock')
        }
        else {
            cs += 1;
            console.log('You lose scissors beats paper')
        }
    }
    if (h=== 'scissors') {
        if (c == 'rock') {
            cs += 1;
            console.log('You lose rock beats scissors')
        }
        else {
            hs += 1;
            console.log('You win scissors beats paper')
    }}}
}


for (let i = 0; i < 5; i++) {
    const v = getComputerChoice();
    playround(getHumanChoice(window.prompt('enter your rock paper scissors choice')),v)
    console.log(v)
    console.log('Your at '+hs+' the computer is at '+cs)
}
