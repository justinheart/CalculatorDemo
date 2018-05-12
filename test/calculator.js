const assert = require("assert");
const Calculator = require("../src/js/calculator");

describe("#isEqualToCurrentType()", () => {
  it("should return true if inuptType is equal to currentType", () => {
    let calculator = new Calculator();
    calculator.currentType = true; // set current type to true(number)
    assert.equal(calculator.isEqualToCurrentType("100"), true);
  });

  it("should return false if inuptType isn't equal to currentType", () => {
    let calculator = new Calculator();
    calculator.currentType = true; // set current type to true(as number)
    assert.equal(calculator.isEqualToCurrentType('+'), false);
    assert.equal(calculator.isEqualToCurrentType('-'), false);
    assert.equal(calculator.isEqualToCurrentType('×'), false);
    assert.equal(calculator.isEqualToCurrentType('÷'), false);
  });
});