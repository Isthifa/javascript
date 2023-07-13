const element = document.getElementById("mybtn");
element.onclick = function() {
    alert("Hello World!");
}

const element2 = document.getElementById("mydiv");
element2.onmouseover=changeColor;
element2.onmouseout=()=>{element2.style.backgroundColor = "yellow";};

function changeColor() {
    element2.style.backgroundColor = "red";
}

//onload change background color
const ele=document.getElementById("loading");
function doSomething() {
    ele.style.display = "none";
}

