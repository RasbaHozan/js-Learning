function findPair(arr,n) {
 for ( let i=0; i<arr.length;i++) {
  for ( let j=0;j<arr.length;j++){
   if (arr[i] + arr[j] == n) {
    return [i,j];
   }
  }
 } // if no pair exists 
 return 0;
}
let arr=[1,2,3,4,5];
let n=7;
console.log(findPair(arr,n))