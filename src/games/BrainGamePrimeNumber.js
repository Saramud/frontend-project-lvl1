import { car, cons } from 'hexlet-pairs';
import { generationDataForGames } from './generationDataForGames';
import { gameEngine } from '../index';

const brainGamePrimeNumber = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if given number is prime. Otherwise answer "no".');
  const getPairOfNumberandHisStatus = (Number) => {
    const increaseNumberRange = 10;
    const randomNumber = car(car(Number())) * (Math.floor(Math.random() * increaseNumberRange));
    const countP = randomNumber - 1;
    const isStatusofNumber = (number, count) => {
      if (count === 1) {
        return 'yes';
      } if (number % count === 0) {
        return 'no';
      }
      return isStatusofNumber(number, count - 1);
    };
    const pairPrime = cons(randomNumber, isStatusofNumber(randomNumber, countP));
    return pairPrime;
  };
  gameEngine(getPairOfNumberandHisStatus, generationDataForGames);
};
export default brainGamePrimeNumber;
