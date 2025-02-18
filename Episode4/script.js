let marks = [97, 84, 74, 79, 28];
console.log(marks);

console.log(marks.length);//property

let heros = ["ironman", "spiderman", "batman", "Antan", "thor"]
console.log(heros);

//Looping over and array

for (let index = 0; index < heros; index++) {
    console.log(heros[index]);
}

//for of iterator
for (let hero of heros) {
    console.log(hero);
}

for (let hero of heros) {
    console.log(hero.toUpperCase());
}

//Arrays in JS : Array Methods
//Push() : add to end
//Pop(): delete from end and return 
//toString(): converts array to string

let foodItems = ["potato", "apple", "mango", "grapes"];
foodItems.push("chips", "burger", "paneer");
console.log(foodItems);
let deletedItem = foodItems.pop();
console.log("Deleted item is", deletedItem);

console.log(foodItems.toString());

let marks1 = [85, 97, 44, 37, 76, 60];
console.log(marks1.toString());

let marvel_heros = ["Thor", "SpiderMan", "Ironman"];
let dcHeroes = ["Superman", "batman"];

let hero = marvel_heros.concat(dcHeroes);
console.log(hero);

//unshiftmethodand shift method

marvel_heros.unshift("Antman");
let val = marvel_heros.shift();
console.log("Deleted item is", val);

//Slice and Splice

let marvel = ["Thor", "SpiderMan", "Ironman", "Batman"];
console.log(marvel);
console.log(marvel.slice(1));

//splice(start,deletecount,newelement)
let arr = [1, 2, 3, 4, 5, 6, 7];
//arr.splice(2,2,101,102);
//Add Element
// arr.splice(2,0,101);
// Delete element

arr.splice(3, 1);

//Replace Element
arr.splice(3, 1, 101);

