
//multiply
function multiply(a, b){
    return a * b
  }
//even or odd
function evenOrOdd(num){
    if(num%2==0){
        return "even";
    }
    else{
        return "odd";
    }
}
//sum of positive numbers
function sumOfPositiveNumbers(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            sum+=arr[i];
        }
    }
    return sum;
}
//remove first and last character
function removeFirstAndLastCharacter(str){
    let newStr="";
    for(let i=1;i<str.length-1;i++){
        newStr+=str[i];
    }
    return newStr;
}
//get element by id
function getElementById(id){
        var name;
        switch(id){
          case 1:
            name = 'Mercury'
            break;
          case 2:
            name = 'Venus'
            break;
          case 3:
            name = 'Earth'
            break;
          case 4:
            name = 'Mars'
            break;
          case 5:
            name = 'Jupiter'
            break;
          case 6:
            name = 'Saturn'
            break;
          case 7:
            name = 'Uranus'
            break;
          case 8:
            name = 'Neptune'
            break;
        }  
        return name;
    }
//reversed string
function reversedString(str){
    let newStr="";
    for(let i=str.length-1;i>=0;i--){
        newStr+=str[i];
    }
    return newStr;
}
//vowel count
function vowelCount(str){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
            count++;
        }
    }
    return count;
}
//Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.
function greet(name){
    if(name=="Johnny"){
        return "Hello, my love!";
    }
    else{
        return "Hello, "+name+"!";
    }
}

//is n divisible by x and y
function isDivisible(n, x, y) {
    if(n%x==0&&n%y==0){
        return true;
    }
    else{
        return false;
    }
}
//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
function makeNegative(num) {
    if(num<0){
        return num;
    }
    else{
        return -num;
    }
}
//Find the smallest integer in the array
class SmallestIntegerFinder {
    findSmallestInt(args) {
      let min=args[0];
      for(let i=1;i<args.length;i++){
          if(args[i]<min){
              min=args[i];
          }
      }
      return min;
    }
}
//Grasshopper - Summation
var summation = function (num) {
    let sum=0;
    for(let i=1;i<=num;i++){
        sum+=i;
    }
    return sum;
}
//Get the mean of an array
function getAverage(marks){
    let sum=0;
    for(let i=0;i<marks.length;i++){
        sum+=marks[i];
    }
    return Math.floor(sum/marks.length);
}
//Counting sheep...
function countSheeps(arrayOfSheep) {
    let count=0;
    for(let i=0;i<arrayOfSheep.length;i++){
        if(arrayOfSheep[i]==true){
            count++;
        }
    }
    return count;
}
//Remove String Spaces
function noSpace(x){
    let newStr="";
    for(let i=0;i<x.length;i++){
        if(x[i]!=" "){
            newStr+=x[i];
        }
    }
    return newStr;
}
//string repeat
function repeatStr (n, s) {
    let newStr="";
    for(let i=0;i<n;i++){
        newStr+=s;
    }
    return newStr;
}
//Cat years, Dog years
var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears=0;
    let dogYears=0;
    if(humanYears==1){
        catYears=15;
        dogYears=15;
    }
    else if(humanYears==2){
        catYears=24;
        dogYears=24;
    }
    else{
        catYears=24+(humanYears-2)*4;
        dogYears=24+(humanYears-2)*5;
    }
    return [humanYears,catYears,dogYears];
}
//convert string to array
function stringToArray(string){
    let arr=[];
    let str="";
    for(let i=0;i<string.length;i++){
        if(string[i]!=" "){
            str+=string[i];
        }
        else{
            arr.push(str);
            str="";
        }
    }
    arr.push(str);
    return arr;
}
//is he gonna survive
function hero(bullets, dragons){
    if(bullets>=dragons*2){
        return true;
    }
    else{
        return false;
    }
}
//rock paper scissors
const rps = (p1, p2) => {
    if(p1==p2){
        return "Draw!";
    }
    else if(p1=="rock"&&p2=="scissors"||p1=="scissors"&&p2=="paper"||p1=="paper"&&p2=="rock"){
        return "Player 1 won!";
    }
    else{
        return "Player 2 won!";
    }
}

//array plus array
function arrayPlusArray(arr1, arr2) {
    let sum=0;
    for(let i=0;i<arr1.length;i++){
        sum+=arr1[i];
    }
    for(let i=0;i<arr2.length;i++){
        sum+=arr2[i];
    }
    return sum;
}
//total amount of points
function points(games) {
    let sum=0;
    for(let i=0;i<games.length;i++){
        let x=games[i][0];
        let y=games[i][2];
        if(x>y){
            sum+=3;
        }
        else if(x==y){
            sum+=1;
        }
    }
    return sum;
}
//begineer lost without a map
function maps(x){
    let arr=[];
    for(let i=0;i<x.length;i++){
        arr.push(x[i]*2);
    }
    return arr;
}
//basic mathematical operations
function basicOp(operation, value1, value2)
{
    if(operation=='+'){
        return value1+value2;
    }
    else if(operation=='-'){
        return value1-value2;
    }
    else if(operation=='*'){
        return value1*value2;
    }
    else{
        return value1/value2;
    }
}
//century from year
function century(year) {
    if(year%100==0){
        return year/100;
    }
    else{
        return Math.floor(year/100)+1;
    }
}
//math floor is used to round down to the nearest integer 









