function isFive(num) {
  return num === 5;
}

function isOdd(number) {
  if (typeof number !== "number") {
    throw TypeError("Must be a number");
  }
  return number % 2 !== 0;
}

function myRange(min, max, step = 1) {
  const newArr = [];
  for (let i = min; i <= max; i += step) {
    newArr.push(i);
  }
  return newArr;
}


module.exports = { isFive, isOdd, myRange };
