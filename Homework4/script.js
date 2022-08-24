function concatStrings(string, separator) {
  let concatenatedString = string;
  const separatorValue = typeof separator === 'string' ? separator : '';

  function getAllStrings(string) {
    if (typeof string !== 'string') {
      return concatenatedString;
    }

    concatenatedString += separatorValue + string;

    return getAllStrings;
  }

  return getAllStrings;
}

function isValidNumber(number) {
  const isInvalidNumbers = typeof number !== 'number' || !isFinite(number) || isNaN(number);

  if (isInvalidNumbers) {
    throw new Error('Invalid number');
  }

  return true;
}

class Calculator {
  constructor(firstNumber, secondNumber) {
    const numbers = [firstNumber, secondNumber];

    if (numbers.length !== 2) {
      throw new Error('Invalid amount of numbers');
    }

    isValidNumber(firstNumber);
    isValidNumber(secondNumber);

    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
    this.logSum = this.logSum.bind(this);
    this.logMul = this.logMul.bind(this);
    this.logSub = this.logSub.bind(this);
    this.logDiv = this.logDiv.bind(this);
  }

  setX(number) {
    isValidNumber(number);

    return (this.firstNumber = number);
  }

  setY(number) {
    isValidNumber(number);

    return (this.secondNumber = number);
  }

  logSum() {
    return this.firstNumber + this.secondNumber;
  }

  logMul() {
    return this.firstNumber * this.secondNumber;
  }

  logSub() {
    return this.firstNumber - this.secondNumber;
  }

  logDiv() {
    if (this.secondNumber === 0) {
      throw new Error('Invalid data, you can not divide by 0');
    }

    return this.firstNumber / this.secondNumber;
  }
}
