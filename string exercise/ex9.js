// write a function to split string on the basis of character
function splitStr(str,char) {
 let result=[];
 let subarray=str.split(char);
 
//iterate though the subarray
 for (let i=0;i<subarray.length;i++) {

  //remove empty strings
 if (subarray[subarray.length-1]=="") {
  subarray.pop();
 }
 //add each subarray into array
 result.push([subarray[i]]);
}
return result;
}
let str ="my name is rasba";
let char ="a";
let result=splitStr(str,char);
console.log(result);