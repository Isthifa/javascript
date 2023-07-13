//diffrent types of events
//onclick
//onmouseover
//onmouseout
//onload
//onchange
//onsubmit
//onfocus
//onblur
//ondblclick
//onkeydown
//onkeypress
//onkeyup
//onresize
//onscroll
//onselect
//onunload
//onerror
//oncontextmenu
//oninput
//oninvalid


// const element = document.getElementById("mybtn");
// element.onclick = function() {
//     alert("Hello World!");
// }

// const element2 = document.getElementById("mydiv");
// element2.onmouseover=changeColor;
// element2.onmouseout=()=>{element2.style.backgroundColor = "yellow";};

// function changeColor() {
//     element2.style.backgroundColor = "red";
// }

// //onload change background color
// const ele=document.getElementById("loading");
// function doSomething() {
//     ele.style.display = "none";
// }

//add event listener
// const innerdiv=document.getElementById("innerdiv");
// innerdiv.addEventListener("mouseover",()=>{innerdiv.style.backgroundColor="yellow";});
// innerdiv.addEventListener("mouseout",()=>{innerdiv.style.backgroundColor="blue";});


// const innerdiv=document.getElementById("innerdiv");
// const outerdiv=document.getElementById("outerdiv");
// innerdiv.addEventListener("click",()=>{
//     alert("Inner Div");
//     innerdiv.style.backgroundColor="yellow";
// });
// outerdiv.addEventListener("click",()=>{
//     alert("Outer Div");
//     outerdiv.style.backgroundColor="blue";
// }
// );

// hide and show html element using javascript
// const innerdiv=document.getElementById("innerdiv");
// const button=document.getElementById("toggle");

// button.addEventListener("click",()=>{
//     if(innerdiv.style.display=="none"){
//         innerdiv.style.display="block";
//     }
//     else{
//         innerdiv.style.display="none";
//     }
// });

// //using eventlistener detect keypress
// window.addEventListener("keypress",event=>{
//     console.log(event.key);
// });

//using eventlistener detect keydown and keyup event move innerdiv 

const innerdiv=document.getElementById("innerdiv");
let x=0;
let y=0;
window.addEventListener("keydown",event=>{
    switch(event.key){
        case "ArrowUp":
            y-=10;
            innerdiv.style.top=y+"px";
            break;
        case "ArrowDown":
            y+=10;
            innerdiv.style.top=y+"px";
            break;
        case "ArrowLeft":
            x-=10;
            innerdiv.style.left=x+"px";
            break;
        case "ArrowRight":
            x+=10;
            innerdiv.style.left=x+"px";
            break;
    }
});

