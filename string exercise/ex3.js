  // write a function to remove certain character from string 
  
  function removeChar(str){
  let filteredStr ='';
let char = 'm' ;
    for (let i = 0; i <= str.length -1; i++) {
        if (str[i] !== char) {
          filteredStr += str[i];
    }
  }
  return filteredStr;
}
 let str = 'my name is mahnoor';
    console.log(removeChar(str))
