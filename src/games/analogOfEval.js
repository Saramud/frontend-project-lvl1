const analogOfEval = (string) => {
  const stringToMassive = [];
  let secondNumber = '';
  let symbolOfExpression = '';
  let rezultOfExpression = '';
  let firstNumber = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] !== ' ') stringToMassive.push(string[i]);
  }
  for (let j = 0; j < stringToMassive.length; j += 1) {
    if (stringToMassive[j] !== '-' && stringToMassive[j] !== '+' && stringToMassive[j] !== '*') {
      firstNumber += stringToMassive[j];
    } else {
      symbolOfExpression += j;
      for (let o = j + 1; o < stringToMassive.length; o += 1) {
        secondNumber += stringToMassive[o];
      }
      break;
    }
  }
  if (stringToMassive[symbolOfExpression] === '+') {
    rezultOfExpression = (firstNumber * 1) + (secondNumber * 1);
  } else if (stringToMassive[symbolOfExpression] === '-') {
    rezultOfExpression = (firstNumber * 1) - (secondNumber * 1);
  } else {
    rezultOfExpression = (firstNumber * 1) * (secondNumber * 1);
  }
  return rezultOfExpression;
};
export default analogOfEval;
