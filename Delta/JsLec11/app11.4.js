// Promise me 2 cheeze hoti h resolve and reject. In below example success callback is resolve and failture callback is reject.

// In this function instead of taking callbacks like success and failture we will return the promise object from the asynchronous function that means (function ab kaam krane ki jgh ek object return kr dega )

// function savetoDb(data, success, failture) {
//     let internetSpeed = Math.floor(Math.random() * 10 + 1);
//     console.log(internetSpeed);
//     if(internetSpeed>4){
//         success();
//     }else{
//        failture();
//     }   
// }

function savetoDb(data) {
    return new Promise((resolve, reject) => {
        // Here we have created a callback with success and failture
        let internetSpeed = Math.floor(Math.random() * 10 + 1);
        console.log(internetSpeed);
        if (internetSpeed>4){
            resolve("Success! Data saved");
        } else{
            reject("Failure! Week connection ");
        }
    }) 
}

// There are multiple states of a promise, which are: pending, rejected, fulfilled.

// savetoDb("hello"); This is called in the console window

// As Promise is an object so it has diff methods:
// then() & catch()
// If promise is resolves(fulfilled), then method will work and if promise is rejected, catch method will work.


savetoDb("Alien")
.then(() =>{
    console.log("Data 1 saved, promise is resolved");
    // promise chaining
   return savetoDb("Penguin");
})
.then(()=>{
    console.log("Data 2 saved, promise is resolved");
    return savetoDb("Pookie");
})
.then(()=>{
    console.log("data 3 saved, promise is resolved")
})

.catch(()=>{
    console.log("some promise rejected"); 
})
