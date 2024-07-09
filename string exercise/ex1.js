//Write a function to find the occurance of a character in a string. 

function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == char) {
            count++;
        }
    }
    return count;
}
let str = "my name is rasba";
let char = 'o';
console.log(countOccurrences(str, char))