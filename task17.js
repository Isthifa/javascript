//promise = is a object that keeps track about whether a certain event has happened already or not
//determines what happens after the event has happened
//implements the concept of a future value that we're expecting
//promise is a container for a future value
const promise=new Promise((resolve,reject)=>{
    let file=false;
    if(file){
        resolve("File found");
    }
    else{
        reject("File not found");
    }
});
promise.then((message)=>
    console.log(message)
).catch((message)=>
    console.log(message)
);