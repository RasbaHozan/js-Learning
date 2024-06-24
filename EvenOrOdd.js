function checkEvenOrOdd(number) {
    if (number %2 === 0) {
        return number + " is even";
    } else {
        return number + "is odd";
    }
}
let number=10;
let result=checkEvenOrOdd(number);
console.log(result)