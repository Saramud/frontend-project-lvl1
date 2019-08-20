import { cons } from 'hexlet-pairs';
import getRandom from '../randomGeneration';
import engine from '..';

const annotation = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  const iter = (counter) => {
    if (counter > num / 2) {
      return true;
    }
    if (num % counter === 0) {
      return false;
    }
    return iter(counter + 1);
  };
  return iter(2);
};

const getGameData = () => {
  const question = getRandom(0, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => engine(getGameData, annotation);
