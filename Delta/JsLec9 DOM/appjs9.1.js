// Selecting element by id
console.dir(document.getElementById('description'));

// selecting element by class
console.dir(document.getElementsByClassName('oldImg'));

// selecting element by tag
console.dir(document.getElementsByTagName('p'));

// queryselector returns single value
console.dir(document.querySelector('h1'));
console.dir(document.querySelector('#description'));
console.dir(document.querySelector('.oldImg'));
console.dir(document.querySelector('.box a'));

// queryselectorall returns multiple value

console.dir(document.querySelectorAll('.box a'));


// SETTING CONTENT IN OBJECTS
// innerText: shows only text that is visible on the screen to the user
// textContent: shows all the text including hidden text also(the text that is set as displayed none.) It will display the text in the same way we have written in the html that means it will include spaces and line breaks.
// innerHtml: shows HTML markup(which tags are used in the text)
let para = document.querySelector('p');
console.dir(para);
console.dir(para.innerText);
console.dir(para.textContent);
console.dir(para.innerHTML);

// para.innerText = "Hi, I am <b> Peter Parker</b>"; In this the <b> tag will work as a text instead of tag.
// para.innerHTML = "Hi, I am <b> Peter Parker</b>"; In this <b> tag will make the text bold.
// para.innerHTML = `<u>${para.innerText}</u>`; More efficient way of prerforming the above task.


// MANIPULATING ATTRIBUTES
// attributes are class, id, style, src. There are two methods for changing these attributes:
// 1. obj.getAttribute(attr): ye ek specific attribute kya value set h vo batata h
// 2. obj.setAttribute(attr,val): used to change the value of an attribute
// these are called getters and setters. It is a set of two fuctions via which we can get and set the values.
let image = document.querySelector('img'); 
console.log(image);
console.log(image.getAttribute("id")); //isse kisi bhi element ka attribute pta lgta h
console.log(image.setAttribute("id", "spriderman")); //isse kisi bhi element ke attribute ko change kr skte h or nya attribute add bhi kr skte h(means uski id, class, src ko)


// MANIPULATING STYLING

// To change the styling of any elememt: obj.style  
// In JS cammel case is used eg. backgroundColor
// style property will only show the css that is written inline
let heading = document.querySelector('h1');
console.dir(heading.style);
heading.style.color = 'purple';
heading.style.backgroundColor = 'yellow';

let links = document.querySelectorAll(".box a");
for(link of links){
    link.style.color ='red';
} 


// classList

// used to set the value of a class
// obj.classList - to check the list of classes given to an object
// classList.add() - to add new classes
// classList.remove() - to remove classes
// classList.contain() - to check if class exist
// classList.toggle() - to toggle bw add and remove(just like a switch at home) This methods check if a class already exists or not. If a class exists it will remove that class and if the class does not exists it will add the class.

let images = document.querySelector('img');
console.log(images.classList);

images.classList.add("newClass");
console.log(images.classList);

images.classList.remove("mainImg1");
console.log(images.classList);  

images.classList.contains("mainImg1");
console.log(images.classList);

images.classList.toggle("mainImg1");
console.log(images.classList);


// NAVIGATION PROPERTY (NAVIGATION ON PAGE)
// there are 3 properties in navigation:
// 1. parentElement
// 2. children
// 3. previousElemntSibling / nextElementSibling

// this property is used to check the parent of an element, children of an element and sibling of an element(next or previous)  

let headings = document.querySelector('h4');
console.log(headings.parentElement);
console.log(headings.children);
console.log(headings.previousElementSibling);
console.log(headings.nextElementSibling);


// ADDING ELEMENTS ON PAGE

// To craeta an element we use : document.createElement('p');

// document.createElement('p');
let newP = document.createElement('p');

newP.innerText = "Hii, I am a new P inserted usinf appendCHild function. ";

// To insert an element into the page:

// 1.) appendChild(element): to insert an element in an obeject in a nesting form (eg. to insert an element in the body tag this method will be used):
let box = document.querySelector('.box');
box.appendChild(newP);

// 2.) append(element): to append element, string or text. In this we can add some text or string in a already appendded element:
newP.append("this is added text using the append function");

// 3.) prepend(element): to insert an element at the starting:
box.prepend(newP);

// 4.) insertAdjacentElement(where, element): In this we can define where exactly we want to add a new element and which element we want to add):
let parag = document.querySelector('p');

// 'beforebegin': Before the targetElement itself.(When we want to add the new elemnt just before the targeted element)
let btn1 = document.createElement('button');
btn1.innerText = "button1 - beforebegin";
para.insertAdjacentElement('beforebegin', btn1);

// 'afterbegin': Just inside the targetElement, before its first child.
let btn2 = document.createElement('button');
btn2.innerText = "button2 - afterbegin";
para.insertAdjacentElement('afterbegin', btn2);

// 'beforeend': Just inside the targetElement, after its last child.
let btn3 = document.createElement('button');
btn3.innerText = "button3 - beforeend";
para.insertAdjacentElement('beforeend', btn3);

// 'afterend': After the targetElement itself.
let btn4 = document.createElement('button');
btn4.innerText = "button4 - afterend";
para.insertAdjacentElement('afterend', btn4);


// REMOVING ELEMENT: To remove an element from the page
let newBtnrc = document.createElement('button');
newBtnrc.innerText = "button - removed using removeChild()";
let btnbox1 = document.querySelector('.box');
btnbox1.appendChild(newBtnrc);

// removeChild(element): acts similar to the appendChild function
btnbox1.removeChild(newBtnrc);

// remove(element): acts similarly to the append function( mostly used)
let newBtnr = document.createElement('button');
newBtnr.innerText = "button - removed using remove()";
let btnbox2 = document.querySelector('.box');
btnbox2.appendChild(newBtnr);

newBtnr.remove();