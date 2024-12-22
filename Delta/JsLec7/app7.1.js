const student ={
    name: "Pranjal",
    age: 21,
    eng: 88,
    java: 70,
    python: 79,
    avg(){
        return (this.eng + this.java + this.python)/3; 
    }

};
console.log(student.avg());


console.log("hello1");
try{
    console.log(a);
}
catch{
    console.log("error caught");
}

console.log("hello1");

const sum = (a, b) =>{
    console.log(a + b);
}
sum(1 , 2);