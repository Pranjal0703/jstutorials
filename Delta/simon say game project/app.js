let gameSeq = [];
let userSeq = [];

let h3 = document.querySelector('h3');

let game = false;
let level = 0;
let boxColor = ["red", "yellow", "green", "purple"];


document.addEventListener("keydown", startGame);

function startGame(event) {
    if(game == false){
        console.log(event.code);
        if(event.code == "Enter"){
            console.log("Game started");
            game = true;
            levelup();
        }
    }    
}

function levelup(){
    level++;
    h3.innerText =  `Level: ${level}`;
    let randomIndex = Math.floor(Math.random() *4);
    let randomColor = boxColor[randomIndex];
    let randomBox = document.querySelector(`.${randomColor}`);
    gameFlash(randomBox);
    gameSeq.push(randomColor);
    console.log(gameSeq);
}

function gameFlash(boxes){
    boxes.classList.add("gameflash");
    setTimeout(function(){
        boxes.classList.remove("gameflash");
    }, 250);

}


let allBoxes = document.querySelectorAll('.box');
for (box of allBoxes){
    box.addEventListener("click", boxPressed);
}

function boxPressed(){
    console.log(this);
    let box = this;
    userFlash(this);

    userColor = box.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns();
}

function userFlash(box){
    box.classList.add("userflash");
    setTimeout(function(){
        box.classList.remove("userflash");
    }, 250);
}

function checkAns(){
    console.log(`current level ${level}`);

    let indx = level -1;
    
    if(userSeq[indx] === gameSeq[indx]){
        console.log("same value");
    }else{
        h3.innerText =  `Game Over! Press Enter to Start Again...`;
    }
}
 