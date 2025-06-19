// object literals
// Add / Upadate Value

const student = {
    name: "Anand",
    age: 23,
    marks: 94.4,
    city: "delhi"
};

console.log(student);
// update 
student.marks=85;
console.log(student);
student.city="Bihar";
console.log(student);
student.marks=["75","85","90"]
console.log(student);

// Add
student.hobbies = "cricket";
console.log(student);



// delete 
delete student.city;
console.log(student);





