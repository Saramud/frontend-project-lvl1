import { cons } from 'hexlet-pairs';
import randomGeneration from '../generationData';
import { gameEngine } from '../index';
import analogOfEval from '../analogOfEval';

const calculator = () => {
  const getDataForGames = () => {
    const firstOperand = randomGeneration();
    const secondOperand = randomGeneration();
    const introduce = '\nWelcome to the Brain Games!!!\nWhat is the result of the expression?';
    const expressions = [`${firstOperand} - ${secondOperand}`, `${firstOperand} + ${secondOperand}`, `${firstOperand} * ${secondOperand}`];
    const coeffForChoice = 3;
    const randomRange = Math.floor(Math.random() * coeffForChoice);
    const randomExpression = expressions[randomRange];
    const resultOfExpression = `${analogOfEval(randomExpression)}`;
    const expressionAndResult = cons(randomExpression, resultOfExpression);
    const dataForGames = cons(expressionAndResult, introduce);
    return dataForGames;
  };
  gameEngine(getDataForGames);
};

export default calculator;
