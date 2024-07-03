// sort the array in decreasing order

let array = [7,1,2,3,49,9];

for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
        if (array[j] < array[j + 1]) {

            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}

console.log(array); 