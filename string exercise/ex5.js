//write a function to convert string into upper and lower case 
function convertCase(str) {
    let lowercaseStr = str.toLowerCase();
    let uppercaseStr = str.toUpperCase();

    return {
         lowercaseStr,
         uppercaseStr
    }
}

let str = "Apple is red";
let converted = convertCase(str);
console.log(convertCase(str))