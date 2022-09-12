const computerplay = () => {
const arr0fChoices = ["rock","paper","scissor"]
const randomnum =  Math.floor(Math.random() * 3)
const compchoice = (arr0fChoices[randomnum])
return compchoice
}

const playround = (playerselection,computerelection) => {
    if (playerselection === computerselection) {
        return "you both tied, both chose " + playerselection
    }
    else if (playerselection === "rock" && computerselection === "paper"){
        return  "player lost comp chose paper"
    }
    else if  (playerselection === "paper" && computerselection === "scissor"){
        return  "player lost comp chose scissor"}
        else if  (playerselection === "scissor" && computerselection === "rock"){
            return  "player lost comp chose rock"}
            else if  (playerselection === "scissor" && computerselection === "paper"){
                return  "player won comp chose paper"}
                if  (playerselection === "rock" && computerselection === "scissor"){
                    return  "player won comp chose scissor"}
                    if  (playerselection === "scissor" && computerselection === "paper"){
                        return  "player won comp chose paper"}
}


const playselection = "rock";
const computerselection = computerplay();
console.log(playround(playselection,computerselection));