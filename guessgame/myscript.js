const answer= Math.floor(Math.random()*10+1);
let guesses=0;
document.getElementById("submitbtn").onclick=function(){
    let guess=document.getElementById("guessfield").value;
    console.log(guess);
    guesses+=1;
    if(guess==answer){
        alert(`You guessed it right, you took ${guesses} guesses`);
    }
    else if(guess<answer){
        alert("Too small");
    }
    else{
        alert("Too large");
    }
}