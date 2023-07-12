//object in javascript is a collection of properties where each property has a key and a value.
//object is a non-primitive data type in javascript.
//object is a reference type.
//object is a mutable data type.

const car = {
    name: "BMW",
    model: "X5",
    color: "Black",

    start: ()=> {
        console.log("Car started");
    },
    stop:  ()=> {
        console.log("Car stopped");
    },
    drive:  ()=> {
        console.log("Car driving");
    }
}
console.log(car);
console.log(car.name);
console.log(car.model);
console.log(car.color);
car.start();
car.stop();
car.drive();
console.log(car["name"]);
console.log(car["model"]);
console.log(car["color"]);