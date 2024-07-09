//write function to reverse each element of array in an array of string 
function reverseElements(arr) {
 let result=[];
 //iterate through each element of array
 for(let i =0; i<arr.length;i++) {
  let str=arr[i];
  let reversedStr="";
  //iteration through each element of reversed string
  for (let j=str.length-1;j>=0;j--) {
   reversedStr += str[j];
  }
arr[i] = reversedStr;
 }
return arr;
}
let arr=["book","car"];
let result=reverseElements(arr);
console.log(result);