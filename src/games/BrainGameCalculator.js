import { car, cdr, cons } from 'hexlet-pairs';
import { generationDataForGames } from './generationDataForGames';
import { gameEngine } from '../index';
import analogOfEval from './analogOfEval';

const brainGameCalculator = () => {
  console.log('\nWelcome to the Brain Games!!!');
  console.log('What is the result of the expression?');
  const getPairwithExpressionAndHisAnswer = (Numbers) => {
    const randomExpression = cdr(car(Numbers()));
    const resultOfExpression = `${analogOfEval(randomExpression)}`;
    const pairExpressionAndResult = cons(randomExpression, resultOfExpression);
    return pairExpressionAndResult;
  };
  gameEngine(getPairwithExpressionAndHisAnswer, generationDataForGames);
};

export default brainGameCalculator;
