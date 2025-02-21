//classes in JS
// class is a program-code template for creating objects
//those objects will ahve some state and behaviour inside it.

class ToyotaCar {
    constructor(brand, mileage) {
        console.log("Creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
    // setBrand(brand) {
    //     this.brand = brand;
    // }
}

let fortuner = new ToyotaCar("fortuner", 10);
// fortuner.setBrand("fortuner");
console.log(fortuner);
let lexus = new ToyotaCar("lexus", 12);
// lexus.setBrand("lexus");
console.log(lexus);

//Inheritance in JS
//Passing down properties and methods from parent class to child class

class Parent {
    hello() {
        console.log("hello");
    }
    eat() {
        console.log("sleep");
    }

}

class Child extends Parent {

}

let obj = new Child();

class Person {

    constructor(name) {
        // console.log("Enter Parent constructor");
        this.species = "homo sepianns";
        this.name = name;
    }
    // sleep() {
    //     console.log("sleep");
    // }
    eat() {
        console.log("eat");
    }
    // work() {
    //     console.log("do nothing");
    // }
}

class Engineer extends Person {
    constructor(name) {
        // console.log("Enter child constructor");
        super(name);// to invoke parent class constructor
        // this.branch = branch;
        // console.log("Exit child constructor");
    }
    work() {
        super.eat();
        console.log("Solve problems, build something"); // if child and parent have same method, childs method will be used[method overriding]
    }
}

let ankithaEng = new Engineer("Ankitha");

// class Doctor extends Person {
//     work() {
//         console.log("Treat Patients");
//     }
// }

//Super Keyword
//The super keyword is used to call the constructor