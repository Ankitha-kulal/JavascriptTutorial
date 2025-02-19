//create a function using the "function" keyword that takes a String as an argument and returns the number of vowels in the string
function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if (
            char === "a" || char === "e" || char === "i" || char === "o" || char === "u"
        ) {
            count++;
        }
    }
    console.log(count);
    return count;
}

//Arrowfunction

const countVow = (str) => {
    let count = 0;
    for (const char of str) {
        if (
            char === "a" || char === "e" || char === "i" || char === "o" || char === "u"
        ) {
            count++;
        }
    }
    console.log(count);
    return count;
}

//For a given numbers print the square of each value using the forEacj loop
let nums = [2, 3, 4, 5, 6];
nums.forEach((num) => {
    console.log(num * num);
})

let nums1 = [67, 52, 39];
let calSquare = (num) => {
    console.log(num * num);
};

nums.forEach(calSquare);


// filter the marks of a students whos above 90
/* Take a number n as input from user. create an array of numbers from 1 to n. use reduce
method to calculate sum of all numbers in the array , use the reduce method to calculate product of all numbers in the array
*/

let marks = [97, 83, 98, 67, 83, 48];
let toppers = marks.filter((val) => {
    return val > 90;
});
console.log(toppers);

let n = prompt("Enter a number :");
let arr = [];
for (let i = 1; i <= n; i++) {
    arr[i - 1] = i;
}
console.log(arr);

let sum = arr.reduce((res, curr) => {
    return res + curr;
})
console.log(sum);

let factorial = arr.reduce((res, curr) => {
    return res * curr;
});

console.log("factorial = ", factorial);