//constant variable cannot be changed
const pi=3.14; //constant variable pi is declared cannot be changed
let radius;
let circumference;
console.log(pi);
radius=window.prompt("Enter radius of circle");
radius=Number(radius);
// pi=43434; //variable pi is changed
circumference=2*pi*radius;
console.log(circumference);
