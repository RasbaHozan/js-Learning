function countCommonChar(str1,str2) {
 let commonCount=0;
 for (let i=0;i<str1.length;i++) {
  for (let j=0;j<str2.length;j++) {
 if(str1[i]==str2[j]){
 commonCount++;
 console.log(str1[i],str2[j],i,j);
break;
  }
 }
 }
  return commonCount;
 }

 let str1 = "aabccc"
 let str2 = "adcaaef"
 console.log(countCommonChar(str1,str2))


 /*
 i=0;str[i]=a;str2[j]=a;j=0
 i=0;str1[i]=a;str2[j]=d;j=1
 i=0;str1=[i]=a;str2[j]=c;j=2
 i=0;str1=[i]=a;str2[j]=a;j=3
 */