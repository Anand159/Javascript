// ********** Using Properties & Methond *************
// -> innerText <-
// Shows the visiable text contained in a node.

// -> textContent <-
// Shows all the full text

// -> innerHTML <-
// Shows the full markup

let para = document.querySelector("p");

console.log(para);
console.dir(para);

console.log(para.innerText); 
console.log(para.textContent);
console.log(para.innerHTML);

console.log(para.innerText = "abc"); // change (Manipulating).
console.log(para.innerText = "Hi, I am Peter Parter"); // change (Manipulating).
console.log(para.innerText = "Hi, <b>I am Peter Parter<b>"); // not change style 
console.log(para.innerHTML = "Hi, <b>I am Peter Parter<b>"); // change the style


let heading = document.querySelector("h1");

console.log(heading.innerHTML="<b>Spider Man</b>"); // change
console.log(heading.innerHTML=`<u>${heading.innerText}</u>`); // change 





