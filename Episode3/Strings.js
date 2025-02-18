// let str = "Ankitha Kulal";
// console.log(str[3]);

// //Template Literals and String interpolation

// let SpecialString = `This is a template literal`;
// console.log(typeof SpecialString);

// let obj = {
//     item: "pen",
//     price: 10,
// };
// let output = `The cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

// console.log("the cost of", obj.item, "is", obj.price, "rupees");


//escape Characters

// console.log("Ankitha\nKulal");

// let str = "Ankitha\tKulal";
// console.log(str.length);

//String Methods in Javascript

//str.toUpperCase()

let str = "Ankitha Kulal";
console.log(str.toUpperCase());

//str.toLowerCase()
console.log(str.toLowerCase());

//str.trim()

let str1 = "                 Apna College ";
console.log(str1.trim());

//slice,concat,replace,charAt

let str2 = "0123456789";
console.log(str2.slice(4));

//concat
let str3 = "Ankitha";
let str4 = "Kulal";
let res = str3.concat(str4);
let jam = "hello" + res;
console.log(jam);

//replace

let s = "hello";
console.log(s.replace('l', 'm'));

console.log(s.replaceAll('l', 'm'));

//charAt
let s1 = "IloveJS";
console.log(s1.charAt(0));

//string is immutable if you want to change you can use replace method or the new string formation