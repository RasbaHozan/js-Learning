//Write a function to reverse the whole string.

function reverseStr(str) {
 let reversedStr="";
 let len = str.length;
 for(i=len-1 ; i >= 0 ; i--) {
  reversedStr += str[i];
 }
 return reversedStr;
}
let str="my name is mahnoor";
console.log(reverseStr(str))