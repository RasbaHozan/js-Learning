//write a function to replace the string with substring
function replaceStr(str, substr) {
    let result = "";
    let index = 0;
    for (let i = 0; i < str.length; i++) {
        let found = true;
        for (let j = 0; j < substr.length; j++) {
            if (str[i + j] !== substr[j]) {
                found = false;
                break;
            }
        }
        if (found==true) {
            result += str2; 
            i += substr.length - 1;
        } else {
            result += str[i];
        }
    }
    return result;
   }
let str1 = "hello there";
let substr = "llo";
let str2 = "pop";

let result = replaceStr(str1, substr)
console.log(result);