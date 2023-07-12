let data=[1,2,3,4,5,6,7,8,9,10];
for(let i=0;i<data.length;i++){
    console.log(data[i]);
}
data.push(11);
console.log(data);
data.pop();
console.log(data);
data.unshift(0);
console.log(data);
data.shift();
console.log(data);

let students=["one","two","three","four","five"];
console.log(students);
students.forEach(capitalize);
students.forEach(print);
function capitalize(element,index,array){
    array[index]=element[0].toUpperCase()+element.substring(1);
}
console.log(students[0]);

function print(element){
    console.log(element);
}