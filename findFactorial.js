function factorial(num) {
    if (num === 0) {
        console.log(`The factorial of ${num} is 1.`);
    }
    else if (num < 0) {
        console.log('Factorial for negative number does not exist.');
    }
    else {
        var facto = 1;
        for (var i = 1; i < num+1; i++) {
            facto *= i;
        }
        console.log(`The factorial of ${num} is ${facto}.`);
    }
}
factorial(7);