function getcomputerchoise () {
    let a = "rock" ;
    let b = "paper" ;
    let c = "scissor" ;
    const random =Math.floor(Math.random() * 3);
    if  (random === 0) {
        return a;
    }
    else if (random===1){
        return b;
    }
    else if (random===2){
        return c;
    }
}

function playerinput(){
let a = prompt("choose rock , paper or scissors")
let b = a.toLowerCase();
if (b==="rock"){
    return "rock";
}
else if (b==="paper"){
    return "paper";
}
else if (b==="scissor"){
    return "scissor";
}
}
console.log("the player chooses " + playerinput());