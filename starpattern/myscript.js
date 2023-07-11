let a=5;
//star pattern program
for(let i=1;i<=a;i++){
    for(let k=1;k<=i;k++){
        document.getElementById("mypattern").innerHTML+="*";
    }
    document.getElementById("mypattern").innerHTML+="</br>";
}