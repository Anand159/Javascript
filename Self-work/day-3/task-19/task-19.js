// ********** Default Parameters **********
// Giving a default value to the arguments
// function func(a,b=2){
    // do somethings
// }


function sum(a,b=3){
    return a+b;
};
sum(2); // 5


// ******** Spread ***********
// Expands an iterable into multiple values 
// function func (...arr){
//         do something
// }

let arr = [1,2,3,4,5];
console.log(Math.max(...arr));
console.log(Math.min(...arr));
arr.push(-1);
console.log(Math.min(...arr));
console.log(..."Anand Soni");


// ********* Spread ************
// With Array literals

let A = [1,2,3,4,];
A.push(6);
let newA = [...A];
console.log(newA);

let char = [..."Anand"];
console.log(char);

let odd = [1,3,5,7,9];
let even = [2,4,6,8,10];

let nums = [...even,...odd];
console.log(nums);

// ******* spread *******
// with object literals

let data = {
    email: "Anandkumarsoni154@gmail.com",
    password :"abcd",
};

let datacopy = {...data,id:123};
console.log(datacopy);


let i=[1,2,3,4,5];
let obj ={...i};

console.log(obj);

let j="Anand Soni";
let ob={...j};
console.log(ob);



