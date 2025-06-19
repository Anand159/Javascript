// Nested Object(Object of Object)
// Storing information of multipule Students 

const classInfo = {
    aman : {
        grade : "A+",
        city : "Delhi",
    },
    Anand : {
        grade : "O-",
        city : "Bihar",
    },
    sachin : {
        grade : "A",
        city : "Pune",
    }
};


console.log(classInfo);
console.log(classInfo.Anand);
console.log(classInfo.Anand.city);
classInfo.Anand.city ="Delhi";
console.log(classInfo.Anand)
classInfo.Anand.hobbies ="cricket";
console.log(classInfo)

