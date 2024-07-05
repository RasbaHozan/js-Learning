// write a function to remove space from string
function removeSpace(str) {
 let filteredStr ="" ;
 for ( let i=0; i<str.length;i++) {
  if(str[i] !== " ") {
   filteredStr += str[i];
  }
 }
 return filteredStr;
}
let str= "Apple is red"
console.log(removeSpace(str))