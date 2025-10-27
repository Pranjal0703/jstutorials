// CALLBACK HELL

// In this we will change the color of heading after each seconds.

let h1 = document.querySelector('.simple');

setTimeout(() =>{
    h1.style.color = "red";
}, 1000); 

setTimeout(() =>{
    h1.style.color = "orange";
}, 2000); 

setTimeout(() =>{
    h1.style.color = "green";
}, 3000);


// In more appropriate manner

let h2 = document.querySelector('h2');

function changeColor(color, delay) {
    setTimeout(() => {
         h2.style.color= color; 
    }, delay);
      
}
changeColor("rxd", 1000);
changeColor("orange", 2000);
changeColor("green", 3000);

// But in this way there is no dependency.

// The Best Way
// there is depency as each tasks depends on other as the time in the delay parameter.

let best = document.querySelector('.best');

function colorChange(color, delay, nextColor) {
    setTimeout(() => {
        best.style.color = color;
        if (nextColor) nextColor();
    },delay);
}

colorChange("red", 1000, () => {
    colorChange("orange", 1000, ()=> {
        colorChange("green", 1000);
    });
});

// This callback nesting which is also callled callback hell
// But this callback hell is so confusing and complex so to prevent them there are some ways: promises, async and await keywords.