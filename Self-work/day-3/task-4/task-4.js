// Array of object 
// Storing information of multiple students.

const classInfo = [
    {
        name :"Anand",
        grade : "A+",
        city : "Bihar",
    },
    {
        name :"Sachin",
        grade : "A+",
        city : "Pune",
    },
    {
        name :"Golu",
        grade : "A+",
        city : "Delhi",
    }
]

console.log(classInfo);
console.log(classInfo[0]);
console.log(classInfo[1]);
console.log(classInfo[2]);
console.log(classInfo[2].name);
console.log(classInfo[0].grade);
classInfo[0].grade = "O-"
console.log(classInfo[0]);
classInfo[0].hobbies = "cricket"
console.log(classInfo[0]);






