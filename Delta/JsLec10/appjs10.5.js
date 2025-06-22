// when we create bhot saare event listeners for the bhot saare nested elements toh this is called enent bubbling.

let box = document.querySelector('div');
let unorder = document.querySelector('ul');
let lists = document.querySelectorAll('li');

box.addEventListener("click", function(){
    console.log("div was clicked");
});

unorder.addEventListener("click", function(){
    console.log("ul was clicked");
});

for(list of lists){
    list.addEventListener("click", function(event){
        console.log("list was clicked");
        // method to prevent event bubbling:
        event.stopPropagation();
    });
}

// when we click a nested element then vo uske parent element ko bhi trigger krega mtlb uspr jo event listener add hua h vo bhi occur hoga.
// To prevent this event bubbling an event method is there that is : "stopPropagation"