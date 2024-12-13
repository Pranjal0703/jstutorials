console.log("                                          Favourite Movie      ");
const favourite= "avatar";
let guess = prompt("Guess the Movie");
while((guess!=favourite) && (guess!="quite")){
    guess = prompt("Wrong guess! Please try again");
}

if(guess==favourite){
    console.log("congrats you guessed right");
}
else{
    console.log("you Quite");
}


let i=5;
while(i<=10){
    if(i==8){
        break;
    }
    console.log(i)
    i++;
}

let fruits= ["mango", "apple", "banana", "orange", "litchi"];
for(let j=0; j<fruits.length; j++){
    console.log(j, fruits[j]);
}

let cars= [
    ["BMW", "Farari", "Mercedes"], 
    ["Nexon", "Safari", "Jaguar" ]];
for(i=0; i<cars.length; i++){
    console.log(i, cars[i]);
    for(j=0; j<cars[i].length; j++){
        console.log(j, cars[i][j]);
    }
}


let name = "pranjal";
for(char of name){
    console.log(char);
}


colors= [["red", "orange", "pink"], ["yellow", "green", "blue"]];
for(list of colors){
    for(name of list){
        console.log(name);
    }
}