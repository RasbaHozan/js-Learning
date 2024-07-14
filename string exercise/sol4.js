function checkBalance(str) {
 let openCount = 0;
 let closeCount = 0;

 for (let i = 0; i < str.length; i++) {

  if (str[i] == "(" || str[i]== "{" || str[i] =="[") {
     openCount++;
   } 
   
   if (str[i] == ")" ||str[i]=="}" || str[i]=="]") {
     closeCount++;
   }
  }

 return openCount == closeCount;
}
let inputStr = "()}";
console.log(checkBalance(inputStr));