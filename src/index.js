module.exports = function reverse(number) {
  const regularExp = /[0-9]/g;
  const numberArray = number.toString().match(regularExp);
  const strReversedNumber = numberArray.reverse().join('');
  return +strReversedNumber;
}
