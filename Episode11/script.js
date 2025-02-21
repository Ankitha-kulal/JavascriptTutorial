//Prototypes in JS
//Javascript is an entity having state ad behaviour 
//JS objects have special properties called as prototypes

const student = {
    fullname: "Ankitha kulal",
    marks: 95,
    printMarks: function () {
        console.log("marks = ", this.marks);
    },

};

const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    },
    // calctax2: function () {
    //     console.log("tax rate is 10%")
    // },
};

const karanArjun = {
    salary: 5000,
    calcTax() {
        console.log("tax rate is 20%"); // if object and prototype have same method, objects method will be used
    },
};

// const karanArjun1 = {
//     salary: 5000,
// };
// const karanArjun2 = {
//     salary: 5000,
// };
// const karanArjun3 = {
//     salary: 5000,
// };
//we can set prototype using __proto__
karanArjun.__proto__ = employee;
// karanArjun1.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;