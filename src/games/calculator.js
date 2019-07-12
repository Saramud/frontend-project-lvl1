import { cons } from 'hexlet-pairs';
import getRandom from '../randomGeneration';
import engine from '..';

const operations = {
  '+': ((a, b) => a + b),
  '-': ((a, b) => a - b),
  '*': ((a, b) => a * b),
};

const annotation = 'What is the result of the expression?';

const brainCalc = () => {
  const getGameData = () => {
    const firstOperand = getRandom(500);
    const secondOperand = getRandom(500);
    const operators = Object.keys(operations);
    const operatorExpression = operators[getRandom(operators.length - 1)];
    const expression = operations[operatorExpression];
    const question = `${firstOperand} ${operatorExpression} ${secondOperand}`;
    const answer = expression(firstOperand, secondOperand).toString();
    const gameData = cons(question, answer);
    return gameData;
  };
  engine(getGameData, annotation);
};

export default brainCalc;
