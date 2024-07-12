function midArr(arr) {
 let result=[];
 let index= Math.floor (arr.length / 2);
for (let i=index+1; i<arr.length;i++) {
 result[result.length] =arr[i];
}
return result;
}
let arr=[8,4,4,5,7,82];
console.log(midArr(arr));