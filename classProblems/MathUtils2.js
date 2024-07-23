class MathUtils {
  constructor(x,y) {
    this.x=x;
    this.y=y;
  }

  add() {
    return this.x + this.y;
  }
  
  subtract() {
    return this.x - this.y;
  }
  
  multiply() {
    return this.x * this.y;
  }
}

// checking class
let num1 = 12;
let num2 = 2;
// instantiate
let mathUtils = new MathUtils(num1,num2);

console.log(`Addition: ${mathUtils.add()}`);
console.log(`Subtraction: ${mathUtils.subtract()}`);
console.log(`Multiplication: ${mathUtils.multiply()}`);
