import { cons } from 'hexlet-pairs';
import getRandom from '../randomGeneration';
import launchEngine from '..';

const isEven = number => (number % 2 === 0 && number !== 0);

const annotation = 'Answer "yes" if number even otherwise answer "no"';
const getGameData = () => {
  const question = getRandom(1, 500);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => launchEngine(getGameData, annotation);
