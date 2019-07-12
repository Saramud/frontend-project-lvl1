import { cons } from 'hexlet-pairs';
import randomData from '../randomGeneration';
import launchEngine from '..';

const isEven = number => (number % 2 === 0 && number !== 0);

const annotation = 'Answer "yes" if number even otherwise answer "no"';
const getGameData = () => {
  const question = randomData(500);
  const answer = isEven(question) ? 'yes' : 'no';
  const gameData = cons(question, answer);
  return gameData;
};

const brainEven = () => launchEngine(getGameData, annotation);


export default brainEven;
