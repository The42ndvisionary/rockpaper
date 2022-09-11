
function playround(playerselection,computerchoice){


function playerselection(){
    const a = prompt("choose rock paper or scissor");
    const b = a.toLowerCase();
    if (b === "rock"){
        return "rock"
    }
    else if (b==="paper"){
        return "paper"
    }
    else if (b==="scissor"){
        return "scissor"
    }
    }
 
    function computerchoice(){
        const random = Math.floor(Math.random() * 3);
        if (random===0){
            return "rock"
        }
        else if (random===1){
            return "paper"
        }
        else if (random===2){
            return "scissor"
        }
    }

    if (playerselection() === "rock" &&  computerchoice() ==="rock"){
        return "it is a tie comp chose rock"
    }
    else if (playerselection() === "rock" && computerchoice()=== "paper"){
        return "player loses comp chose paper"
    }
    else if (playerselection() === "rock" && computerchoice()=== "scissor"){
        return "player wins comp chose scissor"
    }
    else if (playerselection() === "paper" && computerchoice()=== "scissor"){
        return "player loses comp chose scissor"
    }
    else if (playerselection() === "paper" && computerchoice()=== "rock"){
        return "player wins comp chose rock"
    }
    else if (playerselection() === "scissor" && computerchoice()=== "paper"){
        return "player loses comp chose paper"
    }
    else if (playerselection() === "scissor" && computerchoice()=== "rock"){
        return "player loses comp chose rock"
    }
    else if (playerselection() === "paper" &&  computerchoice() ==="paper"){
        return "it is a tie scissor paper"
    }
    else if (playerselection() === "scissor" &&  computerchoice() ==="scissor"){
        return "it is a tie scissor scissor"
    }
}

console.log(playround());