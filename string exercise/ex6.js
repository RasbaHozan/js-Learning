//write  a function to count vowels in a string 
function vowelCount(str) {
 
  let vowels = "aeiou";
  let vowelCount = 0;

  // Iterate through each character in the string
  for (let i = 0; i < str.length; i++) {
    let vowelFound= false;
  
    // Iterate through each vowel in the vowels string
    for (let j = 0; j < vowels.length; j++) {
      // Check if the current character matches any vowel
      if (str[i] == vowels[j]) {
        vowelFound = true;
        break; 
      }
    }
    
    // If current character is a vowel, increment the vowel count
    if (vowelFound == true) {
      vowelCount++;
    }
  }
  return vowelCount;
}

let str = "my name is rasba";
console.log(vowelCount(str));