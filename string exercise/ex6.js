//write a function to find number of times vowel occur in string 

function countVowels(str) {
  str = str.toLowerCase();
let vowelCount ={'a':0,'e':0,'i':0,'o':0,'u':0}

  for (let i=0;i<str.length;i++) {
   let char=str[i];
  if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
 vowelCount[char]++;
  }
  }
  return vowelCount;
}

let str = "my name is mahnoor";
console.log(countVowels(str))