//Functions in JS
//function defination
// function functionName(){
// do something
//}

function myFunction() {
    console.log("Welcome to Apna College!");
    console.log("We are learning JS:");
}


myFunction();
myFunction();
myFunction();
myFunction();

//function with paramenter
function myFunction1(msg) {
    console.log(msg);
}

myFunction1("I love javascript");

//Functions -> 2 numbers, sum
function sum(x, y) {
    s = x + y;
    console.log("Before return");
    return s;
    //console.log("After return");
}
let val = sum(3, 4);
console.log(val);

//Arrow functions

function sum(a, b) {
    return a + b;
}

const arrowSum = (a, b) => {
    console.log(a + b);
};

//multiplication function
function mul(a, b) {
    return a * b;
}

const arrowMul = (a, b) => {
    console.log(a * b);
    return a * b;
}

//printing a hello
const printHello = () => {
    console.log("hello");
};

//forEach Loop in Arrays 
//arr.forEach(callBackFunction)
/*Callback function : is a function to execute for each element in the array
A callback is function passed as an argument to another function
arr.forEach((val) =>{
    console.log(val);
    })
*/

function abc() {
    console.log("hello");
}

function myFunc(abc) {
    return abc;
}

//usage of forEach
let arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val) {
    console.log(val);
});

//using an arrow functions

let arr1 = [1, 2, 3, 4, 5];
arr1.forEach((val) => {
    console.log(val);
})

let arr2 = ["pune", "delhi", "mumbai"];
arr2.forEach((val, idx, arr2) => {
    console.log(val, idx, arr2);
    // console.log(val.toUpperCase());
})


//some more array methods 
//map : arr.map(callbackFnx(value,index,array))

let nums2 = [67, 52, 39];

let newArr = nums2.map((val) => {
    return val * 2;
});

console.log(newArr);

let calSquare1 = (num) => {
    console.log(num * num);
};

//filter method : creates a new array of elements that give true for a constion/filter.
/*
let newArr = arr.filter((val)=>{
    return val%2==0;
}) */

let array = [1, 2, 3, 4, 5, 6, 7];
let evenArr = array.filter((val) => {
    return val % 2 == 0;
});
console.log(evenArr);

//reduce method
let array1 = [1, 2, 3, 4];
const output = array1.reduce((res, curr) => {
    return res + curr;
})
console.log(output);

//greater number 

let array2 = [1, 6, 3, 4];
const output1 = array2.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
})
console.log(output1);