// Promises
// The Promise object represents the eventual completion or failture of an asynchronous operation and its resulting value.(promises are object in the js). In simple words promises are the objects which shows the success or the failture of the asynchronous operation and stores the resulting value.(asynchronous means something that is dependent on other thing like in below example savetoDb funct is dependent on the internetSpeed).

// example: Imagine this function is going to store our data to the database

function savetoDb(data, success, failture) {
    let internetSpeed = Math.floor(Math.random() * 10 + 1);
    console.log(internetSpeed);
    if(internetSpeed>4){
        success();
    }else{
       failture();
    }   
}

// This is a much complex callback hell
savetoDb("Alien", ()=>{
    console.log("Success1: Data1 saved to database");
    savetoDb("Penguin", ()=>{
        console.log("Success2: Data2 saved to database");
    }, ()=>{
        console.log("Fail: Weak connection, data not saved");
    });
    savetoDb("Pookie", ()=>{
        console.log("Success3: Data3 saved to database");
    }, ()=>{
        console.log("Fail: Weak connection, data not saved");
    })
}, ()=>{
     console.log("Fail: Weak connection, data not saved");
});

// To write this code in a better way is in app.11.4
