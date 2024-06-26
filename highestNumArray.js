function highestElement(arr) {
    let highestNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > highestNum) {
            highestNum = arr[i];
        }
    }
    return highestNum;
}

const num1 = [5, 8, 25, 10, 3];
console.log("The highest element in the array is:", highestElement(num1)); 