console.log("QUESTION 1:");
let num= 23;
if(num%10==0){
    console.log(`${num} is divisible by 10`);
}
else{
    console.log(`${num} is not divisible by 10`);
}


console.log("QUESTION 2:");
let name= prompt("enter your name");
let age= prompt("enter your age");
alert(`${name} is ${age} years old.`)


console.log("QUESTION 3:");
let month="3";
switch(month){
    case "1":
        console.log("January, February, March");
        break;
    case "2":
        console.log("April, May, June");
        break;
    case "3":
        console.log("July, August, September");
        break;
    case "4":
        console.log("October, November, December");
        break;
    default:
        console.log("Invalid!");
}


console.log("QUESTION 4:");
let str="apple";
if( (str[0]=='a' || str[0]=='A') && (str.length>=5)){
    console.log("Golden String");
}
else{
    console.log("Not a Golden String")
}


console.log("QUESTION 5:");
let a=200;
let b=30;
let c=4;
if(a>b){
    if(a>c){
        console.log(`${a} is largest`);
    }
    else{
        console.log(`${c} is largest`);
    }
}
else{
    if(b>c){
        console.log(`${b} is largest`);
    }
    else{
        console.log(`${c} is largest`)
    }
}


