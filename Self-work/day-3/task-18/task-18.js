// *********** Reduce ***********
// Reduces the array to a single value;
// arr.reduce(reducer function with 2 variables for (accumulator,element));

let nums = [1,2,3,4];
let finalVal = nums.reduce((res,el)=>(res+el));
console.log(finalVal);

// Q finding Maximum in an array;

let num=[2,3,4,5,3,4,7,8,1,2];

let result = num.reduce((max,el)=>{
    if (max < el){
        return el;
    }else{
        return max;
    }
});

console.log(result);




let arr = [1,4,2,5,6,7,2,9,2];

let max = -1;

for (let i=0; i<arr.length; i++){
    if(max<arr[i]){
        max = arr[i];
    };
}
console.log(max);

