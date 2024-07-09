// write a function to remove vowels 
function removeVowels(str) {
    let filteredStr = "";
    let vowels = "aeiou";
    let len = str.length;
    //iterate through each char in string
    for (let i = 0; i < len; i++) {
        let char = str[i];
        let vowelFound = false;
//loop through each vowel to check if char is vowel
        for (let j = 0; j < len; j++) {
            if (char == vowels[j]) {
                vowelFound = true;
            
}
        }
        if (vowelFound==false) {
            filteredStr += str[i];
        }
    }

    return filteredStr;
}

let str ="mathematics";
console.log(removeVowels(str))