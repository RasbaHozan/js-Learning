function sumNumbers() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    return sum;
}
let result = sumNumbers();
console.log("The sum of numbers from 1 to 100 is:", result);