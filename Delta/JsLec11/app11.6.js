let h1 = document.querySelector('h1');

function changeColor(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("color changed");
        }, delay)
    });
}

changeColor("red", 1000)
.then((result)=>{
    console.log("color changed to red", result);
    return changeColor("orange", 1000);
})
.then((result)=>{
    console.log("color changed to orange", result);
     return changeColor("green", 1000);
})
.then((result)=>{
    console.log("color changed to green", result);
    return changeColor("blue", 1000);
})
.then((result)=>{
    console.log("color changed to blue", result);
    return changeColor("purple", 1000);
})
.then((result)=>{
    console.log("color changed to purple", result);
})