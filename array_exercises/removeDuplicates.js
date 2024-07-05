function removeDuplicates(arr) {
 let uniqueArr=[];
 uniqueIndex=0;
 let len = arr.length;
 for ( let i =0; i<len ;i++) {
  let element = arr[i];
  let duplicate =false;
 for (let j=0;j<len ;j++) {
  if (element == uniqueArr[j]) {
   duplicate = true;
  }
 }
 //if duplicate is false 
 if (duplicate == false ) {
  uniqueArr[uniqueIndex++] = arr[i];
 }
}
 return uniqueArr;
} 
let arr= [2,34,4,2,4, 1,1 ,1 ,3];
console.log(removeDuplicates(arr))