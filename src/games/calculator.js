import { cons } from 'hexlet-pairs';
import randomGeneration from '../generationData';
import { gameEngine } from '..';


const analogOfEval = (string) => {
  const expression = string.split(' ');
  const templates = {
    '+': (expression[0] * 1) + (expression[2] * 1),
    '-': expression[0] - expression[2],
    '*': expression[0] * expression[2],
  };
  return templates[expression[1]];
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
