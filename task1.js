//type conversion
let age=window.prompt("Enter your age");
console.log(typeof(age));
age=Number(age);
age=age+1;
console.log(typeof(age));

let x;
let y;
let z;
x=Number("3.13");
y=String(3.14);
z=Boolean(0);
console.log(x);
console.log(typeof(y));
console.log(z);