// write a function to split string on the basis of array
function splitStr(str,char) {
 let mainArr=[];
 let index=0;
 let substring="";
 for ( let i=0;i<=str.length-1;i++) {
  if (char==str[i]) {
   mainArr[index] = [substring];
   index++;
   // resetting substring
   substring="";
  } else {
   substring += str[i];
  }
 }
return mainArr;
}
let str="my name is rasba";
let char="a";
let result =splitStr(str,char);
console.log(result);