import { cons } from 'hexlet-pairs';
import randomGeneration from '../randomGeneration';
import launchEngine from '..';

const isEven = number => (number % 2 === 0 && number !== 0);

const annotation = cons('Welcome to the Brain Games!!!', 'Answer "yes" if number even otherwise answer "no"');

const brainEven = () => {
  const getGameData = () => {
    const question = randomGeneration(500);
    const answer = isEven(question) ? 'yes' : 'no';
    const gameData = cons(question, answer);
    return gameData;
  };
  launchEngine(getGameData, annotation);
};

export default brainEven;
