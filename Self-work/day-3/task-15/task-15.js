// ******* Array Methods ********
// =>  forEach  <=
// arr.forEach(some function definition or name);
// Loop through array (no return)


let arr = [1,2,3,4,5];
function print(el){
    console.log(el);
};

arr.forEach(print);

console.log("-----------------")
// OR 

arr.forEach(function(el){
    console.log(el);
});

console.log("-----------------")

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

student.forEach((stud)=>{
    console.log(stud)
});

student.forEach((stud)=>{
    console.log(stud.name)
});




