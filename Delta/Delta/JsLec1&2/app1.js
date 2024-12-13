console.log("Hello World!");
console.log("Pranjal");
let a= 2;
let b= 3;
let sum = a+b;
console.log("sum is:", sum);

let pencilprice = 10;
let erasorprice = 10;
// let totalPrice = "total price is " +(pencilprice + erasorprice) + " rupees";
let totalPrice = `total price is ${pencilprice + erasorprice} rupees`;
console.log(totalPrice); 

let age =18;
console.log(age>16);
console.log(age>20);
console.log(age==18);
console.log(age!=18);

n=3;
str='3';
console.log(`5==='5' ${n===str}`);


console.log(`some code before if`);
let Age=20;
if(Age<18){
    console.log("not eligible for vote");
}
console.log(`some code after if`);


console.log("Welcome to Traffic Light System");
let clr= "red";
if (clr == "red"){
    console.log("Stop");
}
if (clr == "yellow"){
    console.log("Slow down");
}
if (clr == "green"){
    console.log("You can Go!");
}
console.log("Thank You");


console.log("Welcome to Traffic Light System");
let Clr= "green";
if (Clr == "red"){
    console.log("Stop");
}
else if (Clr == "yellow"){
    console.log("Slow down");
}
else if (Clr == "green"){
    console.log("You can Go!");
}
console.log("Thank You");

console.log("Welcome to Popcorn Mania");
let size= "S";
if(size == "XL"){
    console.log("XL: Rs.250");
}
else if(size == "L"){
    console.log("L: Rs.200");
}
else if(size == "M"){
    console.log("M: Rs.100");
}
else{
    console.log("S: Rs.50");
}

console.log("RESULT IS OUT!!");
let marks = 75 ;
if (marks >=33){
    console.log("Pass");
    if (marks >=80){
        console.log("Grade: O");
    }
    else {
        console.log("Grade: A");
    }
}
else{
    console.log("Better Luck Next Time!")
}


let strng= "apple";
if((strng[0]==="a") && (strng.length>3)){
    console.log("It is a good string");
}
else{
    console.log("not a good string");
}


console.log("Traffic light using switch statement");
let color= "yellow";
switch (color) {
    case "red":
        console.log("stoppp");
        break;
    case "yellow":
        console.log("waittt");
        break;
    case "green":
        console.log("Gooo");
        break;
    default:
        console.log("broken light");
}


console.log("WEEK DAYS");
let day="3";
switch(day){
    case "1":
        console.log("Monday");
        break;
    case "2":
        console.log("Tuesday");
        break;
    case "3":
        console.log("Wednesday");
        break;
    case "4":
        console.log("Thursday");
        break;
    case "5":
        console.log("Friday");
        break;
    case "6":
        console.log("Saturday");
        break;
    case "7":
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Number");    
}

alert("danger");

let name= prompt("enter your name");
console.log(name);

