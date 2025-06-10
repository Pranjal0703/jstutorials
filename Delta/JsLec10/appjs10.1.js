// DOM EVENTS : events are signals that something is occured(user input/ any action)
// there are 3 methods to track events:
// 1.) Inline Events
// 2.) with the properties like onclick, etc.
// 3.) Event Listeners

// inline events: events that are written in html file eg:  <button onclick="console.log('button was clicked');"> click here</button> (written in html file)

// with properties: with this property method only one function can be executed at a time.
let btns = document.querySelectorAll('.btn');
console.dir(btns);

// btn.onclick = function(){
//     alert ("button was clicked");
// } or this can also be written as:

function btnclicked(){
    alert("Hello user! Button was clicked");
}

function enterbtn(){
    alert("Hello user! You entered in the range of button");
}

for (btn of btns){
    btn.onclick = btnclicked;
    btn.onmouseenter = enterbtn;
}


// EVENT LISTENERS: addEventListener (multiple event listeners can be created for a single object)
//  element.addEventListener(event, callback) Here event means anything that occurs like clicked draged or a keyboard key is pressed and callback are somefunction that will be executed.

let btnsEvent = document.querySelectorAll('.btnclass');

for(btnEvent of btnsEvent){
    btnEvent.addEventListener("click", Sayhello);
    btnEvent.addEventListener("click", sayname);
}

function Sayhello(){
    alert("Hello User");
}

function sayname(){
    alert("Pranjal");
}
