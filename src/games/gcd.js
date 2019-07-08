import { cons } from 'hexlet-pairs';
import { generationWithoutZero } from '../randomGeneration';
import launchEngine from '..';

const annotation = cons('Welcome to the Brain Games!!!', 'Find the greatest common divisor of given numbers.');

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

const brainGcd = () => {
  const getGameData = () => {
    const first = generationWithoutZero(500);
    const second = generationWithoutZero(500);
    const question = `${first} ${second}`;
    const answer = `${getGcd(first, second)}`;
    const gameData = cons(question, answer);
    return gameData;
  };
  launchEngine(getGameData, annotation);
};

export default brainGcd;
