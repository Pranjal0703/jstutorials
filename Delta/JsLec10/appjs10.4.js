// MORE EVENTS
// 1.) change event: The change occur when the value of an element has been changed (only works on <input<, <textarea< and <select> elements). It only tracks the initial and final value. for example: ek form me username me enter kra abcd toh phele vo initial blank hoga or final change abcd.

let form2 = document.querySelector('.form2');
form2.addEventListener("change", function(event){
    event.preventDefault();
});

let user = document.querySelector('.user');
user.addEventListener("change", function(){
    console.log("Change Event");
    console.log("final value = ", this.value);

})
// 2.) Input event: The input event fires when the value of an <input>, <textarea> or <select> has been cahnged.  This is used to track all the small events. For example: ek form me username me enter kra abcd toh vo ek ek change track krega jaise a thn ab thn abc thn abcd.

user.addEventListener("input", function(){
    console.log("Input Event");
    console.log("final value = ", this.value);

});



// ACTIVITY

let input = document.querySelector('.txt');
let para = document.querySelector('p');

input.addEventListener("input", function(){
    console.log(this.value);
    para.innerText = this.value;
})