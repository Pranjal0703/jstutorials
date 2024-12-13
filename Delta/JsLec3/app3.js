let msg="       HELLO     ";
console.log(`${msg.trim()}`);
console.log(`${msg.toLowerCase()}`);


let password= prompt("enter password");
console.log(`${password.trim()}`);
console.log(`${password}`);
console.log(`${password.toUpperCase()}`);


let name = "pranjal";
console.log(`${name}`);
name.indexOf("j");
console.log(`${name.indexOf("jal")}`);


let str= "     string     ";
console.log(`${str}`);
let newstr= str.trim().toUpperCase();
console.log(`${newstr}`);


let str2= "thisiscode";
console.log(str2);
console.log(str2.slice(6,10));
console.log(str2.slice(2));
console.log(str2.slice(-2));


let str3= "Ilovecoding";
console.log(str3);
console.log(str3.replace("love","do"));
console.log(str3.repeat(4));



console.log("                                          PRACTICE QUESTIONS          ");

let prac1= "     help     ";
console.log(prac1);
console.log(prac1.trim().toUpperCase().repeat(2));


let prac2= "ApnaCollege"
console.log(prac2.slice(4,9));
console.log(prac2.indexOf("na"));
console.log(prac2.replace("Apna", "Our"));
console.log(prac2.slice(4,11).replace("l", "t"));



console.log("ARRAY: linear collection of elements");
let arr= ["Pranjal","Gungun"];
console.log(arr);
console.log(arr[0]);
console.log(arr[0][0]);
console.log(arr[1].length);

let arr2= [1,2,3];
console.log(arr2);

let arr3= ["Pranjal", 21, 83.3];
console.log(arr3);
console.log(arr3.length);

let arr4= [];
console.log(arr4);

let fruits= ["mango", "apple", "litchi"];
console.log(fruits);
fruits[0]= "banana";
console.log(fruits);
fruits[10]="mango";
console.log(fruits);

let cars= ["audi", "mustang", "BMW"];
console.log(cars);
cars.push("safari");
console.log(cars);
cars.pop();
console.log(cars);
cars.unshift("Nexon");
console.log(cars);
cars.shift();
console.log(cars);



console.log("                                          PRACTICE QUESTIONS          ");
let months= ["january", "july", "march", "august"];
console.log(months);
months.shift();
console.log(months);
months.shift();
console.log(months);
months.unshift("june");
console.log(months);
months.unshift("july");
console.log(months);


let color1= ["red", "yellow", "green"];
console.log(color1);
console.log(color1.indexOf("green"));
console.log(color1.indexOf("blue"));
console.log(color1.includes("green"));
console.log(color1.includes("blue"));

let color2= ["blue", "orange", "purple"];
console.log(color2);
console.log(color1.concat(color2));
console.log(color2.reverse());
console.log(color2);
color=color1.concat(color2);
console.log(color);
console.log(color.slice(2,6));
console.log(color);
color.splice(4);
console.log(color);
color.splice(0,1);
console.log(color);
color.splice(0, 0, "black", "white", "grey");
console.log(color);


let array= ["safari","mustang", "gwagon", "nexon"];
array.sort();
console.log(array);



console.log("                                          PRACTICE QUESTIONS          ");
let Months= ["january", "july", "march", "august"];
console.log(Months);
Months.splice(0,2, "july", "june");
console.log(Months);

let lang= ["c","c++","html","javascript","python","java","c#","sql"];
console.log(lang);
console.log(lang.reverse().indexOf("javascript"));
console.log(lang);

console.log("                                          PRACTICE QUESTIONS          ");
let tictactoe= [ ['x', null, 'o'], [null, 'x', null], ['o', null, 'x'] ];
console.log(tictactoe);



