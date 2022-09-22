//score started from 0 
let playerscore =0
let compscore = 0
const rockbutton = document.querySelector(".rock")
const paperbutton = document.querySelector(".paper")
const scissorbutton =document.querySelector(".scissor")
const outcomediv =document.querySelector(".outcome")

//logic comparison of computer selection and playerselection and score tally increase by 1 for each round won by wither party
const playround = (playerselection,computerselection) => {
    if (playerselection === computerselection) {
        const p = document.createElement("p")
        p.innerText= "you both tied, both chose the same thing" 
        outcomediv.appendChild(p)
    }
    else if (playerselection === "rock" && computerselection === "paper"){
       compscore++
        const p = document.createElement("p");
        p.innerText= "player lost comp chose paper" 
        outcomediv.appendChild(p) 
    }
    else if  (playerselection === "paper" && computerselection === "scissor"){
          compscore++
        const p = document.createElement("p")
        p.innerText= "player lost comp chose scissor"
        outcomediv.appendChild(p)
    }
        else if  (playerselection === "scissor" && computerselection === "rock"){
             compscore++
             const p = document.createElement("p")
            p.innerText=  "player lost comp chose rock"
            outcomediv.appendChild(p)
        }
            else if  (playerselection === "paper" && computerselection === "rock" ){
                 playerscore++ 
                 const p = document.createElement("p")
                p.innerText= "player won comp chose rock"
                outcomediv.appendChild(p)
            }
                else if  (playerselection === "rock" && computerselection === "scissor"){
                    playerscore++ 
                    const p = document.createElement("p")
                    p.innerText= "player won comp chose scissor"
                    outcomediv.appendChild(p)
                }
                    else if  (playerselection === "scissor" && computerselection === "paper"){
                           playerscore++ 
                           const p = document.createElement("p")
                        p.innerText=  "player won comp chose paper"
                        outcomediv.appendChild(p)
                   }
}
// computer choice generated from random array of rock paper and scissor
const computerplay = () => {
const arr0fChoices = ["rock","paper","scissor"]
const randomnum =  Math.floor(Math.random() * 3)
const compchoice = (arr0fChoices[randomnum])
return compchoice
}


//Each button is playing a round when the button is pressed
rockbutton.addEventListener("click", () => {
const computerselection = computerplay();
const playerselection =  "rock";
playround(playerselection,computerselection);
console.log(playround(playerselection,computerselection));
})

paperbutton.addEventListener("click", () => {
    const computerselection = computerplay();
    const playerselection =  "paper";
    playround(playerselection,computerselection);
    console.log(playround(playerselection,computerselection));
    })

    scissorbutton.addEventListener("click", () => {
        const computerselection = computerplay();
        const playerselection =  "scissor";
        playround(computerselection,playerselection);
        console.log(playround(playerselection,computerselection));
        })



        //all dom manipulation for dynamic results
