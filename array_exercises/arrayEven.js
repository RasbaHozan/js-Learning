// Create an array of even numbers from 1 to 100
let evenNumbers = [];
let num = 2;

for (let i = 1; i <= 50; i++) {
    evenNumbers[i - 1] = num;
    num += 2;
}
console.log(evenNumbers);