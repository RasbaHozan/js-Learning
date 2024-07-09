 function checkWordPresence(str) {
    let substringSize=substring.length;
     for (let i = 0; i <= str.length - substring.length; i++) {
        let found = true;
        // Check if substring matches starting from index i
        for (let j = 0; j < substring.length; j++) {
            if (str[i+j] !== substring[j]) {
                found = false;
                break;
            }
        }
        if (found==true) {
            return true;
        }
    }
    return false;
}

let str= "my name is rasba";
let substring = "rasba";
console.log(checkWordPresence(str)); 