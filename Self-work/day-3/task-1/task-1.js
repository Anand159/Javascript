// ****** Js object literals *******
// Used to store keyed collections & complex entities.
// property => (key, value)pair.
// object are a collection of properties.
// Objects are unordered collections of key-value pairs — they are meant for named data, not for ordered lists.

const student={
    name:"Anand",
    age:"20",
    marks:"85",
    city:"delhi"
};

console.log(student);


//****** Get Values **********

let fruits = {
    mango: "5kg",
    orange:"2kg",
    papaya:"4kg",
    apple:"1kg"
}



// 2 types se access kiya jata h value.
// fruits["mango"];
// fruits.mango

console.log(fruits);
console.log(fruits["mango"]);
console.log(fruits.papaya);


//********** Get Values ***********
// Js automatically converts objects keys to strings.
// Even if we made the number as a key, the number will be converted to string.

const obj = {
    1:"a",
    2:"b",
    true:"c",
    null:"d",
    undefined:"e"
};

console.log(obj);
console.log(obj[1]);
console.log(obj[2]);
console.log(obj[true]);
console.log(obj[null]);
console.log(obj[undefined]);


// **************************


const post={
    username:"@anandsoni__07",
    content:"this is my #firstPost",
    likes: 150,
    reposts: 5,
    tags : ["@sachin","@golu"]
};
console.log(post);
console.log(post.tags);
console.log(post.tags[0]);
console.log(post.tags[1]);












