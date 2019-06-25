import { cons } from 'hexlet-pairs';
import randomGeneration from '../generationData';
import { gameEngine } from '../index';

const prime = () => {
  const getDataForGames = () => {
    const introduce = 'Welcome to the Brain Games!\nAnswer "yes" if given number is prime. Otherwise answer "no".';
    const range = 10;
    const randomData = randomGeneration() * (Math.floor(Math.random() * range));
    const dividerCount = randomData - 1;
    const hasPrime = (number, count) => {
      if (count === 1) {
        return 'yes';
      } if (number % count === 0) {
        return 'no';
      }
      return hasPrime(number, count - 1);
    };
    const questionAndAnswer = cons(randomData, hasPrime(randomData, dividerCount));
    const dataForGames = cons(questionAndAnswer, introduce);
    return dataForGames;
  };
  gameEngine(getDataForGames);
};

export default prime;
