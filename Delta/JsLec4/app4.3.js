// Write a JS program to delete all occurrences of element ‘num’ in a given array. Example:if arr =[1,2,3,4,5,6,2,3] &num=2

let arr =[1,2,3,4,5,6,2,3];
let num = 2;
for(let i=1; i<arr.length; i++){
    arr.splice(i, 1);
    
}

console.log(arr);