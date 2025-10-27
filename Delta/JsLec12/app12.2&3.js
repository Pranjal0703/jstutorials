// Await function:
// pauses the execution of its surrounding async fucntions until the promise is settled(resolved or rejected).
// await keywords can only be used inside the async functions

function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
             let num = Math.floor(Math.random() * 10 +1);
            console.log(num);
            resolve();
        }, 1000)
       
    });   
}

 async function demo() {
    // here if we don't use the await keyword then all the numbers will be printed at the same time but with await each number will print after 1 sec.
    await getNum();
    await getNum();
    getNum();
}


// Handling Errors with Await

let h1 = document.querySelector('h1');

function changeColor(color){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random() *5) + 1;
            if (num > 3) {
                reject("promise rejected");
            }

            h1.style.color = color;
            console.log("color changed to: ", color);
            resolve("color changed");
        }, 1000)
    });
}


async function demo() {
    try{
    await changeColor("red");
    await changeColor("orange");
    await changeColor("yellow");
    await changeColor("green");
    await changeColor("blue");
    } catch(error){
        console.log("error caught: ", error);
    }
   

    let a = 5;
    console.log(a);
    console.log("new num: ", a+2);
}

// changeColor("red", 1000)
// .then((result)=>{
//     console.log("color changed to red", result);
//     return changeColor("orange", 1000);
// })
// .then((result)=>{
//     console.log("color changed to orange", result);
//      return changeColor("green", 1000);
// })
// .then((result)=>{
//     console.log("color changed to green", result);
//     return changeColor("blue", 1000);
// })
// .then((result)=>{
//     console.log("color changed to blue", result);
//     return changeColor("purple", 1000);
// })
// .then((result)=>{
//     console.log("color changed to purple", result);
// })