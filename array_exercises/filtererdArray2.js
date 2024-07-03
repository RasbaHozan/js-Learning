//Write a program to create an array of numbers from 1 to 100 where every number divisible by 3 or 5 is skipped
    let array = [];
    let index = 0;

    for (let i = 1; i <= 100; i++) {
        if (i % 3 !== 0 || i % 5 !== 0) {
            array[index++] = i;
        }
    }
    console.log(array);