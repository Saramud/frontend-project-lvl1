import { cons } from 'hexlet-pairs';
import getRandom from '../randomGeneration';
import engine from '..';

const annotation = 'Find the greatest common divisor of given numbers.';

const getGcd = (first, second) => {
  let gcd;
  for (let i = second; i >= 1; i -= 1) {
    if (first % i === 0 && second % i === 0) {
      gcd = i;
      break;
    }
  }
  return gcd;
};
const getGameData = () => {
  const first = getRandom(500);
  const second = getRandom(500);
  const question = `${first} ${second}`;
  const answer = getGcd(first, second).toString();
  return cons(question, answer);
};

export default () => engine(getGameData, annotation);
