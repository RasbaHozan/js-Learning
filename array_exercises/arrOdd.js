//create an array of odd num from 1 to 100
let oddNumbers=[];
let num=1;
for (let i= 1 ; i <=50 ; i++) {
    oddNumbers[i - 1 ] =num;
    num += 2;
}
console.log(oddNumbers)