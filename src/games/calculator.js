import { cons } from 'hexlet-pairs';
import randomGeneration from '../generationData';
import { gameEngine } from '..';


const analogOfEval = (string) => {
  const masString = string.split(' ');
  const templates = {
    '+': (masString[0] * 1) + (masString[2] * 1),
    '-': masString[0] - masString[2],
    '*': masString[0] * masString[2],
  };
  return templates[masString[1]];
};

const annotation = '\nWelcome to the Brain Games!!!\nWhat is the result of the expression?';

const calculator = () => {
  const getDataGames = () => {
    const firstOperand = randomGeneration(500);
    const secondOperand = randomGeneration(500);
    const expressions = [`${firstOperand} - ${secondOperand}`, `${firstOperand} + ${secondOperand}`, `${firstOperand} * ${secondOperand}`];
    const coeffForChoice = 3;
    const randomRange = Math.floor(Math.random() * coeffForChoice);
    const question = expressions[randomRange];
    const answer = `${analogOfEval(question)}`;
    const questionAnswer = cons(question, answer);
    const gameData = cons(questionAnswer, annotation);
    return gameData;
  };
  gameEngine(getDataGames);
};

export default calculator;
