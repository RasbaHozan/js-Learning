function findMissing(arr) {
 let n=arr.length;
 //expected sum for n natural numbers
 let expectedSum= n*(n+1)/2;
let actualSum=0;
 for (let i=0;i<arr.length;i++) {
    actualSum += arr[i];
 }

 missingNum = expectedSum - actualSum;
  return missingNum;
}
 
let inputArr=[0,1,2,3,5,6];
console.log(findMissing(inputArr));