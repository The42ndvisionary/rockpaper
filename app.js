let playerscore =0
let compscore = 0

const computerplay = () => {
const arr0fChoices = ["rock","paper","scissor"]
const randomnum =  Math.floor(Math.random() * 3)
const compchoice = (arr0fChoices[randomnum])
return compchoice
}

const playround = (playerselection,computerselection) => {
    if (playerselection === computerselection) {
        return "you both tied, both chose " + playerselection
    }
    
    else if (playerselection === "rock" && computerselection === "paper"){
        return compscore++,"player lost comp chose paper"
         
    }
    else if  (playerselection === "paper" && computerselection === "scissor"){
        return  "player lost comp chose scissor",compscore++
    }
        else if  (playerselection === "scissor" && computerselection === "rock"){
            return compscore++, "player lost comp chose rock"
        }
            else if  (playerselection === "scissor" && computerselection === "paper"){
                return playerscore++ ,
                "player won comp chose paper"
            }
                else if  (playerselection === "rock" && computerselection === "scissor"){
                    return playerscore++ ,
                    "player won comp chose scissor"
                }
                    else if  (playerselection === "scissor" && computerselection === "paper"){
                        return   playerscore++ ,
                        "player won comp chose paper"
                   }
}




const game = () => {
for (let i = 0; i < 5; i++){
    const computerselection = computerplay();

const playselection = prompt("type rock paper or scissor").toLowerCase();
    console.log(playround(playselection,computerselection));
}
if (playerscore > compscore) {
    return "you beat skynet yay"
}
else if (playerscore > compscore) {
    return "terminator wins"
}
}

console.log(game());