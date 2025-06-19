// ********* this with Arrow Function ***********

const student = {
    name : "Anand",
    marks : 95,
    prop : this,

    getName : function(){
        console.log(this); // global scope
        return this.name;

    },
    getMarks : () => {
        console.log(this); // parent's scope -> window
        return this.marks;
    },
    getInfo1: function(){
        setTimeout(() => {
            console.log(this); // student
        },2000);
    },
    getInfo2: function(){
        setTimeout( function(){ // window
            console.log(this);
        },2000);

    }
};

console.log(student.getInfo1());// student object
console.log(student.getInfo2());// window object






