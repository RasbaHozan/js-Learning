function filterArray() {
    let arr = [];
    for (let i = 1; i <= 100 ; i++) {
        if (i % 3 !== 0 && i % 5 !== 0) {
            arr.push(i);
        }
    }
    return arr;
}
const filteredArray = filterArray();
console.log(filteredArray);