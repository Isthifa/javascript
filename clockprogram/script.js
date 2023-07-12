//Date and Time object in JavaScript 


let date = new Date();
let currentTIme = date.toLocaleTimeString();
function refreshTime()
{
    date = new Date();
    currentTIme = date.toLocaleTimeString();
    document.getElementById("timedata").innerHTML = currentTIme;
}
setInterval(refreshTime,1000);