// Results and Errors in Promises
// Whenever the promises are rejected or resolved they store some data that can be valid data or some error.

// we can take an argument in the then(), kyuki jo reslut ayega vo iss agrument ke andr save hoga.

function savetoDb(data) {
    return new Promise((resolve, reject) =>{
        let internetSpeed = Math.floor(Math.random()* 10 + 1);
            if (internetSpeed>4) {
                resolve("hurray! fulfilled");  
            }else{
                reject("Oops! rejected");
            }
    })
    }

    savetoDb("Alien")
    .then((result) =>{
        console.log("result1: ", result);
        console.log("P1 resolved");
        return savetoDb("Penguin");
    })
    .then((result)=>{
        console.log("result2: ", result);
        console.log("P2 resolved");
        return savetoDb("Penguin");
    })
    .catch((error)=>{
        console.log("error:", error);
        console.log("promise rejected");

    })
    
