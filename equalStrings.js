function checkEqualStrings(str1,str2) {
    if (str1 === str2) {
        return str1 + "is equal to " + str2
    } else {
        return str1 + " is not equal to " + str2
    }
}

let str1="English";
let str2="Maths";
let result=checkEqualStrings(str1,str2);
console.log(result)