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
