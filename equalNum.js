function checkEqualNumbers(num1,num2) {
    if (num1 === num2) {
        return num1 + " is equal to " + num2;
    } else {
        return num1 + " is not equal to " + num2;
    }
}

let num1=4;
let num2=6;
let result=checkEqualNumbers(num1,num2);
console.log(result)