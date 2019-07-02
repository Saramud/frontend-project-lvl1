import { cons } from 'hexlet-pairs';
import randomGeneration from '../randomGeneration';
import launchEngine from '..';

const templates = {
  '+': ((a, b) => a * 1 + b * 1),
  '-': ((a, b) => a - b),
  '*': ((a, b) => a * b),
};

const analogEval = (string) => {
  const expression = string.split(' ');
  const y = templates[expression[1]];
  return y(expression[0], expression[2]);
};

const annotation = ['Welcome to the Brain Games!!!', 'What is the result of the expression?'];

const brainCalc = () => {
  const getGameData = () => {
    const firstOperand = randomGeneration(500, 500);
    const secondOperand = randomGeneration(500, 500);
    const expressions = [(frst, sec) => `${frst} + ${sec}`, (frst, sec) => `${frst} - ${sec}`, (frst, sec) => `${frst} * ${sec}`];
    const randomRange = randomGeneration(expressions.length);
    const selectedExpression = expressions[randomRange];
    const question = selectedExpression(firstOperand, secondOperand);
    const answer = `${analogEval(question)}`;
    const gameData = cons(question, answer);
    return gameData;
  };
  launchEngine(getGameData, annotation);
};

export default brainCalc;
