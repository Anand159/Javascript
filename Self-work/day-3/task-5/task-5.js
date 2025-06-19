// ********* Function in Js *********

function hello(){
    console.log("Hello World");
};

hello();

console.log("----------------------")
// Q Create a Function to roll a dice & always display the value of the dice (1 to 6).

function ludo(){
    let rad = Math.floor(Math.random()* 6 )+1;
    console.log(rad);
};
ludo();

console.log("----------------------")

// *********** Function with Arguments *************
// Values we pass to the Function.


// Q create a Function that give us the average of 3 numbers.
function calavg(a,b,c){
    let avg = (a,b,c)/3;
    console.log(avg); 
}

calavg(80,20,30);
console.log("----------------------")
// Q create a Function that prints the multiplication table of a number.

function printTable(n){
    for (let i=n; i<=n*10; i+=n){
        console.log(i)
    }
}

printTable(2);

console.log("----------------------")



