function countCommon(str1,str2) {
 let commonCount=0;
 for (let i=0;i<str1.length;i++) {
  for ( let j=0;j<str2.length;j++) {
   if (str1[i] == str2[j]) {
    commonCount++;
    str2 = str2.slice(0,j) + str2.slice(j + 1)
  break;
   }
  }
 }
 return commonCount;
}

let str1 = "aabcc" ;
let str2 = "adcaa";
console.log(countCommon(str1,str2))