// ********* Return ********
// return keyword is used to return some value from the function.

function sum(a,b){
    return a+b;

};

console.log(sum(3,4))
// 3 value kaise pass kare
console.log(sum(sum(5,6),8));


// Q create a Function that return the sum of numbers from 1 to n.

function getSum(n){
    let sum=0;
    for(let i=1; i<=n; i++){
         sum=sum+i;
    };
    return sum
};
console.log(getSum(5));



// Q Create a Function that return the concatenation of all strings in an array.

let str = ["hi", "hello", "bye", "!"];

function concat(str){
    let result = " ";

    for(let i=0; i<str.length; i++){
        result += str[i];
    }
    return result;
};

console.log(concat(str));


