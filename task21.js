//lexical scope is the scope of a variable defined outside of a function
//global scope is the scope of a variable defined outside of a function
//block scope is the scope of a variable defined inside of a function
//function scope is the scope of a variable defined inside of a function
//lexical scope is the scope of a variable defined outside of a function

let globalVariable = 5;
function mydata(){
    console.log(globalVariable);
    let functionVariable = 4;
    console.log(functionVariable);
    const insideFunction=()=>{
        console.log(globalVariable+1);
        console.log(functionVariable-1);
    }
    insideFunction();
}
mydata();
// console.log(functionVariable);


//javascript prototypes

const person={
    alive:true
}
const musician={
    plays:true
}

musician.__proto__=person;
console.log(musician.alive);
console.log(musician.plays);
console.log(musician);
// person.__proto__=musician;
// console.log(person.alive);
// console.log(person.plays);

//prototypes are used to inherit properties from one object to another
//object.setPrototypeOf(objectToChange,objectToInheritFrom)
//eg:-
const person1={
    alive:true
}
const musician1={
    plays:true
}
Object.setPrototypeOf(musician1,person1);
console.log(musician1.alive);
console.log(musician1.plays);
console.log(musician1);
//decorators in javascript
//decorators are used to add extra functionality to a function
//eg:-
function decoratorFunction(originalFunction){
    function wrapperFunction(){
        console.log("wrapper function executed before original function");
        originalFunction();
    }
    return wrapperFunction;
}
function display(){
    console.log("original function executed");
}
let decoratedFunction=decoratorFunction(display);
decoratedFunction();
//or
display=decoratorFunction(display);
display();
//currying in javascript
//currying is a technique of evaluating function with multiple arguments into sequence of functions with single argument
//eg:-
function multiply(a,b){
    return a*b;
}
console.log(multiply(2,3));
//or
function multiply(a){
    return function(b){
        return a*b;
    }
}
console.log(multiply(2)(3));
//or
let multiply1=(a)=>(b)=>a*b;
console.log(multiply1(2)(3));
//or

let multiply2=(a,b)=>a*b;
console.log(multiply2(2,3));

//sallow copy and deep copy
//sallow copy is a bit wise copy of an object
//deep copy is a copy of an object that also copies all nested objects
//eg:-
let obj1={
    name:"sai",
    age:20,
    address:{
        city:"hyderabad",
        state:"telangana"
    }
}
let obj2=Object.assign({},obj1);    
console.log(obj1);
console.log(obj2);
obj1.name="sai kumar";
obj1.address.city="secunderabad";
console.log(obj1);
console.log(obj2);
//or
let obj3={
    name:"sai",
    age:20,
    address:{
        city:"hyderabad",
        state:"telangana"
    }
}
let obj4=JSON.parse(JSON.stringify(obj3));
console.log(obj3);
console.log(obj4);
obj3.name="sai kumar";
obj3.address.city="secunderabad";
console.log(obj3);
console.log(obj4);
//sallow copy
//eg:-
let obj5={
    name:"sai",
    age:20,
    address:{
        city:"hyderabad",
        state:"telangana"
    }
}
let obj6=obj5;
console.log(obj5);

console.log(obj6);

//deep copy
//eg:-
let obj7={
    name:"sai",
    age:20,
    address:{
        city:"hyderabad",
        state:"telangana"
    }
}
let obj8=JSON.parse(JSON.stringify(obj7));
console.log(obj7);
console.log(obj8);

//pure functions
//pure functions are functions that accept an input and returns a value without modifying any data outside its scope
//eg:-
let num=10;
function square(num){
    return num*num;
}
console.log(square(num));
console.log(num);
// pure function should have the following properties
// 1)it should not modify any data outside its scope
// 2)it should not have any side effects
// 3)it should return a value or another function
// 4)it should not throw an exception
// 5)it should not mutate the parameters passed to it
// 6)it should not call an api or a database

//impure functions
//impure functions are functions that accept an input and returns a value with modifying any data outside its scope
//eg:-
let num1=10;
function square1(){
    num1=20;
    return num1*num1;
}
console.log(square1());
console.log(num1);

//=== is used to check the value and type of the variable
//== is used to check the value of the variable
//eg:-
console.log(1==1);
console.log(1=="1");
console.log(1===1);
console.log(1==="1");
//IIFE is a function that is executed right after it is created
//IIFE is used to avoid variable hoisting from within blocks
//IIFE meaning is immediately invoked function expression
//eg:-
(()=>{
    console.log("IIFE executed");
}
)();
//or
(function(){
    console.log("IIFE executed");
}
);
//or
(()=>{
    console.log("IIFE executed");
}
);


//hoisting is a mechanism where variables and function declarations are moved to the top of their scope before code execution
//eg:-
console.log(name);
var name="sai";

//... is used to spread the elements of an array or object
//eg:-
let arr=[1,2,3,4,5];
console.log(...arr);
let obj={
    name:"sai",
    age:20
}
console.log(...obj["name"]);

//rest operator is used to merge a list of function arguments into an array
//eg:-
function sum(...args){
    console.log(args);
}
sum(1,2,3,4,5);
//pipe function is used to perform left to right function composition
//eg:-
const pipe=(...functions)=>(value)=>functions.reduce((currentValue,currentFunction)=>currentFunction(currentValue),value);
const multiplyBy2=(num)=>num*2;
const add5=(num)=>num+5;
const multiplyBy3=(num)=>num*3;
const add10=(num)=>num+10;
const multiplyBy5=(num)=>num*5;
const add20=(num)=>num+20;
console.log(pipe(multiplyBy2,add5,multiplyBy3,add10,multiplyBy5,add20)(5));
//compose function is used to perform right to left function composition

//debounce function is used to limit the rate at which a function can fire
//eg:-
const debounce=(func,delay)=>{
    let debounceTimer;
    return function(){
        const context=this;
        const args=arguments;
        clearTimeout(debounceTimer);
        debounceTimer=setTimeout(()=>func.apply(context,args),delay);
    }
}
const add=(a,b)=>console.log(a+b);
const debounceAdd=debounce(add,300);
debounceAdd(2,3);

//throttle function is used to limit the rate at which a function can fire
//eg:-
const throttle=(func,limit)=>{
    let flag=true;
    return function(){
        const context=this;
        const args=arguments;
        if(flag){
            func.apply(context,args);
            flag=false;
            setTimeout(()=>{
                flag=true;
            },limit);
        }
    }
}
const add1=(a,b)=>console.log(a+b);
const throttleAdd=throttle(add1,300);
throttleAdd(2,3);
throttleAdd(4,5);
throttleAdd(6,7);


