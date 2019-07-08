import { cons } from 'hexlet-pairs';
import { randomGeneration as generationWithoutZero } from '../randomGeneration';
import launchEngine from '..';

const collectionOperations = {
  operators: ['+', '-', '*'],
  '+': ((a, b) => a + b),
  '-': ((a, b) => a - b),
  '*': ((a, b) => a * b),
};

const annotation = cons('Welcome to the Brain Games!!!', 'What is the result of the expression?');

const brainCalc = () => {
  const getGameData = () => {
    const firstOperand = generationWithoutZero(500);
    const secondOperand = generationWithoutZero(500);
    const operatorsCollection = collectionOperations.operators;
    const randomRange = generationWithoutZero(operatorsCollection.length);
    const selectedOperator = operatorsCollection[randomRange];
    const question = `${firstOperand} ${selectedOperator} ${secondOperand}`;
    const operationSelected = collectionOperations[selectedOperator];
    const answer = `${operationSelected(firstOperand, secondOperand)}`;
    const gameData = cons(question, answer);
    return gameData;
  };
  launchEngine(getGameData, annotation);
};

export default brainCalc;
