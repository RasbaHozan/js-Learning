//write a function to replace the string with substring
function replaceStr(str1,str2, substring) {
    let result = "";
    let index = 0;
    for (let i = 0; i < str1.length; i++) {
        let found = true;
        for (let j = 0; j < substring.length; j++) {
            if (str1[i + j] !== substring[j]) {
                found = false;
                break;
            }
        }
        if (found==true) {
            result += str2; 
            i += substring.length - 1;
        } else {
            result += str1[i];
    
    }
}
    return result;
   }
let str1 = "hello there";
let substring = "llo";
let str2 = "pop";

let result = replaceStr(str1,str2, substring)
console.log(result);