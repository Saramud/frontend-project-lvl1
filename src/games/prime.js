import { cons } from 'hexlet-pairs';
import getRandom from '../randomGeneration';
import engine from '..';

const annotation = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const getStatus = (a, acc) => {
    if (acc === a) {
      return true;
    } if (a % acc === 0) {
      return false;
    }
    return getStatus(a, acc + 1);
  };
  return getStatus(num, 2);
};

const brainPrime = () => {
  const getGameData = () => {
    const question = getRandom(100);
    const answer = isPrime(question) ? 'yes' : 'no';
    const gameData = cons(question, answer);
    return gameData;
  };
  engine(getGameData, annotation);
};

export default brainPrime;
