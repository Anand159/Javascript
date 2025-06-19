
// Method Chaining

let msg ="    Hello   ";
console.log(msg.trim().toUpperCase());

// slice 

let a= "IloveConding";
console.log(a.slice(4));
console.log(a.slice(1,4));
console.log(a.slice(length-1));

// Replace

let b="IloveConding";
let c="AnandAnandAnand";
console.log(b.replace("love","do"));
console.log(b.replace("Conding","money"));
console.log(c.replace("Anand", "Aman"));

// Repeat

let d= "Mango"
console.log(d.repeat(4));


// charAt(index)
let e="Anand Soni";
console.log(e.charAt(4));



// .indexof()
// giving -1 if not found 

let f ="ILoveCoding";
console.log(f.indexOf("Love"));
console.log(f.indexOf("C"));


// includes(substring) :
// give value true And false

let g="Himanshu"
console.log(g.includes("Him"));

// split(separator) :
// convert to array


let h="Anand, Himanshu, Rishu, Abhay, Hrithik, Sachin";
console.log(h.split(","));
