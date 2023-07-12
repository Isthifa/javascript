//object in javascript is a collection of properties where each property has a key and a value.
//object is a non-primitive data type in javascript.
//object is a reference type.
//object is a mutable data type.
//object is group of properties and methods.

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

//this keyword in javascript is used to refer to the current object.
//this keyword is used to access the properties and methods of the current object.

const car1 = {
    name: "BMW",
    model: "X5",
    color: "Black",

    start: ()=> {
        console.log(`${this.name} started`);
    },
    stop:  ()=> {
        console.log(`${this.name} stopped`);
    },
    drive:  ()=> {
        console.log(`${this.name} driving`);;
    }
}
console.log(car1);
car1.start();
car1.stop();
car1.drive();