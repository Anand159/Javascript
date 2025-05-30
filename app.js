let num;

// num =Number(prompt("please Enter the 16 to 50 number:- "));
// num=(Range())


// Question - 1;
for(num=16; num <=50; num++)
{
    if(num%4===0){
        console.log(num,"Quad");
    
    }else if(num%6===0){
        console.log(num,"Hex");
    }else if(num%4===0 && num%6===0){
        console.log(num,"QuadHex")  
    }else{
        console.log(num);

    }


};

// Question -2;

let sum = 0;

for (let num = 21; num <= 50; num++) {
    let isPrime = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        sum += num;
    }
}

console.log("Sum of prime numbers from 21 to 50 is:", sum);











