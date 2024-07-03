 //find lowest value in Array
 let arr=[2,8,5];
 let lowestNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < lowestNum) {
            lowestNum = arr[i];
        }
    }
console.log(lowestNum)