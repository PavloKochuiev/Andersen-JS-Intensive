function makeObjectDeepCopy(input) {

  if (typeof input !== 'object') {
    return input;
  }

  let copy = Array.isArray(input) ? [] : {};

  for (key in input) {
    const value = input[key];

    copy[key] = makeObjectDeepCopy(value);
  }

  return copy;
}

function selectFromInterval(array, firstRange, secondRange) {

  const isNotValidArray = !array.every(Number);
  const isNotValidRange = typeof firstRange !== 'number' || typeof secondRange !== 'number';

  if (!Array.isArray(array)) {
    throw new Error(`${array} is not array`);
  } else if (isNotValidArray) {
    throw new Error(`Invalid data in array`);
  } else if (isNotValidRange) {
    throw new Error(`Invalid data range value`);
  }

  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (firstRange > secondRange) {
      if (array[i] <= firstRange && array[i] >= secondRange) {
        result.push(array[i]);
      }
    } else if (array[i] <= secondRange && array[i] >= firstRange) {
      result.push(array[i]);
    }
  }

  return result;
}

const myIterable = {
  from: 1,
  to: 4,
};

myIterable[Symbol.iterator] = function () {

  let current = this.from;
  let last = this.to;

  const isNotValid = current > last || !current || !last || typeof current !== 'number' || typeof current !== 'number';

  if (isNotValid) {
    throw new Error('Invalid data, wrong values');
  }

  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};
