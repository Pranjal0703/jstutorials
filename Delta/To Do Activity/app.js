let btn = document.querySelector('button');
let inp = document.querySelector('input');
let listSet = document.querySelector('ul');

btn.addEventListener("click",function(){
    console.log("button was clicked");
 
    let item = document.createElement('li');
    item.innerText = inp.value;

    if(item.innerText== ""){
        alert("Enter a task");
    }else{
        let dltBtn = document.createElement('button');
        dltBtn.innerText = "Delete";
        dltBtn.classList.add('delete');


        item.appendChild(dltBtn);
        listSet.appendChild(item);
        
        inp.value = "";
    
    }
});

listSet.addEventListener("click", function(event){
    // event.target property shows what was the target of thet event means iss event ko perform krne ke ;iye konsa element target(click) hua h jaise list click hui ya button.
    console.log(event.target.nodeName); 

    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        console.log(listItem);
        listItem.remove();
    console.log("delete");
    }
    
})



// But the problem here is that this added event listener for delete button will only work on the buttons that are created in the html file. So the items added with the js will not be detele for that we have to use "event delegation"

// EVENT DELEGATION:  It is a phenomena in programming in which we will use the bubbling property. For that we will add the same event listener for the parent element instead of child element.
