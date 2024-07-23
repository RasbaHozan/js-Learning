class MathUtils {
    static add(x, y) {
      return x + y;
    }
  
    static multiply(x, y) {
      return x * y;
    }
  }
  
  // Testing the MathUtils class
  const num1 = 12;
  const num2 = 2;
  
  console.log(`Addition: ${MathUtils.add(num1, num2)}`); 
 
  console.log(`Multiplication: ${MathUtils.multiply(num1, num2)}`);
  