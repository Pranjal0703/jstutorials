// ques 1. A <p> with red text "hey, I am red"

let para1 = document.createElement('p');
let container = document.querySelector('body');
para1.innerText = "Hey, I am red.";
container.append(para1);
para1.classList.add('red');


// ques 2. an <h3> with blue text "Hey, I am blue h3"

let heading1 = document.createElement('h3');
heading1.innerText = "Hey, I am blue h3." ;
container.append(heading1);
heading1.classList.add('blue');


// ques 3. a div with black border and pink bd with following element inside it:
// - h1 says "I am in a div"
// - p says "Me Too!"
let newDiv = document.createElement('div');
let heading2 = document.createElement('h1');
let para2 = document.createElement('p');

container.append(newDiv);
newDiv.classList.add('box');

heading2.innerText = "I am in a div";
para2.innerText = "Me Too!"
newDiv.append(heading2);
newDiv.append(para2);