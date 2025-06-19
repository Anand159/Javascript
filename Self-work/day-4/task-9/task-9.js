// ******* Manipulating Style ***********
// Using classList
// -> obj.classList
// classList.add() --> to add new classes
// classList.remove() --> to remove classes
// classList.contains() --> to check if class exists ->value (true/false)
// classList.toggle() --> to togggle between add & remove


let img = document.querySelector('img');

console.log(img.classList);

let heading = document.querySelector('h1');

console.log(heading.classList); // check list class

console.log(heading.classList.add("green")); // add class
console.log(heading.classList); //check list class

console.log(heading.classList.add("underline")); // add class
console.log(heading.classList); //check list class


console.log(heading.classList.remove("underline")); // remove class
console.log(heading.classList); //check list class

console.log(heading.classList.contains("underline")); // check if class exists   ->value (true/false)
console.log(heading.classList); //check list class

console.log(heading.classList.toggle("green")); 
console.log(heading.classList.toggle("underline"));

let box = document.querySelector(".box");

console.log(box.classList.add("yellowBg")); 
console.log(box.classList);







