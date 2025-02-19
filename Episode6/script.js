//window
// console.log(window);
// window.console.log("hello");

//DOM
// console.dir(document.body);

// console.dir(document.body.childNodes[1]);

//DOM Manipulation
//document.getElementById("myId")

// let heading = document.getElementById("heading");
// console.dir(heading);

//document.getElementByClassName

// let headings = document.getElementsByClassName("head");
// console.dir(headings);

//document.getElementsByTagName

// let parahs = document.getElementsByTagName("p");
// console.dir(parahs);

//Query Selector

// let firstEl = document.querySelector(".head"); // 1st element
// console.dir(firstEl);

// let allElement = document.querySelectorAll(".head");// NodeList
// console.dir(allElement);

//for id put # in the queryselector
//for class put . in the queryselector
//for tag only the tag name

//Properties : tagName, innerText, innerHTML, textContent
//DOM tree
/*
-> text nodes
-> comment nodes
-> elements
*/

// console.dir(document.body.firstChild);

// let div = document.querySelector("div");
// console.dir(div);

// let heading = document.querySelector("h1");

let divs = document.querySelectorAll("box");
console.dir(divs);