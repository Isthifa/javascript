//Error handling in JavaScript using try...catch


try {
    var a = 10;
    var b = 0;
    var c = a / b;
    console.log(c);
    throw "Error you can't divide by zero";
} catch (e) {
    console.log("Error: " + e);
}

try {
    let x=window.prompt("Enter a number");
    if(isNaN(x)){
        throw "Error: Not a number";
    }
    if(x<5){
        throw "Error: Number is less than 5";
    }
    else{
        console.log("Number is greater than 5");
    }
} catch (e) {
    console.log(e);
}