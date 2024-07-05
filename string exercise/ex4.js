// write a function to remove vowels 
function removeVowels(str) {
    let filteredStr = "";
    let vowels = "aeiou";
    let len = str.length;
    for (let i = 0; i < len; i++) {
        let char = str[i];
        let vowelFound = false;

        for (let j = 0; j < len; j++) {
            if (char == vowels[j]) {
                vowelFound = true;
}
        }

      
        if (vowelFound == false) {
            filteredStr += str[i];
        }
    }

    return filteredStr;
}

let str ="mathematics";
console.log(removeVowels(str))