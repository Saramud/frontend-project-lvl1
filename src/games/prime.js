import { cons } from 'hexlet-pairs';
import randomGeneration from '../generationData';
import { gameEngine } from '..';

const annotation = 'Welcome to the Brain Games!\nAnswer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number, count) => {
  if (count === 1) {
    return true;
  } if (number % count === 0) {
    return false;
  }
  return isPrime(number, count - 1);
};

const prime = () => {
  const getDataForGames = () => {
    const range = 10;
    const question = randomGeneration(500) * (Math.floor(Math.random() * range));
    const dividerCount = question - 1;
    const answer = isPrime(question, dividerCount) ? 'yes' : 'no';
    const questionAnswer = cons(question, answer);
    const gameData = cons(questionAnswer, annotation);
    return gameData;
  };
  gameEngine(getDataForGames);
};

export default prime;
