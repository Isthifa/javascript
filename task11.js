//arrow function = compact way of writing a function in javascript
//arrow function = anonymous function
//arrow function = function without name
//arrow function = function without function keyword
//arrow function = function with => operator

const greeting=function(username){
    console.log(`Hello ${username}`);
}

greeting('John');

//using arrow function
const greet=(username)=>
    console.log(`Hello ${username}`);
greet('John');

//persentage of arrow function
const percentage=(marks,total)=> marks/total*100;

console.log(`${percentage(70,150)}%`);

let grades=[10,30,499,50,60,70,80,90,100,1000,10000,100000];
grades.sort((a,b)=>b-a
);
grades.forEach(element=>console.log(element));