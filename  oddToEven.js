function convertOddToEven(number) {
 if (number % 2 !== 0) {
      number++;
    }
    return number;
  }
  let oddNumber = 1;
  let evenNumber = convertOddToEven(oddNumber);
  console.log(evenNumber)