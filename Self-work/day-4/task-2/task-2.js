// *********** Selecting Element *************
// => (getElementByid) <=
//  Returns the Element as an object or null (if not found);
// use-> document.getElementById ("id name");

console.dir(document.getElementById("mainImg")) // dir se mainImg la object dega.

console.log(document.getElementById("mainImg")) // mainImg ka path dega.

let obj= document.getElementById("mainImg");

console.log(obj.id);
console.log(obj.tagName);
console.log(obj.src);
obj.src="./assets/creation_1.png"
console.log(obj.src);// change the img 


