// ************* Filter *************
// let newArr = arr.filter(some function definition or name.);
// Returns new array with matching elements
// true/ false par kaam karta h 
// true rahega to value dega aur false rahega to nahi dega

let nums = [2,4,1,5,6,2,7,8,9,2,9];

let even = nums.filter((nums)=>(nums%2==0));
let odd = nums.filter((nums)=>(nums%2 !=0));


console.log(even);
console.log(odd);

console.log("---------------------")


// *********** Every *********
// Returns true if every element of array gives true for some function. Else returns false.
// arr.every(some function definition or name);
// like && operater ki taher kaam karta h
let a= [1,2,3,4];
let b= [2,4,6,8];

let c=a.every((el)=>(el%2==0));
let d=b.every((el)=>(el%2==0));

console.log(c);// false
console.log(d);// true

console.log("---------------------")

// ********** Some **********
// Return true if some element of array give true for some function. Else returns false.
// Or (||) operater ki tahar kaam karta h 

const ages = [12, 14, 15];

const isAdult = ages.some(age => age >= 18);
console.log(isAdult);  // Output: false


const numbers = [3, 7, 12, 5];

const result = numbers.some(num => num > 10);
console.log(result);  // Output: true







