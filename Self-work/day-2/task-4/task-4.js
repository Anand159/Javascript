// indexof 
// giving -1 if not found 

let primary =["red", "yellow", "blue"];

console.log(primary.indexOf("blue"));
console.log(primary.indexOf("red"));
console.log(primary.indexOf("green"));



// includes : search for a value / Check if an element exists .
// giving value true & false

console.log(primary.includes("yellow"));
console.log(primary.includes("black"));
console.log(primary.includes("red"));


// concat : merage 2 Arrays.

let color1=["orange","green","purple"];
let color2=["maroon","pink","brown"];
console.log(color1.concat(color2));

// reverse : reverse an array.
console.log(primary);
console.log(primary.reverse());


// slice : copies a portion of an array.

let colors=["red", "yellow", "blue", "orange", "pink", "white"];

console.log(colors.slice());
console.log(colors.slice(4));
console.log(colors.slice(1,4));
console.log(colors.slice(-4));
console.log(colors.slice(10));
console.log(colors.slice(-10));


// splice : remove / replaces / add elements in place 
// splice (start, deleteCount, item0...itemN).

console.log(colors.splice(4));
console.log(colors); // print
console.log(colors.splice(0,1));
console.log(colors); // print
console.log(colors.splice(0,1,"black","grey"));
console.log(colors);



// forEach() : Loops through elements.

let bike=["Honda", "Tvs", "Bajaj", "Suzuki","Royal Enfield", "Hero", "KTM"];


// value
bike.forEach(function(value){
    console.log(value);

});

// value index
bike.forEach(function(value,index){
    console.log(value, index);

});


// map(): Returns a new array with transformed elements. 

bike.map(function(value){
    console.log(value.toUpperCase());
});



//  filter():elements based on condition;

let animal=["Loin","Tiger","Cat","Elephant","Bear","Rabbit","Gorilla"];

console.log(animal)
// value return ho raha h 
let animals=animal.filter(function(value){
         return value.length > 5
    });
console.log(animals);

// value me true/ false 
animal.filter(function(value){
         console.log(value.length > 5);
});


// reduce() : Accumulate a single value


let month=["January","March","May","July","December"];

console.log(month);

let months=month.reduce(function(sum,item){
    return sum + item.length
}, 0);
console.log(months);




// sort : sorts an array.
// only use character.

let days =["monday", "sunday", "wednesday", "tuesday"];


days.sort();
console.log(days);

// reverse
days.reverse();
console.log(days);

// number
let squares=[25,16, 4, 49, 36, 9];
squares.sort(); // not use number method sort
console.log(squares);

// ye type se hoga 
squares.sort(function(a, b) {
  return a - b;
});
console.log(squares);
// console.log(squares.sort((a,b)=> a-b ));


// number sort speacil type se hoga.
let numberArray=[];
for(let i=50; i>=0; i--){
    numberArray.push(i);

}
console.log(numberArray.sort((a,b)=> a - b ));



// explain 
//Qs

let num =1234;

console.log((num+'').split('').reverse().join(''));



































