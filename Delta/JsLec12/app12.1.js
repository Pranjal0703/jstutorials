// Async Functions
// two keywords are there: async and await keyword

// async keyword: async functions are created using the async keywords. Every async function will return promise by default, even if we dont write the statement to return promise.

async function greet() {
    // throw is a keyword used to throw(show) a error 
    throw "some random error";
    return "hello"
}
greet()
.then((result)=>{
    console.log("promise was fulfilled with result: ", result);
})
.catch((error)=> {
    console.log("promise was rejected with error: ", error);
})

// Arrow functions can also be created as async functions:

let demo = async () => {
    return 5;
};