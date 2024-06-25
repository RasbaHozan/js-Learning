function displayNumbers() {
    let numArray = [];
    for ( let i = 100 ; i >= 1 ; i--) {
          numArray.push(i);
    }
     return numArray;
}
const numArray = displayNumbers();
console.log("numbers from 100 to 1:", displayNumbers());