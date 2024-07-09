//write  a function to reverse each word of string
function reverseWords(str) {
    let result = '';
    let wordStart = 0;
    let wordEnd = 0;

    for (let i = 0; i <= str.length; i++) {
        // Check for end of word or end of string
        if (str[i] == ' ' || i == str.length) {
            wordEnd = i - 1;
            // Reverse the current word
            for (let j = wordEnd; j >= wordStart; j--) {
                result += str[j];
            }
            // Add space if it's not the last word
            if (i !== str.length) {
                result += ' ';
            }
            // Move to the start of the next word
            wordStart = i + 1;
        }
    }

    return result;
}

let inputString = "apple is red";
let result = reverseWords(inputString);
console.log(result);