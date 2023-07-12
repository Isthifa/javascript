let fruits=document.getElementsByName("fruits");
console.log(fruits);
fruits.forEach((f)=>{
    if(f.checked){
        console.log(f.value);
    }
})

let fruit=document.getElementsByTagName("li");
fruit[1].style.backgroundColor="red";

let dessert=document.getElementsByClassName("deserts");
dessert[1].style.backgroundColor="blue";