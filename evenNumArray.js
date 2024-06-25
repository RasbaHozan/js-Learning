function findEvenNumbers() {
    let evenNumbers = [];
    for (let i = 2; i <= 100; i += 2) {
        evenNumbers.push(i);
    }
    return evenNumbers;
}
const evenNumbersArray = findEvenNumbers();
console.log("Even numbers from 1 to 100:", evenNumbersArray);