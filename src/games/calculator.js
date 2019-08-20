import { cons } from 'hexlet-pairs';
import getRandom from '../randomGeneration';
import engine from '..';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};
const operators = Object.keys(operations);

const annotation = 'What is the result of the expression?';

const getGameData = () => {
  const firstOperand = getRandom(1, 500);
  const secondOperand = getRandom(1, 500);
  const operator = operators[getRandom(0, operators.length - 1)];
  const operation = operations[operator];
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const answer = operation(firstOperand, secondOperand).toString();
  return cons(question, answer);
};

export default () => engine(getGameData, annotation);
