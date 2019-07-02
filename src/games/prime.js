import { cons } from 'hexlet-pairs';
import randomGeneration from '../randomGeneration';
import launchEngine from '..';

const annotation = ['Welcome to the Brain Games!', 'Answer "yes" if given number is prime. Otherwise answer "no".'];

const isPrime = (divident) => {
  const divider = divident - 1;
  const getStatus = (a, b) => {
    if (b === 1) {
      return true;
    } if (a % b === 0) {
      return false;
    }
    return getStatus(a, b - 1);
  };
  return getStatus(divident, divider);
};

const brainPrime = () => {
  const getGameData = () => {
    const question = randomGeneration(100);
    const answer = isPrime(question) ? 'yes' : 'no';
    const gameData = cons(question, answer);
    return gameData;
  };
  launchEngine(getGameData, annotation);
};

export default brainPrime;
