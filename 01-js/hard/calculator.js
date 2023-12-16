/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor(result) {
    if (result == undefined) {
      this.result = 0;
    } else {
      this.result = result;
    }
  }
  throwErrorIfNotANmber(number, opertion) {
    if (typeof number != "number") {
      throw new Error(`Invalid Number ${number}, I can't perform ${opertion}`);
    }
  }
  add(number) {
    this.throwErrorIfNotANmber(number, "addition");
    this.result += number;
  }
  subtract(number) {
    this.throwErrorIfNotANmber(number, "substraction");
    this.result -= number;
  }
  multiply(number) {
    this.throwErrorIfNotANmber(number, "multiplication");
    this.result *= number;
  }
  divide(number) {
    this.throwErrorIfNotANmber(number, "division");
    if (number == 0) {
      throw new Error(`Devide by 0 not allowed`);
    }
    this.result /= number;
  }
  clear() {
    this.result = 0;
  }
  getResult() {
    return this.result;
  }
  calculate(exp) {
    this.clear();
    //calculate
    exp = exp.replace(/\s/g, "");
    let tempResult = eval(exp);
    if (tempResult != Infinity) {
      this.result = eval(exp);
    } else {
      throw new Error(`Invalid operation ${number}`);
    }
  }
}

module.exports = Calculator;
