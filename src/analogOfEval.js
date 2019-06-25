const analogOfEval = (string) => {
  const dataTransfer = [];
  let first = '';
  let second = '';
  let symbolOfExpression = '';
  let rezultOfExpression = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] !== ' ') dataTransfer.push(string[i]);
  }
  for (let j = 0; j < dataTransfer.length; j += 1) {
    if (dataTransfer[j] !== '-' && dataTransfer[j] !== '+' && dataTransfer[j] !== '*') {
      first += dataTransfer[j];
    } else {
      symbolOfExpression += j;
      for (let o = j + 1; o < dataTransfer.length; o += 1) {
        second += dataTransfer[o];
      }
      break;
    }
  }
  if (dataTransfer[symbolOfExpression] === '+') {
    rezultOfExpression = (first * 1) + (second * 1);
  } else if (dataTransfer[symbolOfExpression] === '-') {
    rezultOfExpression = (first * 1) - (second * 1);
  } else {
    rezultOfExpression = (first * 1) * (second * 1);
  }
  return rezultOfExpression;
};

export default analogOfEval;
