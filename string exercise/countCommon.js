function countCommon(str1,str2) {
 let commonCount=0;
 for (let i=0;i<=str1.length-1;i++) {
  let commonFound = false;
  for ( let j=0;j<=str2.length-1;j++) {
   if (str1[i] == str2[j]) {
    commonFound=true;
  break;
   }
  } 
  if(commonFound  ==  true) {
    commonCount++ ; 
  }
}
 return commonCount;
}
let mainStr1 = "aabcc" ;
let mainStr2 = "adcaa";
console.log(countCommon(mainStr1,mainStr2));