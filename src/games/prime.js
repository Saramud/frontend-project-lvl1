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
const getGameData = () => {
  const question = getRandom(100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => engine(getGameData, annotation);
