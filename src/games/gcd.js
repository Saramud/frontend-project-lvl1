import { cons } from 'hexlet-pairs';
import randomGeneration from '../generationData';
import { gameEngine } from '..';

const annotation = '\nWelcome to the Brain Games!!!\nFind the greatest common divisor of given numbers.';

const getGcd = (firstNumber, secondNumber) => {
  let gcd;
  for (let i = secondNumber; i >= 1; i -= 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      gcd = i;
      break;
    }
  }
  return `${gcd}`;
};

const gcd = () => {
  const getDataGames = () => {
    const first = randomGeneration(500);
    const second = randomGeneration(500);
    const question = `${first} ${second}`;
    const answer = getGcd(first, second);
    const quastionAnswer = cons(question, answer);
    const gameData = cons(quastionAnswer, annotation);
    return gameData;
  };
  gameEngine(getDataGames);
};

export default gcd;
