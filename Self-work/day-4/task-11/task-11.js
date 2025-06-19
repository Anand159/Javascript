//************ Adding Elements ************
// document.createElement('p');

// appendChild(element)
// append(element)
// prepend(element)
// insertAdjacentElement(where,element)



let newP1 = document.createElement('p');

newP1.innerText="Hi , I am a new p1";

let newP2 = document.createElement('p');

newP2.innerText="Hi , I am a new p2";

let body = document.querySelector('body');

console.log(body.appendChild(newP1)); // appendchild hua last child me 

let box = document.querySelector('.box');

console.log(box.appendChild(newP2)); 



let btn1 = document.createElement('button');
btn1.innerText="click me! 1";

let btn2 = document.createElement('button');
btn2.innerText="click me! 2";

console.log(box.appendChild(btn1)); // appendchild hua last child me 

console.log(newP2.append(" this is new text")); // append wahi p se under hua h 

console.log(newP2.append(btn2)); // append wahi p se under hua h 


let newP3 = document.createElement('p');

newP3.innerText="Hi , I am a new p3";

console.log(box.prepend(newP3));  // first me 


let btn3 = document.createElement('button');
btn3.innerText="click me! 3";

let btn4 = document.createElement('button');
btn4.innerText="click me! 4";

let btn5 = document.createElement('button');
btn5.innerText="click me! 5";

let btn6 = document.createElement('button');
btn6.innerText="click me! 6";

let p = document.querySelector('p');

p.insertAdjacentElement('beforebegin',btn3); // paragraph start hone se pahle hi aagya 
p.insertAdjacentElement('afterbegin',btn4); // paragraph under hi aayega first me
p.insertAdjacentElement('beforeend',btn5); // paragraph under hi aayega last me
p.insertAdjacentElement('afterend',btn6); // paragraph start hone ke  last me







