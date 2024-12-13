console.log("                                          For Loop       ");
for(let i=1; i<=20; i++){
    console.log(i);
}

for(let i=1; i<=15; i=i+2){
    console.log(i);
}

let n= prompt("enter a number");
n=parseInt(n);
for(let c=n; c<=n*10; c=c+n){
    console.log(c);
}

console.log("                                         Nested For Loop       ");
for(let i=1; i<=3; i++){
    console.log(`outer loop ${i}`);
    for(let j=1; j<=4; j++){
        console.log(j);
    }
}

console.log("                                          While Loop       ");
let i = 0;
while(i<=5){
    console.log(i);
    i++;
}


