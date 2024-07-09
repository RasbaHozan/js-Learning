//write a function to check presence of word in string
function checkWordPresence(str) {
 let substringSize=substring.length;
//iterate through the string to check presence of substring
 for ( let i=0; i<str.length - substring.length  ;i++) {
  //check the position of substring in string
  if ( str.substr(i,substring.length) == substring) { 
   return true;
 }
} return false;
}
let str="my name is rasba";
let substring="is";
console.log(checkWordPresence(str))