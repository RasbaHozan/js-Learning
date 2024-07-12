// write a function to split string into chunks of specific length.
function solution (str) {
 let array =[];
let substring="";
for ( let i=0; i<str.length;i++) {
 substring += str[i];
 if (substring.length == splitLength|| i== str.length-1) {
  array[array.length] =substring;
  substring= "";
 }
}
return array ;
}
let str = "my name is rasba ";
let splitLength=2;
console.log(solution(str));