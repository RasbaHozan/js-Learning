class MathUtils {
  constructor(x,y) {
    this.x=x;
    this.y=y;
  }
    static add(x, y) {
      return x + y;
    }
  subtract() {
    return this.x - this.y;
  }
    static multiply(x, y) {
      return x * y;
    }
  }

  // Testing the MathUtils class
  let num1 = 12;
  let num2 = 2;
  
  let  MathObj = new MathUtils(num1,num2);

  console.log(`Addition: ${MathUtils.add(num1, num2)}`); 
 console.log (`subtraction:${MathObj.subtract()}`);
  console.log(`Multiplication: ${MathUtils.multiply(num1, num2)}`);
  