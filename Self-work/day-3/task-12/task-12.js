// *********** Arrow Function **********
// const func =(arg1, arg2...) => {function definition}

const sum = (a,b) => {
    console.log(a+b);
};
sum(5,3);

const cube = (n) => {
    return n * n * n
};

console.log(cube(8));


const pow =(a,b) =>{
    return a ** b;
};

console.log(pow(2,3));

const hello = () => {
    console.log("hello world");
}

hello();


// *********** Arrow Function ************
// implicit return 
// const func = (arg1, arg2..) => {value}

const mul = (a,b) => (a*b);
console.log(mul(5,10));


const add = (a,b) => a+b ;
console.log(add(5,10));











