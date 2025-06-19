// ******** Query Selectors *********
// Allow us to use any CSS Selector.

// document.querySelector("p"); --> sellect first p element
// document.querySelector("#myid"); --> sellect first element with id = myId 
// document.querySelector(".myClass"); --> sellect first element with class = myClass

// document.querySelectorAll("p"); --> select all p element

console.dir(document.querySelector("h1")); // object print 
console.log(document.querySelector("h1")); // element print 

console.dir(document.querySelector("#description"));
console.log(document.querySelector("#description"));

console.dir(document.querySelector(".oldImg"));
console.log(document.querySelector(".oldImg"));

console.dir(document.querySelector("div a"));
console.log(document.querySelector("div a"));


// querySelectorAll
console.dir(document.querySelectorAll("div a")); // Nodelist All
console.log(document.querySelectorAll("div a")); // Nodelist All 
