let area;
let width;
let height;
width = window.prompt("Enter the width");
height = window.prompt("Enter the height");
area=getarea(width,height);
console.log("area is "+area);
function getarea(width,height)
{
    let result=width*height;
    return result;
}