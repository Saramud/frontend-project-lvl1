import { cons } from 'hexlet-pairs';
import randomGeneration from '../randomGeneration';
import launchEngine from '..';

const collectionOperations = {
  '+': ((a, b) => a + b),
  '-': ((a, b) => a - b),
  '*': ((a, b) => a * b),
};

const annotation = cons('Welcome to the Brain Games!!!', 'What is the result of the expression?');

const brainCalc = () => {
  const getGameData = () => {
    const firstOperand = randomGeneration(500);
    const secondOperand = randomGeneration(500);
    const expressions = [(first, second) => `${first} + ${second}`, (first, second) => `${first} - ${second}`, (first, second) => `${first} * ${second}`];
    const randomRange = randomGeneration(expressions.length);
    const selectedExpression = expressions[randomRange];
    const question = selectedExpression(firstOperand, secondOperand);
    const expression = question.split(' ');
    const operationSelected = collectionOperations[expression[1]];
    const answer = `${operationSelected(firstOperand, secondOperand)}`;
    const gameData = cons(question, answer);
    return gameData;
  };
  launchEngine(getGameData, annotation);
};

export default brainCalc;
