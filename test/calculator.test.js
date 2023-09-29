const calculator = require('../calculator.js')

it("should add two numbers", () => {
  //Arrange
    const number1 = 1
    const number2 = 2
    const resNumber = 3
  //Act
    const result = calculator.my_addition(number1, number2);
  //Assert
    expect(result).toBe(resNumber)
});

it("should add two 3 and 4 to 7", () => {
  //Arrange
    const number1 = 3
    const number2 = 4
    const resNumber = 7
  //Act
    const result = calculator.my_addition(number1, number2);
  //Assert
    expect(result).toBe(resNumber)
});