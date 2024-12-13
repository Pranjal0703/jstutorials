function hello(){
    console.log("hello world");
}
hello();
hello();
hello();

function printNum(){
    for(let i = 1; i<=5; i++){
        console.log(i);
    }
}
printNum();
printNum();

function poem(){
    console.log("Titli udi Bus me chdi");
    console.log("Seat na mili Rone lgi");
    console.log("Driver bola aja mere paas");
    console.log("Titli boli htt bdmsh");  
}
poem();


function dice(){
    let num = Math.floor(Math.random() * 6) + 1;
    console.log(`the number is ${num}`);
}
dice();

function sum(a, b){
    console.log(a + b);
    console.log(a - b);
}
sum(2, 4);
sum(1, 9);

function avg(a, b, c){
    console.log( `avg of ${a}, ${b} & ${c} is ${(a+b+c) /3}`);
}
avg(2,3,4);


function multiplication(n){
    for(let i=1; i<=10; i++){
        console.log(`${n} X ${i} = ${n*i}`);
    }
}
multiplication(2);


function add(n){
    let addition = 0;
    for(let i=1; i<=n; i++){
        sum+=i;
    }
    return addition;
}


let str = ["hello", "hii", "byee"];
function concat(str){
   let result = "";
   for(let i= 0; i<str.length; i++){
    result += str[i];
   }
   return result;
}

plus = 11;
function calc(a, b){
    let plus = a + b;
    console.log(plus);
}
calc(2,4);
console.log(plus);


// {
//     let a = 3;
// }
// console.log(a);

// {
//     const b = 33;
// }
// console.log(b);
// the above commented code will give error because of block scope


{
    var c = 333;
}
console.log(c);


function outerFunc(){
    let x = 5;
    let y = 6;
    function innerFunc(){
        let z = 10;
        console.log(x);
        console.log(y);
    }
    // console.log(a);
    innerFunc();
}

let sumofnum = function(a, b){
    return a + b;
}
sumofnum(2,5);
 

function multipleGreet(func, n){
    for( let i=1; i<=n; i++){
        func();
    }
}

let greet = function(){
    console.log("hello");
}
multipleGreet(greet, 3);


function evenorOdd(request){
    if(request=="odd"){
        let odd = function(n){
            console.log(!(n%2==0));
        }
        return odd;
    }
    else if(request== "even"){
        let even = function(n){
            console.log(n%2==0);
        }
        return even;
    }else{
        console.log("wrong request");
    }
} 
let request= "odd";

