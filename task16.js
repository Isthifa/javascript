// let count=0;
// let max=window.prompt("Count up to what number?");
// const mytimer=setInterval(countUp,1000);
// function countUp(){
//     count+=1;
//     console.log(count);
//     if(count>=max){
//         clearInterval(mytimer);
//     }
// }

//setInterval() method executes a function, over and over again, at specified time intervals.

//setTimeout() method executes a function, once, after waiting a specified number of milliseconds.

setTimeout(firstmessage,1000);
setTimeout(secondmessage,3000);
setTimeout(thirdmessage,9000);
function firstmessage(){
    alert("This is the first message");
}
function secondmessage(){
    alert("This is the second message");
}
function thirdmessage(){
    alert("This is the third message");
}