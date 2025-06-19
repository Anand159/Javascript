// ********** this keyword **************
// "This" keyword refers to an object that is executing the current piece of code.
// <=> calling object this keyword

const student = {
    name: "Anand",
    age : 23,
    eng : 95, 
    math : 93,
    phy : 97,

    getAvg(){
        // console.log(this);
        let avg = (this.eng + this.math + this.phy)/3;
        console.log(`${this.name} got avg marks = ${avg}`);

    }

}
console.log(student);
student.getAvg();
console.log(student.name)



// ********** window object *********

function getAvg(){
        console.log(this);
        let avg = (this.eng + this.math + this.phy)/3;
        console.log(`${this.name} got avg marks = ${avg}`);
}

getAvg();
window.getAvg();

