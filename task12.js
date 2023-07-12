// Map = object store key-value pairs. Keys and values in a map can be of any type.
// Map is iterable, so we can iterate over maps using a for..of loop.

const map = new Map([
    ["First", 10],
    ["Second", 20],
    ["Third", 30],
    ["Fourth", 40],
    ["Fifth", 50]
])
let sum = 0;
sum=map.get("First");
console.log(sum);
map.forEach((value,key)=>{
    console.log(`${key} = ${value}`);
}
);
map.set("Sixth",60);
map.set("Seventh",70);
console.log(map.forEach((value,key)=>{
    console.log(`${key} = ${value}`);
}));