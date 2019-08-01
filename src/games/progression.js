import { cons } from 'hexlet-pairs';
import getRandom from '../randomGeneration';
import engine from '..';

const annotation = 'What number is missing in the progression?';
const lengthProgression = 10;

const getProgression = (length, first, step) => {
  const progressions = [];
  for (let i = 0; i < length; i += 1) {
    progressions.push(first + step * i);
  }
  return progressions;
};

const getGameData = () => {
  const first = getRandom(500);
  const progressionStep = getRandom(8);
  const progression = getProgression(lengthProgression, first, progressionStep);
  let question = '';
  const emptyPosition = getRandom(lengthProgression - 1);
  const answer = progression[emptyPosition].toString();
  progression[emptyPosition] = '..';
  question = progression.join(' ');
  return cons(question, answer);
};

export default () => engine(getGameData, annotation);
