// ************ Manipulatating Attributes ************
//-> obj.getAttribute(attr).      //getter
//-> obj.setAttribute(attr,val).  //setter

let img =document.querySelector("img");

console.log(img);

console.log(img.getAttribute('id')); // check id attribute 

console.log(img.setAttribute('id', 'spidermanImg')); // change id attribute


console.log(img.setAttribute('src', './assets/creation_2.jpeg')); // chanege src img 

console.log(img.getAttribute('class'));// check class attribute 

console.log(img.setAttribute('class','images')); // change class attribute 

console.log(img.getAttribute('class')); // check class attribute 







