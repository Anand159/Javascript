// ******** Rest **********
// Allows a function to take an indefinite number of arguments and bundle them in an array.

function sum (...args){
    for (let i=0; i < args.length; i++ ){
        console.log("you gave us:",args[i])
    }
}

sum(1,2,3,4,5);



function add(...args){
    return args.reduce((sum,el)=>sum+el);
}
console.log(add(2,4,6,8,12));



function min(msg,...args){
    console.log(msg);
    return args.reduce((min,el)=>{
        if(min > el){
            return el;
        } else{
            return min;
        }
    })
}

console.log(min("Anand",2,3,7,8,9));



// Destructuring 
// Storing values of array into multiple variable.

let names = ["tony", "bruce", "steve", "peter"];
let [winner,runnerup ,...other]=names;

console.log(winner,runnerup,other);


// destructuring
// object

const stundent = {
    name:"Anand",
    class:10,
    age:16,
    subjects:["hindi","english","math","science","socail studies"],
    username:"anandkumarsoni154@gmail.com",
    password: 1234,
};

const {username,password}=stundent;
console.log(username);

const {username:user,password:pass, city="Bihar"}=stundent;
console.log(pass);
console.log(city);

