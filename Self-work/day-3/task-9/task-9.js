// ********* Methods ********
// Actions that can be performed on an object.

const calculator = {
    add : function(a,b){
        return a+b;
    },
    sub : function(a,b){
        return a-b;
    },
    mul : function(a,b){
        return a*b;
    } 
};

console.log(calculator);
console.log(calculator.add(5,10));
console.log(calculator.sub(10,5));
console.log(calculator.mul(2,6));


// *********** Methods (shorthand) **********

const cal = {
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    } 
};

console.log(cal);
console.log(cal.add(5,10));
console.log(cal.sub(10,5));
console.log(cal.mul(2,6));







