//write function to count vowel in a string
function vowelCount(str) {
let vowelCount = 0;
let vowel= "aeiou";
for (let i=0;i<str.length;i++) {
 let char = str[i];
 if ( vowel.includes(char)) {
  vowelCount++;
 }
}
return vowelCount;
}
let str="apple,orange";
console.log(vowelCount(str))