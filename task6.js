// switch statement that executes a different statement depending on the value of a variable.
// The switch statement evaluates an expression. The value of the expression is then compared with the values of each case in the structure. If there is a match, the associated block of code is executed.
let grade=window.prompt("Enter your grade");
let c=Number(grade);
switch(true){
    case c>=90:
        console.log('Excellent');
        break;
    case c>=80:
        console.log('Good');
        break;
    case c>=70:
        console.log('Average');
        break;
    case c>=60:
        console.log('Poor');
        break;
    default:
        console.log('Invalid grade');
}