//Evenets in JS
//The change in the state of an object is known as an Event
// To notify interesting things

//Mouse events(click, double click)

let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("Button was clicked");
    let a = 25;
    a++;
    console.log(a);//26
};

// btn1.onclick = () => {
//     console.log("Handle2");

// };

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("You are inside div");
};

//Event Objects
btn1.onclick = (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
};

//Event Listeners
//node.addEventListener(event,callback)
//node.removeEventListener(event,callback)

btn1.addEventListener("click", (e) => {
    // console.log(e);
    // console.log(e.type);
    console.log("Button was clicked! handler1");
});
btn1.addEventListener("click", () => {
    // console.log(e);
    // console.log(e.type);
    console.log("Button was clicked! handler2");
});
btn1.addEventListener("click", () => {
    // console.log(e);
    // console.log(e.type);
    console.log("Button was clicked! handler3");
});
const handler3 = () => {
    // console.log(e);
    // console.log(e.type);
    console.log("Button was clicked! handler4");
};

btn1.removeEventListener("click", handler3);