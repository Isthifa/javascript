let count=0;
document.getElementById("btn1").onclick=function(){
    count+=1;
    document.getElementById("counter").innerHTML=count;
}
document.getElementById("btn3").onclick=function(){
    count=0;
    document.getElementById("counter").innerHTML=count;
}
document.getElementById("btn2").onclick=function(){
    count-=1;
    document.getElementById("counter").innerHTML=count;
}