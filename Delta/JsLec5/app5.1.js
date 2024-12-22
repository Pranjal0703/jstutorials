let students= {
    name: "pranjal",
    age: 21,
    marks: 85,
    city: "Delhi"
};
console.log(students);

const post= {
    username: "@pranjal",
    content: "This is my #firstpost",
    likes: 150,
    repost: 5,
};
console.log(post);

const student= {
    name: "Pranjal",
    age: 21,
    marks: 83,
    city: "Delhi"
};
console.log(student);

student.city= "Mumbai";
console.log(student);

student.gender= "Female";
console.log(student);

student.marks= "A";
console.log(student);

delete student.gender;
console.log(student);


const ClassInfo = {
    Pranjal: {
        grade: "A",
        city: "Delhi"
    },
    Khushi: {
        grade: "A",
        city: "Delhi"
    },
    Bhawna: {
        grade: "A",
        city: "Mumbai"
    },
};
console.log(ClassInfo);


const Class= [
    {
        name: "Pranjal",
        marks: "A",
        city: "Delhi"
    },

    {
        name: "Khushi",
        marks: "A",
        city: "Delhi"
    },

    {
        name: "Bhawna",
        marks: "A",
        city: "Mumbai"
    }
];
console.log(Class);

let num = Math.random();
console.log(num);
num = num*10;
console.log(num);
num = Math.floor(num);
console.log(num);
num += 1;
console.log(num);


let num1= Math.random();
num1= num1*100;
num1 = Math.floor(num1);
num1 += 1 ;
console.log(num1);


let num2= Math.random();
num2= num2*5;
num2 = Math.floor(num2);
num2 += 1 ;
console.log(num2);



console.log("******************************************Guessing The Number Game***************************");

let max = prompt("Enter Maximum Number");
const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("Enter a Number: ");

while(true){
    if(guess=="quit"){
        console.log("you quit the game");
    }
    else if(guess== random){
        console.log("Congrats! You Guessed Right");
        break;
    }
    else if(guess < random){
        guess = prompt("Hint: Your Guess is too small! Try Again: ");
    }
    else{
        guess = prompt("Hint: Your Guess is too big! Try Again: ");
    }
}