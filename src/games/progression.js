import { cons } from 'hexlet-pairs';
import getRandom from '../randomGeneration';
import engine from '..';

const annotation = 'What number is missing in the progression?';
const lengthProgression = 10;

const getProgression = (length, first, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(first + step * i);
  }
  return progression;
};

const getGameData = () => {
  const first = getRandom(1, 500);
  const step = getRandom(2, 12);
  const progression = getProgression(lengthProgression, first, step);
  let question = '';
  const hiddenElementPosition = getRandom(0, lengthProgression - 1);
  const answer = progression[hiddenElementPosition].toString();
  progression[hiddenElementPosition] = '..';
  question = progression.join(' ');
  return cons(question, answer);
};

export default () => engine(getGameData, annotation);
