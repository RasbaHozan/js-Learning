let array = [];

for (let i = 1; i <= 10; i++) {
    array.push(i);
}
console.log("5th element:", array[4]); 
console.log("7th element:", array[6]);   
array[5] = 9; 
console.log(array[5]);
console.log("whole array:", array);