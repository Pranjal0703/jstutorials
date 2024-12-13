todo = [];

let req = prompt("Enter your choice");

while(true){
    if(req=="quite"){
        console.log("Quitting App");
        break;
    }
    if(req=="list"){
        for(task of todo){
            console.log(task);
        }
    }
    else if(req=="add"){
        let task = prompt("Enter a new task");
        todo.push(task);
        console.log(task);
    }
    else if(req=="delete"){
        let task = prompt("Enter a task you want to remove");
        todo.pop(task);
        console.log(task);
    }
}