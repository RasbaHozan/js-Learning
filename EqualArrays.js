function checkEqualArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
const array1 = [8, 9, 10];
const array2 = [4, 5, 6];
const array3 = [8, 9, 10];

console.log(checkEqualArrays(array1, array2)); // Output: true
console.log(checkEqualArrays(array1, array3)); // Output: false