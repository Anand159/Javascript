// ********Highter Order Functions**********
// A function that does one or both.
// => takes one  or multiple function  as arguments.
// => return a function.  

function multipleGreet(func,count){ // higher order function
    for (let i=1; i<=count; i++){
        func();

    }
}
let greet = function(){
    console.log("hello");
}
multipleGreet(greet,5);

multipleGreet(function(){console.log("Anand Soni")},2);

//*************** Higher Order Functions ************************
// Returns a function

function oddEvenFactory(request){

    if (request=="odd"){
        let odd = function(n){
            console.log(!(n%2==0));
        }
        return odd;
    } else if (request == "even"){
        let even = function(n){
            console.log(n%2==0);
        }
        return even;
    }else {
        console.log("wrong request");
    }
}


let request = "odd";
let func = oddEvenFactory(request);
console.log(func(2));



