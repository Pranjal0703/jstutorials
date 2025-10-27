// Call Stack : Here call meand calling a function and stack is a data structure, that uses LIFO principle. All these calls are stored in a stack

// In simple, call stack is a data structure jo track krta h konse function ki abhi call chl rhi h

function hello(){
    console.log("inside hello func");
    console.log("hello");
}

function demo() {
    console.log("calling hello func");
    hello();
    
}

console.log("calling demo func");
demo();
console.log("DONE!");


// VISUALIZING CALL STACK //
function one(){
    console.log("start");
    return 1;
}

function two(){
    console.log("one fuct called");
    return one() + one();
}

function three(){
    console.log("two and one fuct called");
    let ans = two() + one();
    console.log(ans);
}

console.log("three fuct called");
three();

// BREAKPOINTS //
// It is used to debug a code. We can see the call stacks on browser throgh breakpoints.
 

// JS is Single Threaded 
// programming languages are of two types: single threaded and multi threaded. JavaScript is a single threaded lannguage that means only a one single thing in a code can be executed at a time(Ek code me ek time prr ek hi cheeze execute ho payegi). 
// But sometimes in a website there is multiple tasks that cxan't be done in a sequence, For example: We have a code in which we have to take input from the user and storing it to the database but the database is taking too much time to store that info. So in this situation will javascript wait for the database to store the info or will it perform next tasks? For dealing with this there are :
// ******CALLBACKS******: Callbacks are the type of fuctions that works as an argument in some other function. 

// ******SETTIMEOUT****** 
setTimeout(()=> {
    console.log("Pookie");
}, 2000);
setTimeout(()=> {
    console.log("Alien");
}, 2000);
console.log("Hello...");

// Here are 2 timeout functions these are performing at the same time even the js is single threaded. This is because these settimeout function is performed by the browser, jitna delay timeout funct me mention hua utne time ke liye browser settimeout store krega jaise hi delay time pura hoga browser settimeout wale code ko call stack me daal dega then js usko