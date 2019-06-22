import { car, cdr, cons } from 'hexlet-pairs';
import { generationDataForGames } from './generationDataForGames';
import { gameEngine } from '../index';

const brainGameGCD = () => {
  console.log('\nWelcome to the Brain Games!!!');
  console.log('Find the greatest common divisor of given numbers.');
  const getPairOfStringAndRigthtAnswer = (func) => {
    const firstRandomNumber = car(cdr(func()));
    const seconRandomNumber = cdr(cdr(func()));
    const stringForPlayer = `${firstRandomNumber} ${seconRandomNumber}`;
    let GCD;
    const getGCD = (firstNumber, secondNumber) => {
      for (let i = secondNumber; i >= 1; i -= 1) {
        if (firstNumber % i === 0 && secondNumber % i === 0) {
          GCD = i;
          break;
        }
      }
      return `${GCD}`;
    };
    const pairNumbersAndGCD = cons(stringForPlayer, getGCD(firstRandomNumber, seconRandomNumber));
    return pairNumbersAndGCD;
  };
  gameEngine(getPairOfStringAndRigthtAnswer, generationDataForGames);
};
export default brainGameGCD;
