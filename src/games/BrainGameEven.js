import { car, cons } from 'hexlet-pairs';
import { generationDataForGames } from './generationDataForGames';
import { gameEngine } from '../index';

const brainGameEven = () => {
  console.log('\nWelcome to the Brain Games!!!');
  console.log('Answer "yes" if number even otherwise answer "no"');
  const isStatusofNumber = number => ((number % 2 === 0 && number !== 0) ? 'yes' : 'no');
  const getPairOfNumberAndHisStatus = (Numbers) => {
    const randomNumber = car(car(Numbers()));
    const getStatusNumber = isStatusofNumber(randomNumber);
    const pairNumberAndEvenStatus = cons(randomNumber, getStatusNumber);
    return pairNumberAndEvenStatus;
  };
  gameEngine(getPairOfNumberAndHisStatus, generationDataForGames);
};

export default brainGameEven;
