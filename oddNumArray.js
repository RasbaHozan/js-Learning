function findOddNumbers() {
    let oddNumbers = [];
    for (let i = 1 ; i <= 100 ; i +=2) {
        oddNumbers.push(i);
    } 
    return oddNumbers;
}
const oddNumbers = findOddNumbers();
console.log("Odd Numbers From 1 to 100;", oddNumbers)