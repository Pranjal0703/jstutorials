let para = document.querySelector('p');
para.addEventListener("click", function(){
    console.log("Paragraph was clicked");
});

let block = document.querySelector('.box');
block.addEventListener("mouseenter", function(){
    console.log("mouse inside the div.");
});


// this in Event Listeners: when 'this' is used in the a callback of event handler/listener of something, it refer to that something.
// We can use the 'this' keyword in the callback ("click", callback). here 'this' keyword is used for the specific object or element for which the event listener is used.

// Example:
let btn = document.querySelector('button');
btn.addEventListener("click", function(){
    console.log(this);
    console.dir(this);
    console.log(this.innerText);
    this.style.backgroundColor = "green";
});
// this keyword is used in eventListners when we want to use a single event listener on multiple objects

let elements = document.querySelectorAll('.multipleevent');

for( element of elements){
    element.addEventListener("click", multiple);
}

function multiple(){
    console.log(this.innerText);
    this.style.backgroundColor = "lightgreen";
}


// KEYBOARD EVENTS: an defualt argrument is always there in addeventlistener's function that can be written as event, e or evt.

btn2 = document.querySelector('.keybtn');
btn2.addEventListener("click", function(event){
    console.log("button clicked");
    console.log(event);
});
// here this will return a pointer event when button was clicked as the button was clicked with the mouse pointer


let inp = document.querySelector('input');
inp.addEventListener("keydown", function(event){
    console.log("key was pressed");
    console.log(event);
});
// here this will return keyboard event when any key on keyboard will be pressed.

inp.addEventListener("keyup", function(event){
    console.log("key was released");
    console.log(event);
    console.log(event.key);
    console.log(event.code);
});

// inp.addEventListener("keypressed", function(event){
//     console.log("key was enter");
//     console.log(event);
// });

// In keyboard events there are two main properties: 1.) key and 2.) code
// 1.) Key: tells that which key is pressed and visible on sreen
// 2.) Code: will return the code of the key 
// example: If space bar is pressed then the key will return: " "(empty string) and code will return the key code that is 'space'.



let char = document.querySelector('.character');
char.addEventListener("keydown", function(event){
    console.log("code =", event.code);
    if(event.code == "ArrowUp"){
        console.log("character moves forward");
    } else if(event.code == "ArrowDown"){
        console.log("character moves backward");
    } else if(event.code == "ArrowRight"){
        console.log("character moves right side");
    } else if(event.code == "ArrowLeft"){
        console.log("character moves Left Side");
    }    
})     