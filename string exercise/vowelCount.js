//write a function to find number of times vowel occur in string 

function countVowels(str) {
  str = str.toLowerCase();
  let vowelCount=0;
let vowel="aeiou";

  for (let i=0;i<str.length;i++) {
   let char=str[i];
  if (char == vowel[i]) {
 vowelCount++;
  }
  }
  return vowelCount;
}

let str = "my name is mahnoor";
console.log(countVowels(str))