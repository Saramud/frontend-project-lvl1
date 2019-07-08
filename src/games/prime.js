import { cons } from 'hexlet-pairs';
import randomGeneration from '../randomGeneration';
import launchEngine from '..';

const annotation = cons('Welcome to the Brain Games!', 'Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (checkNumber) => {
  const divider = checkNumber - 1;
  const getStatus = (a, b) => {
    if (b === 1) {
      return true;
    } if (a % b === 0) {
      return false;
    }
    return getStatus(a, b - 1);
  };
  return getStatus(checkNumber, divider);
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
