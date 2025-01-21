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

 