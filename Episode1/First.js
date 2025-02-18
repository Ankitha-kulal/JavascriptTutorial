console.log("Welcome to Apna College");
console.log("Ankitha");
console.log("I love Javascript");

fullName = "Tony Stark";
age = 24;
price = 99.99;
x = null;
y = undefined;
isFollow = false;
console.log(isFollow);
//Dynamically typed language

//Variable Rules
// 1) Case sensitive

fullName = "Ankitha";
fullname = "Anu";
console.log(fullName);
console.log(fullname);

// 2) No space  & no special symbols , only lettter,digit,underscore and dollar is allowed
// 3) only ltter , underscore or $ should be 1st character
_fullName = "Java";
console.log(_fullName);

$fullname = "Hima";
console.log($fullname);


// 4) Reserved words cannot be variable names 

//Variables let,var, const
//var - Variable can be re-declared & updated . A global scope, but we won't use it as a good programmer.
// let - Variables can not be redeclared , but can be updated , block scope variable.
// const - Varibale can not be changed, block scope variable
let Name = "Ankitha ";
let age1 = 20;
console.log(Name);
console.log(age1);

const Pi = 3.14;
console.log(Pi);

// block concept

{
    let a = 5;
    console.log(a);
}
{
    let a = 10;
    console.log(a);
}

//DataTypes

//Number, String, Boolean, Undefined, Null, BigInt,Symbol

let i = BigInt(20);
console.log(i);
let z = Symbol("124");
console.log(z);

const student = {
    name: "Anuja",
    age: 20,
    cgpa: 9,
    isPass: true
}

console.log(student["cgpa"]);