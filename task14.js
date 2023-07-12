//class = a blue print for creating objects with define what properties and methods
//object = a collection of properties and methods
//property = a value associated with an object
//method = an action performed on an object
//constructor = a special method for creating and initializing an object


class playerOne{
    score=0;
    pause(){
        console.log("Player One Paused");
    }
    exit(){
        console.log("Player One Exited");
    }
}
const player1 = new playerOne();
player1.score = 100;
console.log(player1.score);

class Student{
    constructor(name, age, grade){
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    getDetails(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}
const student1 = new Student("John", 20, "A");
student1.getDetails();
const student2 = new Student("Smith", 21, "B");
student2.getDetails();

//static keyword in javascript is used to create static methods and properties.
//static methods and properties are accessible from the class itself
//any this is static is belongs to the class not to the object.


class car{
    static numberofcars=0;
    constructor(name){
        this.name = name;
        car.numberofcars+=1;
    }
    static getnumberofcars(){
        console.log(car.numberofcars);
    }

}
const car1 = new car("BMW");
const car2 = new car("Audi");
const car3 = new car("Mercedes");
console.log(car.numberofcars);

car.getnumberofcars();