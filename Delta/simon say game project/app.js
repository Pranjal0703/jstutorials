let gameseq = [];
let userseq = [];

let started = false;
let level = 0;

let h3 = document.querySelector('h3');
let h4 = document.querySelector('h4');
let btns = ["red", "yellow", "green", "purple"];
// let body = document.querySelector('body');
let score = document.querySelector('.score');
let overlay = document.querySelector('.overlay');

document.addEventListener("keydown", gamestarted);

function gamestarted(event){
    if(started== false){
        console.log(event.code);
        if(event.code == "Enter"){
            console.log("game started");
            started = true;
            levelup(); 
        }
    }
}

function levelup(){
    userseq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let ranIndx = Math.floor(Math.random() * 4);
    let ranClr = btns[ranIndx];
    let ranbtn = document.querySelector(`.${ranClr}`);
    gameseq.push(ranClr);
    console.log(gameseq);
    btnFlash(ranbtn);
}

function btnFlash(btn){ 
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250); 
}

function btnPress(){  
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userseq.push(userColor);
    console.log(userseq);
    checkAns(userseq.length-1);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250); 
}

let allbtns = document.querySelectorAll('.btn');
for(btn of allbtns){
    btn.addEventListener("click", btnPress);
}

function checkAns(idx){
    // console.log("current level: ", level);
    if(userseq[idx] === gameseq[idx]){
        console.log("same value");
        if(userseq.length == gameseq.length){
            setTimeout(levelup, 1000);
        }
    } else{
        h3.innerText = "Game Over! Press Enter to Start Again..."
        h4.innerHTML = `Your Score is ${level-1}`;

        score.classList.remove("scoredisplay");
        overlay.classList.remove("overlaydisplay");
        // body.classList.add("bodyflash");
        // setTimeout(function(){
        //     body.classList.remove("bodyflash");
        // }, 250);
        reset();
    }
}

function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}