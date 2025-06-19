// ********** Map ***********
// let newArr = arr.map(some function definition or name);
// Returns new array with modified elements
// ye ek new arry me convert kar ke return karna h

let num = [1,2,3,4];

let double = num.map(function(el){
    return el * 2;
});

console.log(double);

console.log("-----------")

let student =[
{
    name:"Anand",
    marks:95
},
{
    name:"Khushi",
    marks:85
},
{
    name:"Nisha",
    marks:80
}
];

let gpa = student.map((el)=>{
    return el.marks/10;
});

console.log(gpa);