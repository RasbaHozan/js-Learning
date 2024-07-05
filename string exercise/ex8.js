function reverseWords(str) {
  let word =""; 
  let reversedStr= "";
  
  for (let i=0; i< str.length; i++) {
   if (str[i] == " ") {
    reversedStr += reverseWord(word)+ " ";
    word =""; 
   } else {
    word += str[i];
   }
  }
  reversedStr += reverseWord(word);
return reversedStr;
 }

  function reverseWord(word) {
   let reversedWord ="";
   for (let i=word.length - 1;i>=0;i--) {
    reversedWord += word[i];
   }
   return reversedWord;
  }
 let str = "apple is red";
 console.log(reverseWords(str))